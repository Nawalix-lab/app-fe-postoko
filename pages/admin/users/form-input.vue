<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="User" />
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

            <span class="text-bold">Form User</span>
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
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Email </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model="email"
                    outlined
                    dense
                    hide-bottom-space
                    requird
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Password </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model="password"
                    outlined
                    dense
                    hide-bottom-space
                    requird
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Role </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-select
                    v-model="role"
                    outlined
                    dense
                    emit-value
                    map-options
                    hide-bottom-space
                    requird
                    :options="optRole"
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
                  <q-btn
                    unelevated
                    color="negative"
                    label="Cancel"
                    @click="onReset"
                  />
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

const optRole = computed(() => store.getters["users/getOPTRole"]);

const name = computed({
  get() {
    return store.getters["users/getUser"].name;
  },
  set(value) {
    store.commit("users/setUser", { name: value });
  },
});

const email = computed({
  get() {
    return store.getters["users/getUser"].email;
  },
  set(value) {
    store.commit("users/setUser", { email: value });
  },
});

const password = computed({
  get() {
    return store.getters["users/getUser"].password;
  },
  set(value) {
    store.commit("users/setUser", { password: value });
  },
});

const role = computed({
  get() {
    return store.getters["users/getUser"].role;
  },
  set(value) {
    store.commit("users/setUser", { role: value });
  },
});

const onSubmit = async () => {
  await store.dispatch("users/submitUser", { router });
};

const onReset = () => {
  store.commit("users/clearUsers");
};

const onBack = () => {
  router.go(-1);
};
</script>
