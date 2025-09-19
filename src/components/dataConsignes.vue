// que les données dans ce doc

<script setup>
import { ref } from 'vue'

const dataConsignes = ref({
  id: Math.random().toString(),
  globalObjective: 'Afficher dynamiquement les données du profil utilisateur DR Mario',
  stepGoals: [
    {
      description: "Afficher le nom de l'utilisateur avec template strings",
      isCompleted: false
    },
    {
      description: "Afficher l'âge de l'utilisateur avec template strings",
      isCompleted: false
    },
    {
      description: "Afficher l'image de l'utilisateur avec v-bind",
      isCompleted: false
    }
  ]
})
</script>