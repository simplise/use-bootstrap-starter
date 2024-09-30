<template>
  <PageLayout
   type="one-columns"
   theme="light"
  >
   <template #header>
    <ShareHeaderLanding />
   </template>
   <template #default>
    <slot />
   </template>
   <template #footer>
    <b-footer
     background-color="body-tertiary"
     display="print-none"
    >
     <Container
      padding="x-sgs"
      text-alignment="center sm-start"
      text-color="body-secondary"
     >
      <ShareFooter />
     </Container>
    </b-footer>
   </template>
  </PageLayout>
 </template>
