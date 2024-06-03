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
              icon="arrow_back"
              @click="onBack"
            >
              <q-tooltip> Back </q-tooltip>
            </q-btn>

            <q-separator vertical class="q-ml-md q-mr-md" />

            <span class="text-bold">Form Activity</span>
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
            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold"> Activity ID </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model="activityId"
                    standout
                    disable
                    dense
                    hide-bottom-space
                    requird
                    :rules="[]"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Name </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model="name"
                    outlined
                    dense
                    hide-bottom-space
                    requird
                    :rules="[]"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Path / Href </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model="href"
                    outlined
                    dense
                    hide-bottom-space
                    requird
                    :rules="[]"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Icon Name </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model="icon"
                    outlined
                    dense
                    hide-bottom-space
                    requird
                    :rules="[]"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Parent</label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-select
                    v-model="parent"
                    outlined
                    dense
                    emit-value
                    map-options
                    hide-bottom-space
                    requird
                    :options="parentOpt"
                    :options-dense="false"
                    :rules="[]"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                &nbsp;
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div class="q-gutter-sm">
                  <q-btn
                    unelevated
                    type="submit"
                    color="primary"
                    label="Submit"
                  />
                  <q-btn unelevated color="negative" label="Cancel" />
                </div>
              </div>
            </div>
          </q-form>
        </ClientOnly>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const onBack = () => {
  router.go(-1);
};

const activityId = computed({
  get() {
    return store.getters["activity/getActivity"].activity_id;
  },
  set(value) {
    store.commit("activity/setActivity", { activity_id: value });
  },
});

const name = computed({
  get() {
    return store.getters["activity/getActivity"].name;
  },
  set(value) {
    store.commit("activity/setActivity", { name: value });
  },
});

const href = computed({
  get() {
    return store.getters["activity/getActivity"].href;
  },
  set(value) {
    store.commit("activity/setActivity", { href: value });
  },
});

const icon = computed({
  get() {
    return store.getters["activity/getActivity"].icon?.text;
  },
  set(value) {
    store.commit("activity/setActivity", {
      icon: {
        class: "material-symbols-outlined",
        text: value,
      },
    });
  },
});

const parent = computed({
  get() {
    return store.getters["activity/getActivity"].activity_parent;
  },
  set(value) {
    store.commit("activity/setActivity", { activity_parent: value });
  },
});

const parentOpt = computed(() => store.getters["activity/getActivityParent"]);

const onLoadParent = async () => {
  await store.dispatch("activity/getActivityParent");
};

onNuxtReady(() => {
  onLoadParent();
});

const onSubmit = async () => {
  await store.dispatch("activity/submitActivity", { router });
};
const onReset = () => {
  store.dispatch("activity/clearActivity");
};
</script>
