<template>
  <div>
    <CustomeTitle icon="font_download" label="Add new item" />

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Product Code </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Product Name </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Product Category </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Barand </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Qty </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Unit </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Buy price </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Sel Price </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Description </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        &nbsp;
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <div class="q-gutter-sm">
          <q-btn
            unelevated
            type="button"
            color="primary"
            label="Add Item"
            @click="onAddItem"
          />
          <q-btn
            unelevated
            color="negative"
            label="Cancel"
            @click="onCancelItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["on-add-item", "on-cancel-item"]);
const onAddItem = () => {
  emits("on-add-item");
};
const onCancelItem = () => {
  emits("on-cancel-item");
};
</script>
