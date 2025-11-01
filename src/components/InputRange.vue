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
    <label :for="label"
      >{{ label }}: <span>{{ rangeValue }}{{ symbol ?? "" }}</span></label
    >
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
.content label span {
  font-size: 1.5rem;
}
.content__infos {
  width: 100%;
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
}

.content__infos input {
  -webkit-appearance: none; /* For WebKit browsers (Chrome, Safari) */
  -moz-appearance: none; /* For Mozilla Firefox */
  appearance: none; /* Standard property */
  background: transparent;
  cursor: pointer;
  width: 100%;
  appearance: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  background: var(--color-gray-900); /* Track background color */
  height: 2px; /* Track height */
  border-radius: 4px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  background: var(--color-gray-900); /* Thumb color */
  border-radius: 50%;
  margin-top: -8px; /* Adjust to center thumb vertically */
}
</style>
