<script setup lang="ts">
definePageMeta({
    title: 'About use-bootstrap',
    description: 'Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.'
})
</script>

<template>
    <h2>First step</h2>
    <b-p font-size="5">
        usebootstrap is
        <Typed class="text-primary fw-semibold" :strings="['powerful.', 'extensible.', 'feature-packed.']"
            :type-speed="60" :loop="true" :back-speed="25" :back-delay="1500" />
    </b-p>
    <h2>Second step</h2>

</template>