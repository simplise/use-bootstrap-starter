<template>
    <Navbar expand="lg" background-color="white">
        <Container>
            <NavbarBrand href="/" aria-label="use bootstrap">
                <img src="~/assets/img/logo1.svg" height="30" alt="Logo" />
            </NavbarBrand>
            <NavbarToggler />
            <NavbarCollapse>
                <NavbarNavList margin="e-auto">
                    <NavItem>
                        <NavLink to="/docs" padding="x-0 x-lg-2">
                            Docs
                        </NavLink>
                    </NavItem>
                    <NavItemDropdown>
                        <NavItemDropdownToggle>
                            UseBootstrap
                        </NavItemDropdownToggle>
                        <DropdownMenu mega relative-width="100" background-color="transparent" border-subtractive
                            class="animated animated-fade-in">
                            <Container>
                                <Row background-color="white" shadow gutter="0">
                                    <Col col="lg-6">
                                    <Background background-color="primary-subtle" overlay-color="pink-500"
                                        overlay-alpha="0.5" z="1" padding="5" relative-height="100">
                                        <div class="mb-4">
                                            <span class="h2 d-block">Bootstrap</span>
                                            <p>Bootstrap is a powerful, feature-packed frontend toolkit. Build
                                                anything—from prototype to production—in minutes.</p>
                                        </div>
                                        <b-a button="primary" href="https://usebootstrap.org/" target="_blank">
                                            Learn more <b-icon icon="bi-chevron-right" />
                                        </b-a>
                                    </Background>
                                    </Col>
                                    <Col col="lg-6" padding="3">
                                    <DropdownItem header>
                                        <b-a  href="https://usebootstrap.org/lang-en" target="_blank">
                                            Bootstrap <b-icon icon="bi-chevron-right" />
                                        </b-a>
                                    </DropdownItem>
                                    <DropdownItem header>
                                        <b-a  href="https://usebootstrap.org/lang-en/extend" target="_blank">
                                            Extend <b-icon icon="bi-chevron-right" />
                                        </b-a>
                                    </DropdownItem>
                                    </Col>
                                </Row>
                            </Container>
                        </DropdownMenu>
                    </NavItemDropdown>
                </NavbarNavList>
                <NavbarNavList flex-direction="row" flex-wrap="wrap" margin="s-md-auto">
                    <NavItem col="6 lg-auto">
                        <NavLink pdding="y-2 x-0 x-lg-2" to="https://github.com/simplise/use-bootstrap" target="_blank"
                            rel="noopener">
                            <Icon name="bi:github" class="navbar-nav-svg" />
                        </NavLink>
                    </NavItem>
                    <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                        <b-div display="none lg-flex" class="vr h-100 mx-lg-2 text-white" />
                        <hr class="d-lg-none my-2 text-white-50" />
                    </li>
                </NavbarNavList>
            </NavbarCollapse>
        </Container>
    </Navbar>
</template>
