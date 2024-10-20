<script setup lang="ts">
definePageMeta({
  title: 'Components',
  description: 'Components Examples for testing.'
})
</script>

<template>
  <b-div>b-div</b-div>
  <b-span>b-div</b-span>
  <FixtureAccordion />
  <FixtureBadge />
  <FixtureBreadcrumb />
  <FixtureCarousel />
  <FixtureCollapse />
  <FixtureDropdown />
  <FixtureListGroup />
  <FixtureNavbar />
  <FixtureNavList />
  <FixtureOffcanvas />
  <FixtureProgress />
  <Spinner text-color="primary" />
  <FixtureToast />
  <FixtureForms />
  <FixtureFormSelect />
  <FixtureFormCheck />
  <BFormRange />
  <FixtureInputGroup />
  <FixtureFormFloating />
  <FixtureGrid />
  <FixtureTypography />
  <BIcon icon="bi:bootstrap" margin="2" />
  <FixtureFont />
  <FixtureAos />
  <FixtureLeaflet />
  <FixtureMdc />
  <ColorModeNavItemDropdown />
  <FixtureLocalization />
  <FixturePaper />
  <FixtureBlock />
  <FixtureBackground />
  <FixtureTyped />
  <Divider alignment="start" title="Divider start" margin="b-5" />
  <HTVDivider virtical="sm" />
  <StatusIndicator color="primary" />Primary
  <IconBox icon="bi:house" color="primary" size="h1" />
  <Avatar circle size="h1" img-src="https://reqres.in/img/faces/2-image.jpg" img-alt="Image Description" />
  <FixtureStep />
  <FixtureStackGroup />
  <Rating :value="50" />
  <FixtureLineChart />
  <FixtureBarChart />
  <FixturePieChart />
  <Calendar expanded color="blue" />
  <DatePicker mode="date" />
  <FixtureSortable />
  <FixtureJsonView />
  <FixturePasswordStrength />
  <FixtureEditor />  
</template>
