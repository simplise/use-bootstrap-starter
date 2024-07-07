<template>
    <Navbar expand="lg" sticky="top" class="bg-primary">
        <Container type="xl" flex-wrap="wrap lg-nowrap" class="bd-gutter">
            <b-div class="bd-navbar-toggle">
                <NavbarToggler target="#bdSidebar" icon="bi:list" :padding="2" class="text-white border-success" />
            </b-div>
            <NavbarBrand to="/" padding="0" margin="0 e-2 s-md-3 s-xl-0">
                <img src="~/assets/img/logo3.svg" alt="use-bootstrap" height="30">
            </NavbarBrand>
            <b-div flex>
                <NavbarToggler icon="bi:three-dots" flex display="lg-none" :order="3" :padding="2" target="#bdNavbar"
                    class="text-white border-success" />
            </b-div>
            <Offcanvas id="bdNavbar" type="lg" placement="end" flex-grow="grow-1">
                <OffcanvasHeader padding="x-4 b-0">
                    <OffcanvasTitle>
                        Bootstrap
                    </OffcanvasTitle>
                    <!-- <CloseButton dismiss="offcanvas" /> -->
                </OffcanvasHeader>
                <OffcanvasBody padding="4 t-0 lg-0">
                    <hr class="d-lg-none text-white-50">
                    <NavbarNavList flex-direction="row" flex-wrap="wrap" class="bd-navbar-nav">
                        <NavItem col="6 lg-auto">
                            <NavLink to="/" padding="x-0 x-lg-2">
                                Examples
                            </NavLink>
                        </NavItem>
                    </NavbarNavList>
                    <hr class="d-lg-none text-white-50">
                    <NavbarNavList flex-direction="row" flex-wrap="wrap" margin="s-md-auto">
                        <NavItem col="6 lg-auto">
                            <NavLink pdding="y-2 x-0 x-lg-2" to="https://github.com/simplise/use-bootstrap"
                                target="_blank" rel="noopener">
                                <Icon name="bi:github" class="navbar-nav-svg" />
                            </NavLink>
                        </NavItem>
                        <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                            <b-div display="none lg-flex" class="vr h-100 mx-lg-2 text-white" />
                            <hr class="d-lg-none my-2 text-white-50">
                        </li>
                        <LocaleNavItemDropdown :locales="['En', 'Ja']" />
                        <ColorModeNavItemDropdown class="text-light" />
                    </NavbarNavList>
                </OffcanvasBody>
            </Offcanvas>
        </Container>
    </Navbar>
</template>

<style scoped>
.nav-item :deep(a) {
    --bs-nav-link-color: var(--bs-gray-100);
    --bs-navbar-active-color: var(--bs-white);
    --bs-navbar-hover-color: var(--bs-white);
    --bs-nav-link-hover-color: var(--bs-white);
}

@media (max-width: 991.98px) {
    .nav-item :deep(a) {
        --bs-nav-link-color: var(--bs-dark-text-emphasis);
        --bs-navbar-active-color: var(--bs-dark-text-emphasis);
        --bs-navbar-hover-color: var(--bs-dark-text-emphasis);
        --bs-nav-link-hover-color: var(--bs-dark-text-emphasis);
    }
}
</style>