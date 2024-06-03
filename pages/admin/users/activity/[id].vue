<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="User activity" />
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

            <span class="text-bold">Form User activity</span>
            <q-space />
            <div class="q-gutter-sm">
              <q-btn
                outline
                flat
                round
                color="secondary"
                size="sm"
                icon="save"
                @click="onSaveItem"
              >
                <q-tooltip> Save Data </q-tooltip>
              </q-btn>
            </div>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <ClientOnly fallback-tag="span" fallback="Loading component...">
            <div class="col-3">
              <div class="text-center q-mb-md">
                <q-avatar
                  square
                  size="200px"
                  font-size="82px"
                  color="teal"
                  text-color="white"
                  icon="account_box"
                />
              </div>

              <q-list separator>
                <q-item v-ripple clickable>
                  <q-item-section>
                    <q-item-label>{{ user?.name }}</q-item-label>
                    <q-item-label caption>Full Name</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item v-ripple clickable>
                  <q-item-section>
                    <q-item-label>{{ user?.email }}</q-item-label>
                    <q-item-label caption>Email</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item v-ripple clickable>
                  <q-item-section>
                    <q-item-label>{{ user?.role }}</q-item-label>
                    <q-item-label caption>User Role</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col">
              <ActivityPermissions
                v-for="permission in permissions"
                :id="permission._id"
                :key="permission._id"
                :path="permission.href"
                :name="permission.name"
                :actions="permission.actions"
                @on-change-item="onChangeValue"
              />
            </div>
          </ClientOnly>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();
const user = ref({});

const onBack = () => {
  router.replace("/admin/users");
};

const permissions = computed(
  () => store.getters["activity/getActivityPermissions"],
);

const onChangeValue = (payload) => {
  store.commit("activity/changeActivityPermissions", payload);
};

const fetchUser = async () => {
  try {
    const res = await store.dispatch("users/getUserbyId", route.params.id);
    user.value = res[0];
  } catch (error) {
    showNotify({ name: "[fetchUser]", type: "Error", error });
  }
};

const fetchActivityPermissions = async () => {
  const activityList = computed(
    () => store.getters["activity/getActivityList"],
  );
  const res = await store.dispatch(
    "activityuser/fetchActivityUser",
    route.params.id,
  );

  if (activityList.value.length <= 0) {
    await store.dispatch("activity/getActivityList");
  }

  store.commit("activity/setActivityPermissionList", {
    activity: activityList.value,
    permissions: res?.permissions ? res.permissions : [],
  });
};

const onSaveItem = async () => {
  const payload = user.value;
  payload.permissions = permissions.value;

  store.commit("activityuser/setFormData", payload);

  await store.dispatch("activityuser/submitData", { router });
};

onNuxtReady(() => {
  store.commit("activity/clearActivityPermissions");

  fetchUser();
  fetchActivityPermissions();
});
</script>
