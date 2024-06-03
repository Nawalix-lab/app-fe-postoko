<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="Users" />
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
            <span class="text-bold">User Data</span>

            <q-space />

            <div class="q-gutter-sm">
              <q-btn
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
        >
          <template #body-cell-name="props">
            <q-td :props="props">
              <a
                class="text-link"
                href="javascript:void(0)"
                @click="onRowClick(props.row)"
              >
                {{ props.value }}
              </a>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const columns = ref([
  { name: "name", label: "NAME", field: "name", sortable: true },
  { name: "email", label: "EMAIL", field: "email", sortable: true },
  { name: "role", label: "ROLE", field: "role" },
]);
const rows = ref([]);
const selected = ref([]);
const router = useRouter();
const store = useStore();

const onCreteActivity = () => {
  router.push("/admin/users/form-input");
  store.commit("users/clearUsers");
};

const onLoadData = async () => {
  await store.dispatch("users/getUserList");
  rows.value = store.getters["users/getUsersList"];
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
    await store.dispatch("users/deleteUsers", deleteIds);
    onLoadData();
    selected.value = [];
  });
};

const onEditItem = () => {
  store.commit("users/clearUsers");
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

  store.commit("users/setUser", selected.value[0]);
  router.push("/admin/users/form-input");
};

const onRowClick = (row) => {
  router.replace(`/admin/users/activity/${row._id}`);
};

onNuxtReady(() => {
  onLoadData();
});
</script>

<style lang="scss">
.text-link {
  text-decoration: none;
  font-weight: bold;
}
</style>
