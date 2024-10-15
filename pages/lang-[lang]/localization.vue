<script setup lang="ts">
definePageMeta({
    title: 'Localization',
    'description:en': 'Make your site multilingual with <Localization>',
    'description:ja': '<Localization>を用いて多言語に対応するサイトを作りましょう。'
})
</script>

<template>
   <DocsIntro />
    <Localization>
        <template #en>
            <h2>Hi! This is English</h2>
        </template>
        <template #ja>
            <h2>こんにちは! This is Japanese</h2>
        </template>
    </Localization>
</template>