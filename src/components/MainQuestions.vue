<template>
  <div class="text-3xl font-bold text-center">Foire aux questions</div>
  <div v-for="question in questions" class="max-w-2xl m-auto">
    <QuestionAccordion
        :question="question.question"
        :answer="question.answer"
    ></QuestionAccordion>
  </div>
</template>

<script setup>
import QuestionAccordion from "./QuestionAccordion.vue";

const questions = [
  {
    question: "Comment puis-je utiliser un Lockio ?",
    answer: "L'utilisation d'un Lockio est très simple. Les indications seront sur l'écran de la borne." +
        "Pour déposer vos affaires, sélectionnez un des casiers disponibles. Une fois votre choix effectué, un code vous " +
        "sera fourni et vous permettra de déverrouiller le Lockio. La porte s'ouvrira alors automatiquement et vos affaires pourront être récupérés."
  },
  {
    question: "Comment le système de réservation fonctionne-t-il ?",
    answer: "Le système de réservation vous permet d'anticiper votre arrivée sur place. Sur notre site, vous pouvez 'réserver' un Lockio disponible. " +
        "Lorsque le Lockio est réservé, un code vous est fourni. Vous disposez alors de 30min pour venir sur place et indiquer, pour le Lockio réservé le code fourni par nos soins. " +
        "Si vous n'avez pas déposé vos affaires dans les 30min, le Lockio sera libéré et pourra être utilisé par un autre client."
  },
  {
    question:
        "Y-a-t-il une durée maximum d'utilisation ?",
    answer:
        "Oui. Pour des raisons de sécurité et de disponibilité, le temps d'utilisation d'un Lockio est limité à 72h, soit 3 jours. "
  },
];
</script>

<style scoped></style>
