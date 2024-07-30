<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="Vendor" />
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
            <span class="text-bold">List of Vendor</span>

            <q-space />

            <div class="q-gutter-sm">
              <q-btn
                outline
                flat
                round
                color="secondary"
                size="sm"
                icon="add"
                @click="onCreateData"
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
const router = useRouter();
const columns = ref([
  { name: "role", label: "STATUS", field: "role" },
  { name: "name", label: "VENDOR CODE", field: "name", sortable: true },
  { name: "email", label: "VENDOR NAME", field: "email", sortable: true },
  { name: "role", label: "PHONE", field: "role" },
  { name: "role", label: "EMAIL", field: "role" },
  { name: "role", label: "ADDRESS", field: "role" },
]);
const rows = ref([]);
const selected = ref([]);
const onLoadData = () => {};
const onCreateData = () => {
  router.push("/purchasing/vendor/form-input");
};
const onEditItem = () => {};
const onDelete = () => {};
</script>
