<template>
  <ClientOnly>
    <UseActiveElement v-slot="{ element }">
      Active element is {{ element?.tagName }}
    </UseActiveElement>
  </ClientOnly>
</template>