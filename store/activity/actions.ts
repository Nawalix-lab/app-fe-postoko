import { Loading, Dialog } from "quasar";

export async function getActivityList({ commit }: any) {
  try {
    Loading.show();
    const { data, error } = await useFetch("/api/activity");
    if (error.value) {
      throw error;
    }

    if (data.value?.data) {
      commit("setDataList", data.value?.data);
    }
  } catch (error) {
    showNotify({ name: "[getActivityList]", type: "Error", error });
  } finally {
    Loading.hide();
  }
}

export async function getActivityParent({ commit }: any) {
  try {
    Loading.show();
    const { data, error } = await useFetch("/api/activity/parent");
    if (error.value) {
      throw error;
    }

    if (data.value?.data) {
      commit("setActivityParent", data.value?.data);
    }
  } catch (error) {
    showNotify({ name: "[getActivityParent]", type: "Error", error });
  } finally {
    Loading.hide();
  }
}

export async function submitActivity(
  { commit, getters }: any,
  { router }: any
) {
  try {
    Loading.show();

    const body = getters.getActivity;
    const { data, error } = await useFetch("/api/activity", {
      method: "POST",
      body,
    });

    if (error.value) {
      throw error;
    }

    Dialog.create({
      title: "Info",
      message: `<span class="text-green">${data.value?.message}</span>`,
      html: true,
    }).onOk(() => {
      router.replace("/admin/activity");
    });
  } catch (error) {
    showErorrDialog({ name: "[submitActivity]", type: "Error", error });
  } finally {
    Loading.hide();
  }
}

export async function deleteActivity(
  { commit, getters, dispatch }: any,
  ids: Array
) {
  try {
    Loading.show();
    const body = { _id: ids };
    const { data, error } = await useFetch("/api/activity", {
      method: "DELETE",
      body,
    });

    if (error.value) {
      throw error;
    }

    return data;
  } catch (error) {
    showErorrDialog({ name: "[submitActivity]", type: "Error", error });
  } finally {
    Loading.hide();
  }
}
