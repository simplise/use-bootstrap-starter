<script setup>
const dataset = ref([
 { value: 350, name: 'Direct' },
 { value: 110, name: 'Email' },
 { value: 234, name: 'Ad Networks' },
 { value: 552, name: 'Video Ads' },
 { value: 1458, name: 'Search Engines' },
]);
</script>

<template>
 <PieChart
  class="un-h-20em un-w-40em"
  :dataset="dataset"
  :label="false"
 />
</template>