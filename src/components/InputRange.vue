<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: Number, required: true },
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  symbol: { type: String, required: false },
});
const rangeValue = ref(props.modelValue);
const emit = defineEmits(["update"]);
watch(
  () => rangeValue.value,
  () => {
    emit("update", rangeValue.value);
  }
);
</script>
<template>
  <div class="content">
    <label :for="label">{{ label }}: {{ rangeValue }}{{ symbol ?? "" }}</label>
    <div class="content__infos">
      <span>{{ min }}</span>
      <input
        :max="max"
        :min="min"
        type="range"
        v-model="rangeValue"
        :id="label"
      />
      <span>{{ max }}</span>
    </div>
  </div>
</template>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
</style>
