import { Loading, Dialog } from "quasar";

export async function getUserbyId({}, id: string) {
  try {
    Loading.show();
    const { data, error } = await useFetch(`/api/user/${id}`);
    if (error.value) {
      throw error;
    }
    return data.value?.data;
  } catch (error) {
    showNotify({ name: "[getUserbyId]", type: "Error", error });
  } finally {
    Loading.hide();
  }
}

export async function getUserList({ commit }: any) {
  try {
    Loading.show();
    const { data, error } = await useFetch("/api/user");
    if (error.value) {
      throw error;
    }

    if (data.value?.data) {
      commit("setDataList", data.value?.data);
    }
  } catch (error) {
    showNotify({ name: "[getUserList]", type: "Error", error });
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

export async function submitUser({ commit, getters }: any, { router }: any) {
  try {
    Loading.show();

    const body = getters.getUser;
    const { data, error } = await useFetch("/api/user", {
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
      router.replace("/admin/users");
    });
  } catch (error) {
    showErorrDialog({ name: "[submitUser]", type: "Error", error });
  } finally {
    Loading.hide();
  }
}

export async function deleteUsers(
  { commit, getters, dispatch }: any,
  ids: Array
) {
  try {
    Loading.show();
    const body = { _id: ids };
    const { data, error } = await useFetch("/api/user", {
      method: "DELETE",
      body,
    });

    if (error.value) {
      throw error;
    }

    return data;
  } catch (error) {
    showErorrDialog({ name: "[deleteUsers]", type: "Error", error });
  } finally {
    Loading.hide();
  }
}
