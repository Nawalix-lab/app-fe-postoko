<template>
  <ClientOnly fallback-tag="div" fallback="Loading component...">
    <VueAwesomeSideBar
      v-model:miniMenu="miniMenu"
      v-model:collapsed="collapsed"
      :menu="activeMenu"
      vue-router-enabel
      width="100%"
    />
  </ClientOnly>
</template>

<script setup>
import { useStore } from "vuex";
const collapsed = ref(false);
const miniMenu = ref(false);
const store = useStore();

const activeMenu = computed(() => store.getters["menu/getMenu"]) || [];
</script>
