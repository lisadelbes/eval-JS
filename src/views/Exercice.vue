<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="card bg-base-100 shadow-2xl rounded-2xl p-8 max-w-lg mx-auto">
      <h5 class="text-2xl font-bold mb-6 text-center text-primary">Page exercice Eval JS CDA Lisa D.</h5>

      <div class="flex flex-col justify-center items-center gap-6">

        <!-- Avatar animé -->
        <div class="avatar online transition-transform duration-300 hover:scale-105">
          <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
            <img :src="imageUser" :alt="nameUser" />
          </div>
        </div>

        <!-- Nom -->
        <div class="flex flex-col items-center gap-2 w-full">
          <h3 class="text-3xl font-extrabold text-center text-secondary">{{ nameUser }}</h3>
          <input
            type="text"
            v-model="nameUser"
            placeholder="Modifier le nom"
            class="input input-bordered w-full max-w-xs mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Informations utilisateurs -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-center">

          <!-- Âge -->
          <div class="p-4 bg-primary/10 rounded-xl shadow-inner flex flex-col items-center">
            <span class="text-lg font-semibold">Âge</span>
            <span class="badge badge-lg badge-primary mt-2">{{ ageUser }} ans</span>
          </div>

          <!-- Âge +10 -->
          <div class="p-4 bg-secondary/10 rounded-xl shadow-inner flex flex-col items-center">
            <span class="text-lg font-semibold">Âge +10</span>
            <span class="badge badge-lg badge-secondary mt-2">{{ augmenterAge() }} ans</span>
          </div>

          <!-- NB fétiche -->
          <div class="p-4 bg-accent/10 rounded-xl shadow-inner flex flex-col items-center col-span-full">
            <span class="text-lg font-semibold">NB Fétiche</span>
            <span class="badge badge-lg badge-accent mt-2">{{ nombreRandom() }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Consignes avec barre de progression -->
    <Consignes
      :consignes="consignesExo"
      @check-step="handleCheckStep"
      class="mt-8"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Consignes from "../components/Consignes.vue";

const nameUser = ref("Dr Mario");
const ageUser = ref(30);
const imageUser =
  "https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg";

const augmenterAge = () => ageUser.value + 10;
const nombreRandom = () => Math.floor(Math.random() * 100);

const consignesExo = ref({
  id: Math.random().toString(),
  globalObjective:
    "Afficher dynamiquement les données du profil utilisateur Dr Mario",
  stepGoals: [
    { description: "Afficher le nom de l'utilisateur avec template strings", isCompleted: false },
    { description: "Afficher l'âge de l'utilisateur avec template strings", isCompleted: false },
    { description: "Afficher l'image de l'utilisateur avec v-bind", isCompleted: false }
  ]
});

</script>
