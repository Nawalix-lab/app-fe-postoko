import { Loading, Dialog } from "quasar";
import { idText } from "typescript";

export async function submitData({ getters }: any, { router }: any) {
  try {
    Loading.show();

    const body = getters.getFormData;

    const { data, error } = await useFetch("/api/activity-user", {
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

export async function fetchActivityUser({}, id: string) {
  try {
    const { data, error } = await useFetch(`/api/activity-user/${id}`, {
      method: "GET",
    });

    if (error.value) {
      throw error;
    }

    return data.value?.data[0];
  } catch (error) {
    showErorrDialog({ name: "[submitUser]", type: "Error", error });
    return;
  } finally {
    Loading.hide();
  }
}
