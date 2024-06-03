import { Notify, Dialog } from "quasar";

export async function showNotify({ name, type, error }: any) {
  const message = error?.value?.message ? error.value.message : error.message;
  Notify.create({
    icon: "warning",
    position: "top",
    message,
    color: type === "Error" ? "red" : "orange",
  });
  console.error(name, message);
}

export async function showErorrDialog({ name, type, error }: any) {
  const message = error?.value?.message ? error.value.message : error.message;

  Dialog.create({
    title: "Error",
    message: `<span class="text-red">${message}</span>`,
    html: true,
  });
  console.error(name, message);
}
