<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="Sales Order" />
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
              icon="arrow_back"
              @click="onBack"
            >
              <q-tooltip> Back </q-tooltip>
            </q-btn>

            <q-separator vertical class="q-ml-md q-mr-md" />
            <span class="text-bold">Sales Order Form</span>

            <q-space />

            <div class="q-gutter-sm">
              <q-btn
                @click="onCreateData"
                outline
                flat
                round
                color="secondary"
                size="sm"
                icon="add"
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
          hide-bottom
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

        <div class="column items-end q-mt-lg">
          <div class="col q-gutter-sm">
            <q-btn unelevated type="button" color="primary" label="Preview" />
            <q-btn unelevated color="negative" label="Cancel" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const router = useRouter();
const columns = ref([
  { name: "role", label: "PRODUCT CODE", field: "role" },
  { name: "role", label: "PRODUCT NAME", field: "role" },
  { name: "role", label: "PRODUCT CATEGORY", field: "role" },
  { name: "role", label: "PRODUCT BRAND", field: "role" },
  { name: "role", label: "QTY", field: "role" },
  { name: "role", label: "UNIT", field: "role" },
  { name: "role", label: "PURCHASE PRICE", field: "role" },
  { name: "role", label: "SELLING PRICE", field: "role" },
  { name: "role", label: "DESCRIPTION", field: "role" },
]);

const rows = ref([]);
const selected = ref([]);
const onBack = () => {
  router.go(-1);
};
const onCreateData = () => {
  router.push("/sale/salesorder/form-input");
};
const onEditItem = () => {};
const onDelete = () => {};
</script>
