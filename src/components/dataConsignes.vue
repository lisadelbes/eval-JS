<script setup lang="js">
import { defineProps , defineEmits } from 'vue';

const consignesExo = defineProps({
    id: Math.random().toString(),
    globalObjective: 'Afficher dynamiquement les données du profil utilisateur DR Mario',
    stepGoals : [
        {description : 'Afficher le nom de l\'utilisateur avec template strings',
        isCompleted : false
        },
        {description : 'Afficher l\'âge de l\'utilisateur avec template strings', 
        isCompleted : false
        }
        ,
        {description : 'Afficher l\'image de l\'utilisateur avec v-bind', 
        isCompleted : false
        }
    ]
});

const emit = defineEmits(["nom","age","image"])

function checknom(){
    emit("nom", consignesExo.stepGoals[0].isCompleted)
}
function checkage(){
    emit("age", consignesExo.stepGoals[1].isCompleted)
}
function checkimage(){
    emit("image", consignesExo.stepGoals[2].isCompleted)
}
</script>

<template>
  <div class="card shadow-md bg-base-100 mb-4">
    <div class="card-body p-4 flex flex-col gap-2">
      <!-- En-tête -->
      <div class="flex justify-between items-center">
        <h2 class="card-title text-lg font-bold">
          {{ globalObjective }}
        </h2>

        <p>
             Step 1 : {{ consignesExo.stepGoals[0].description }}
        </p>
        <button v-on:click="checknom" class="btn-nom">
        Clique ici pour changer état du nom
        </button>

         <p>
            Step 2 : {{ consignesExo.stepGoals[1].description }}
        </p>
        <button v-on:click="age" class="btn-age">
        Clique ici pour changer état de l'âge
        </button>

         <p>
            Step 3 : {{ consignesExo.stepGoals[2].description }}
        </p>
        <button v-on:click="checkimage" class="btn-image">
        Clique ici pour changer état de l'image
        </button>

      </div>

    </div>
  </div>
</template>