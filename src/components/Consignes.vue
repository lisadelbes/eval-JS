<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  consignes: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["check"]);

function toggleStep(index) {
  props.consignes.stepGoals[index].isCompleted =
    !props.consignes.stepGoals[index].isCompleted;

  emit("check", {
    index,
    isCompleted: props.consignes.stepGoals[index].isCompleted,
  });
}
</script>

<template>
  <div class="card shadow-lg bg-base-100 mb-6 border border-gray-200">
    <div class="card-body p-6 flex flex-col gap-4">

        <h2 class="card-title text-xl font-bold text-primary">
        {{ consignes.globalObjective }}
      </h2>

      <div
        v-for="(step, index) in consignes.stepGoals"
        :key="index"
        class="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
      >
        <div class="flex items-center gap-3">
          <span
            class="badge"
            :class="step.isCompleted ? 'badge-success' : 'badge-ghost'"
          >
            Step {{ index + 1 }}
          </span>
          <p class="text-base">{{ step.description }}</p>
        </div>

        <button
          @click="toggleStep(index)"
          class="btn"
          :class="step.isCompleted ? 'btn-success btn-sm' : 'btn-outline btn-primary btn-sm'"
        >
          {{ step.isCompleted ? "Etape validée" : "Valider l’étape" }}
        </button>
      </div>
    </div>
  </div>
</template>
