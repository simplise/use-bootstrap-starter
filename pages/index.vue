<template>
  <Container margin="t-5">
   <HeroHeadingsDescription />
  </Container>
  <HeroLandingVb />
  <Container margin="y-5">
   <ColumnsOurService />
  </Container>
  <Background
   background-color="blue-100"
   pattern-src="/hero-patterns/jigsaw.svg"
   :pattern-parallax="0.05"
   margin="y-5"
  >
   <Container margin="y-5">
    <ColumnsOurServiceHighlights />
   </Container>
  </Background>
  <Container margin="y-5">
   <BlocksKeyBenefits />
  </Container>
  <hr>
  <Container margin="y-5">
   <ColumnsServiceStats />
  </Container>
  <Background
   background-color="body-secondary"
   pattern-src="/hero-patterns/texture.svg"
   margin="y-5"
  >
   <Container margin="y-5">
    <ColumnsSuccessStories />
   </Container>
  </Background>
 </template>
