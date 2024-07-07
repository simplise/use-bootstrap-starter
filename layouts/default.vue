<template>
  <ShareHeader />
  <Container type="xl" padding="y-md-2">
    <GridTemplate areas="sce" areas-lg="s e c" rows="1fr" columns="208px 1fr 208px" columns-lg="1fr">
      <GridArea area="s" margin="e-md-4 s-md-3 s-xl-0" overflow="y-auto x-hidden" sticky="lg-top" z="1" class="area-s un-top-5rem">
        <Sidebar />
      </GridArea>
      <GridArea area="c" padding="x-2 x-md-4 x-lg-2">
        <Container type="8" margin="x-auto">
          <Intro />
          <Toc selector="#bd-content" display="block lg-none" />
          <b-div id="bd-content" padding="s-lg-2">
            <slot />
          </b-div>
        </Container>
      </GridArea>
      <GridArea area="e" padding="x-md-2" overflow="y-auto x-hidden" sticky="lg-top" z="0" class="un-h-min un-top-5rem">
        <Toc selector="#bd-content" display="none lg-block" />
      </GridArea>
    </GridTemplate>
  </Container>
  <ShareFooter />
</template>
<style>
 .area-s{
  max-height : calc(100vh - 7rem);
 }
</style>
