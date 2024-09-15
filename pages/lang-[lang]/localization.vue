<script setup lang="ts">
definePageMeta({
    title: 'Localization',
    description: 'Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.'
})
</script>

<template>
   <Intro />
    <Localization>
        <template #en>
            <h2>Hi! This is English</h2>
        </template>
        <template #ja>
            <h2>こんにちは! This is Japanese</h2>
        </template>
    </Localization>
</template>