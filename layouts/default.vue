<template>
 <PageLayout type="three-columns">
  <template #header>
   <ShareHeaderDocs />
  </template>
  <template #start>
   <ViewState
    v-slot="navigation"
    src="route://meta"
    path="navigation"
   >
    <Sidebar
     id="sidebar"
     :src="`app-config://usebootstrap/navigations/${navigation.data || 'default'}`"
    />
   </ViewState>
  </template>
  <template #end>
   <Toc
    selector="#content"
    display="none lg-block print-none"
    color="teal-700"
   >
    <Localization>
     <template #en>
      On this page
     </template>
     <template #ja>
      項目
     </template>
    </Localization>
   </Toc>
  </template>
  <template #default>
   <b-div
    id="content"
   >
    <slot />
   </b-div>
  </template>
  <template #footer>
   <ShareFooter />
  </template>
 </PageLayout>
</template>

<style>
.area-s {
  max-height: calc(100vh - 7rem);
}

.area-e {
  max-height: calc(100vh - 7rem);
}

#sidebar {
  top: 3rem;
}

#sidebar .active,
#sidebar .active:active,
#sidebar .active:hover {
  color: white !important;
  background-color: #00bb8e;
  border-color: #00bb8e;
  border-style: none none none solid;
}

.toc .active {
  color: #00bb8e !important;
  border-color: #00bb8e;
  border-style: none none none solid;
}
</style>
