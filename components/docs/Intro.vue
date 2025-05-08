<template>
 <b-div padding="y-3">
  <ViewState v-slot="meta" src="route://meta">
   <b-h level="1" margin="y-3" display-headings="3">
    {{ meta.data.title }}
   </b-h>
   <p class="lead">
    {{ meta.data.description }}
   </p>
  </ViewState>
 </b-div>
</template>
