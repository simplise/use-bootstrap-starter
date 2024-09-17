<script setup lang="ts">
definePageMeta({
  title: 'About use-bootstrap',
  description: 'Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.'
})
</script>

<template>
  <Background video-src="/pexels/movie/3209211-uhd_3840_2160_25fps.mp4" :overlay="true" overlay-color="gray-100">
    <b-h level="1" margin="5" display-headings="1" text-color="white">
      <b-p text-color="blue">usebootstrap is</b-p>
      <Typed class="text-primary fw-semibold" :strings="['powerful.', 'extensible.', 'feature-packed.']"
        :type-speed="60" :loop="true" :back-speed="25" :back-delay="1500" />
    </b-h>
  </Background>
  <h2>First step</h2>
  <h2>Second step</h2>

</template>