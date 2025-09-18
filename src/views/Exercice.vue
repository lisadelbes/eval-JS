<template>
  <div class="container mx-auto p-4 md:p-8">
    <div class="card bg-base-100 shadow-xl rounded-box p-6">
      <h5 class="text-xl font-semibold mb-4">Page exercice Eval JS CDA Lisa D.</h5>
      <div class="flex flex-col justify-center items-center">
        <div class="avatar online">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img :src="imageUser" :alt="nameUser" />
          </div>
        </div>

        <h3 class="text-2xl font-bold mt-4">{{ nameUser }}</h3>

        <input
          type="text"
          v-model="nameUser"
          class="input input-bordered w-full max-w-xs mt-4"
        />

        <div class="flex flex-row justify-center items-center gap-2 mt-4">
          <span class="text-lg">
            Âge :
            <span class="badge badge-lg badge-primary">{{ ageUser }} ans</span>
          </span>
        </div>

        <div class="flex flex-row justify-center items-center mt-3">
          <span class="text-lg">
            Âge + 10 :
            <span class="badge badge-lg badge-secondary">{{ augmenterAge() }} ans</span>
          </span>
        </div>

        <div class="mt-4">
          <span class="text-lg">
            NB Fétiche :
            <span class="badge badge-lg badge-accent">{{ nombreRandom() }}</span>
          </span>
        </div>
      </div>
    </div>

    <Consignes
      :id="consignesExo.id"
      :globalObjective="consignesExo.globalObjective"
      :stepGoals="consignesExo.stepGoals"
      @nom="markCompleted(0)"
      @age="markCompleted(1)"
      @image="markCompleted(2)"
    />

    <ActionsConsignes @modification="handleModification" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Consignes from "../components/dataConsignes.vue";
import ActionsConsignes from "../components/Consignes.vue";

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

function markCompleted(index) {
  consignesExo.value.stepGoals[index].isCompleted = true;
}

function handleModification(payload) {
  const index = payload.index;
  consignesExo.value.stepGoals[index].isCompleted =
    !consignesExo.value.stepGoals[index].isCompleted;
}
</script>
