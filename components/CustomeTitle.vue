<template>
  <div class="vertical-middle">
    <q-icon :name="icon" color="primary" size="30px" />
    <span class="text-bold q-ml-sm" style="font-size: 20px">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  icon: { type: String, default: "" },
});
</script>
