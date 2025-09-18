<template>
  <div class="container mx-auto p-6 flex justify-center">
    <div class="card shadow-xl bg-base-100 w-full max-w-lg p-6">
      <h1 class="text-2xl font-bold mb-6 text-center text-primary">CONTACTEZ-NOUS</h1>

      <div class="form-control mb-4">
        <label class="label" for="name">
          <span class="label-text">Votre nom</span>
        </label>
        <input
          id="name"
          v-model="nom"
          type="text"
          placeholder="Entrez votre nom"
          class="input input-bordered w-full"
          :class="{ 'input-error': errors.nom }"
        />
        <span v-if="errors.nom" class="text-error text-sm mt-1">{{ errors.nom }}</span>
      </div>

      <div class="form-control mb-4">
        <label class="label" for="email">
          <span class="label-text">Votre email</span>
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="exemple@mail.com"
          class="input input-bordered w-full"
          :class="{ 'input-error': errors.email }"
        />
        <span v-if="errors.email" class="text-error text-sm mt-1">{{ errors.email }}</span>
      </div>

      <div class="form-control mb-4">
        <label class="label" for="sujet">
          <span class="label-text">Sujet</span>
        </label>
        <input
          id="sujet"
          v-model="sujet"
          type="text"
          placeholder="Sujet de votre message"
          class="input input-bordered w-full"
          :class="{ 'input-error': errors.sujet }"
        />
        <span v-if="errors.sujet" class="text-error text-sm mt-1">{{ errors.sujet }}</span>
      </div>

      <div class="form-control mb-6">
        <label class="label" for="message">
          <span class="label-text">Message</span>
        </label>
        <textarea
          id="message"
          v-model="message"
          rows="4"
          placeholder="Écrivez votre message ici..."
          class="textarea textarea-bordered w-full"
          :class="{ 'textarea-error': errors.message }"
        ></textarea>
        <span v-if="errors.message" class="text-error text-sm mt-1">{{ errors.message }}</span>
      </div>

      <button
        @click="contact"
        class="btn btn-primary w-full"
        :disabled="!isValidForm"
      >
        Envoyer
      </button>

      <div
        v-if="successMessage"
        class="alert alert-success shadow-lg mt-4"
      >
        <span>{{ successMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const nom = ref("");
const email = ref("");
const sujet = ref("");
const message = ref("");
const successMessage = ref("");
const errors = ref({ nom: "", email: "", sujet: "", message: "" });

function validateForm() {
  errors.value = { nom: "", email: "", sujet: "", message: "" };

  if (!nom.value.trim()) {
    errors.value.nom = "Le nom est requis.";
  }
  if (!email.value.trim()) {
    errors.value.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = "Email invalide.";
  }
  if (!sujet.value.trim()) {
    errors.value.sujet = "Le sujet est requis.";
  }
  if (!message.value.trim()) {
    errors.value.message = "Le message est requis.";
  }

  return (
    !errors.value.nom &&
    !errors.value.email &&
    !errors.value.sujet &&
    !errors.value.message
  );
}

const isValidForm = computed(() => {
  return (
    nom.value.trim() &&
    email.value.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
    sujet.value.trim() &&
    message.value.trim()
  );
});

function contact() {
  if (!validateForm()) return;

  successMessage.value = "✅ Votre message a bien été envoyé !";

  nom.value = "";
  email.value = "";
  sujet.value = "";
  message.value = "";
}
</script>
