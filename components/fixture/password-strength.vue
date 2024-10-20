<script lang="ts" setup>
const password = ref('');
</script>

<template>
 <div class="example">
  <label>
   Password
   <input v-model="password" type="text" />
  </label>
  <PasswordStrength v-slot="result" :password="password">
   <div>score: {{ result.score }} / 4</div>
   <div>{{ result.feedback }}</div>
  </PasswordStrength>
 </div>
</template>
