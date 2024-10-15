<template>
 <b-div
  padding="t-2"
  class="intro"
  position="relative"
 >
  <ViewState
   v-slot="title"
   src="localization://title"
  >
   <b-h
    level="1"
    class="intro-title"
    margin="b-2 t-2 b-lg-4"
    display-headings="3"
   >
    {{ title.data }}
   </b-h>
  </ViewState>

  <ViewState
   v-slot="description"
   src="localization://description"
  >
   <p class="lead">
    {{ description.data }}
   </p>
  </ViewState>
 </b-div>
   </template>
   