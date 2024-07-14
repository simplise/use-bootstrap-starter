<template>
  <ShareHeader />
  <Container type="xl" padding="y-md-2">
    <GridTemplate areas="s e c" areas-lg="sce" rows="auto 1fr auto" rows-lg="1fr" columns="100%"
      columns-lg="1fr 640px 160px" columns-xl="1fr 760px 1fr" columns-xxl="1fr 880px 1fr">
      <GridArea area="s" margin="e-md-4 s-md-3 s-xl-0" overflow="y-auto x-hidden" sticky="lg-top" z="1"
        class="area-s un-top-5rem">
        <Sidebar id="sidebar" />
      </GridArea>
      <GridArea area="c">
        <Container type="8" margin="x-auto">
          <Intro />
          <Toc selector="#content" display="block lg-none" class="toc">
            <Localization>
              <template #en>
                On this page
              </template>
              <template #ja>
                項目
              </template>
            </Localization>
          </Toc>
          <b-div id="content" padding="s-lg-2">
            <slot />
          </b-div>
        </Container>
      </GridArea>
      <GridArea area="e" overflow="y-auto x-hidden" sticky="lg-top" z="0" class="area-e un-h-min un-top-5rem">
        <Toc selector="#content" display="none lg-block" class="toc">
          <Localization>
            <template #en>
              On this page
            </template>
            <template #ja>
              項目
            </template>
          </Localization>
        </Toc>
      </GridArea>
    </GridTemplate>
  </Container>
  <ShareFooter />
  <BackToTop />
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
