<script setup lang="js">
import { defineEmits } from 'vue'

const emit = defineEmits(["modification"]);


function changement() {
    emit("modification", {
    message: "Nouvel ami ajouté avec succès !",
    timestamp: new Date().toISOString()
    });
}
</script>

<template>
  <button class="btn btn-outline btn-success mt-4" @click="changement">
    créer changement
  </button>
</template>