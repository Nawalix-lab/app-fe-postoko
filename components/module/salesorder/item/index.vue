<template>
  <div>
    <ModuleSalesorderItemInputItem
      v-if="isForm"
      @on-cancel-item="onCancelItem"
      @on-add-item="onAddItem"
    />

    <div v-if="!isForm">
      <div class="row q-gutter-sm q-mb-lg">
        <CustomeTitle icon="font_download" label="Input Item" />
        <q-space />
        <q-btn
          unelevated
          icon="add"
          color="primary"
          label="Add New Item"
          @click="onCreateItem"
        />
      </div>
      <q-table
        class="my-table"
        flat
        bordered
        :rows="[]"
        :columns="columns"
        row-key="_id"
        hide-bottom
      />
      <div class="q-gutter-sm q-mt-lg text-right">
        <q-btn
          unelevated
          type="button"
          color="primary"
          label="Next"
          @click="onNext"
        />
        <q-btn unelevated color="negative" label="Cancel" @click="onReset" />
      </div>
    </div>
  </div>
</template>

<script setup>
const columns = ref([
  { name: "role", label: "PRODUCT CODE", field: "role" },
  { name: "name", label: "PRODUCT NAME", field: "name", sortable: true },
  { name: "email", label: "PRODUCT CATEGORY", field: "email", sortable: true },
  { name: "role", label: "PRODUCT BRAND", field: "role" },
  { name: "role", label: "QTY", field: "role" },
  { name: "role", label: "UNIT", field: "role" },
  { name: "role", label: "BUY PRICE", field: "role" },
  { name: "role", label: "BUY PRICE", field: "role" },
  { name: "role", label: "DESCRIPTION", field: "role" },
  { name: "role", label: "ACTIONS", required: true, field: "role" },
]);

const emits = defineEmits(["on-next", "on-reset"]);

const onNext = () => {
  emits("on-next");
};
const onReset = () => {
  emits("on-reset");
};

const isForm = ref(false);

const onCreateItem = () => {
  isForm.value = true;
};

const onAddItem = () => {
  isForm.value = false;
};

const onCancelItem = () => {
  isForm.value = false;
};
</script>
