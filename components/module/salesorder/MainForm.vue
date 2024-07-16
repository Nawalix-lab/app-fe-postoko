<template>
  <div>
    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Customer Code </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Customer Name </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Term Of Payment </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Bank Account</label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Validity Period</label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Description</label>
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
            label="Next"
            @click="onNext"
          />
          <q-btn unelevated color="negative" label="Cancel" @click="onReset" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["on-next", "on-reset"]);

const onNext = () => {
  emits("on-next");
};
const onReset = () => {
  emits("on-reset");
};
</script>
