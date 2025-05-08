<template>
 <NuxtLoadingIndicator />
 <ViewState v-slot="path" src="route://path">
  <ViewState v-slot="page" :src="`app-config://usebootstrap/pages`" :path="path.data">
   <div v-if="page.data">

    <Head>
     <PageMeta :title="page.data.title" :description="page.data.description">
      <LdArticle :headline="page.data.title" />
     </PageMeta>
    </Head>
    <NuxtLayout :name="page.data.layout">
     <NuxtPage />
    </NuxtLayout>
   </div>
   <NuxtPage v-else />
  </ViewState>
 </ViewState>
</template>
