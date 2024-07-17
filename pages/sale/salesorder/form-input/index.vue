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
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <ClientOnly fallback-tag="span" fallback="Loading component...">
          <q-form
            ref="formInputActivityRef"
            class="q-gutter-md"
            @submit="onSubmit"
            @reset="onReset"
          >
            <ModuleSalesorderMainForm
              v-if="step === 0"
              @on-next="onNext"
              @on-reset="onReset"
            />
            <ModuleSalesorderItem
              v-if="step === 1"
              @on-next="onNext"
              @on-reset="onReset"
            />
          </q-form>
        </ClientOnly>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const step = ref(0);
const router = useRouter();

const onBack = () => {
  router.go(-1);
};
const onSubmit = () => {};
const onReset = () => {
  console.log("step", step.value);
  if (step.value === 0) {
    router.go(-1);
  }
  step.value = step.value - 1;
};

const onNext = () => {
  if (step.value === 1) {
    router.push("/sale/salesorder/form-input/preview");
  }
  step.value++;
};
</script>
