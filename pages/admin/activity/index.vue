<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="Activity" />
    <q-card flat bordered class="q-mt-lg">
      <q-item class="bg-grey-4">
        <q-item-section>
          <q-item-label class="row no-wrap items-center">
            <q-btn
              outline
              flat
              round
              color="primary"
              size="sm"
              icon="autorenew"
              @click="onLoadData"
            >
              <q-tooltip> Reload </q-tooltip>
            </q-btn>

            <q-separator vertical class="q-ml-md q-mr-md" />
            <span class="text-bold">Activity Data</span>

            <q-space />

            <div class="q-gutter-sm">
              <q-btn
                v-if="hasCreate"
                outline
                flat
                round
                color="secondary"
                size="sm"
                icon="add"
                @click="onCreteActivity"
              >
                <q-tooltip> Create New Item </q-tooltip>
              </q-btn>

              <q-btn
                v-if="hasEdit"
                outline
                flat
                round
                color="primary"
                size="sm"
                icon="edit"
                @click="onEditItem"
              >
                <q-tooltip> Edit item </q-tooltip>
              </q-btn>

              <q-btn
                v-if="hasDelete"
                outline
                flat
                round
                color="red"
                size="sm"
                icon="delete"
                @click="onDelete"
              >
                <q-tooltip> Delete Item </q-tooltip>
              </q-btn>
            </div>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section>
        <q-table
          v-model:selected="selected"
          class="my-table"
          flat
          bordered
          :rows="rows"
          :columns="columns"
          row-key="_id"
          selection="multiple"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const columns = ref([
  {
    name: "activity_id",
    label: "ACTIVITY ID",
    field: "activity_id",
    sortable: true,
  },
  { name: "name", label: "NAME", field: "name", sortable: true },
  { name: "href", label: "PATH / HREF", field: "href" },
  { name: "activity_parent", label: "PARENT", field: "activity_parent" },
]);
const rows = ref([]);
const selected = ref([]);
const router = useRouter();
const route = useRoute();
const store = useStore();

const hasCreate = computed(() =>
  hasPermissions({ path: route.fullPath, action: "create" }),
);

const hasEdit = computed(() =>
  hasPermissions({ path: route.fullPath, action: "edit" }),
);

const hasDelete = computed(() =>
  hasPermissions({ path: route.fullPath, action: "delete" }),
);

const onCreteActivity = () => {
  router.push("/admin/activity/form-input");
  store.commit("activity/clearActivity");
};

const onLoadData = async () => {
  await store.dispatch("activity/getActivityList");
  rows.value = store.getters["activity/getActivityList"];
};

const onDelete = async () => {
  const deleteIds = selected.value.map((item) => item._id);
  if (deleteIds.length <= 0) {
    const error = new Error("No item selected");
    showNotify({ name: "[onDelete]", type: "Error", error });
    return;
  }

  Dialog.create({
    title: "Confirm",
    message: `Areyou sure deleted this item`,
    cancel: true,
    persistent: true,
  }).onOk(async () => {
    await store.dispatch("activity/deleteActivity", deleteIds);
    onLoadData();
    selected.value = [];
  });
};

const onEditItem = () => {
  store.commit("activity/clearActivity");
  const deleteIds = selected.value.map((item) => item._id);

  if (deleteIds.length <= 0) {
    const error = new Error("No item selected");
    showNotify({ name: "[onEditItem]", type: "Error", error });
    return;
  }

  if (deleteIds.length > 1) {
    const error = new Error("Please select one item");
    showNotify({ name: "[onEditItem]", type: "Error", error });
    return;
  }

  store.commit("activity/setActivity", selected.value[0]);
  router.push("/admin/activity/form-input");
};

onNuxtReady(() => {
  onLoadData();
});
</script>
