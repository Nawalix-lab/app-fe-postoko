<template>
  <q-list bordered class="rounded-borders q-ma-sm">
    <q-breadcrumbs class="text-grey q-pa-sm">
      <q-checkbox
        :model-value="actions.view"
        name="view"
        :label="name"
        @update:model-value="(val) => onChangeModel('view', val)"
      />
      <template #separator>
        <q-icon size="1.2em" name="arrow_forward" />
      </template>

      <q-breadcrumbs-el
        v-for="item in path.split('/')"
        :key="item"
        :label="item"
      />
    </q-breadcrumbs>

    <div class="bg-grey-2 q-pa-sm rounded-borders">
      <q-checkbox
        :model-value="actions.create"
        name="create"
        label="Create New Item"
        @update:model-value="(val) => onChangeModel('create', val)"
      />

      <q-checkbox
        name="edit"
        :model-value="actions.edit"
        label="Edit Item"
        @update:model-value="(val) => onChangeModel('edit', val)"
      />

      <q-checkbox
        name="delete"
        label="Delete Item"
        :model-value="actions.delete"
        @update:model-value="(val) => onChangeModel('delete', val)"
      />
    </div>
  </q-list>
</template>

<script setup lang="ts">
interface Actions {
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
}
interface Props {
  id: string;
  path: string;
  name: string;
  actions: Actions;
}

const props = withDefaults(defineProps<Props>(), {
  id: "",
  path: "",
  name: "",
  actions: () => {
    return {
      view: false,
      create: false,
      edit: false,
      delete: false,
    };
  },
});

const emits = defineEmits(["on-change-item"]);

const onChangeModel = (key, value) => {
  const emitData = { actions: { [key]: value }, _id: props.id };
  if (key === "view" && !value) {
    emitData.actions = {
      ...emitData.actions,
      create: false,
      edit: false,
      delete: false,
    };
  }

  if (key != "view") {
    emitData.actions = {
      ...emitData.actions,
      view: true,
    };
  }

  emits("on-change-item", emitData);
};
</script>
