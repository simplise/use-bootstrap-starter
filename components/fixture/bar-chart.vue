<script setup>
function random() {
 return Math.round(300 + Math.random() * 700) / 10;
}
const dimensions = ref(['Product', 2015, 2016, 2017]);
const source = ref([
 {
  Product: 'Matcha Latte',
  2015: random(),
  2016: random(),
  2017: random(),
 },
 {
  Product: 'Milk Tea',
  2015: random(),
  2016: random(),
  2017: random(),
 },
 {
  Product: 'Cheese Cocoa',
  2015: random(),
  2016: random(),
  2017: random(),
 },
 {
  Product: 'Walnut Brownie',
  2015: random(),
  2016: random(),
  2017: random(),
 },
]);
const series = ref([{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]);
</script>

<template>
 <BarChart class="un-h-20em un-w-40em" :dimensions="dimensions" :source="source" :series="series" />
</template>