<template>
    <HeroRow>
     <b-h
      level="1"
      display-headings="3"
      margin="b-5"
     >
      Welcome to
      <Typed
       class="text-primary fw-semibold"
       :strings="['innovation.', 'excellence.', 'success.']"
       :type-speed="60"
       :loop="true"
       :back-speed="25"
       :back-delay="1500"
      />
      <br />
      your trusted business partner
     </b-h>
    </HeroRow>
    <HeroRow
     size="md-10"
     justify-content="start"
    >
     <p class="lead">
      We provide top-notch solutions to help your business thrive in today's competitive market. Our team is dedicated to delivering excellence and driving success for our clients.
     </p>
    </HeroRow>
   </template>
   