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
                                        <b-div headings="2">
                                            Bootstrap
                                        </b-div>
                                        <p>Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from
                                            prototype to production—in minutes.</p>
                                        <Anchor color="primary" to="https://usebootstrap.org/" icon="bi-chevron-right"
                                            icon-end>
                                            Learn more
                                        </Anchor>
                                    </Background>
                                    </Col>
                                    <Col col="lg-6" padding="3">
                                    <DropdownItem header href="https://usebootstrap.org/lang-en" target="_blank"
                                        icon="bi-chevron-right" icon-end>
                                        Bootstrap
                                    </DropdownItem>
                                    <DropdownItem header href="https://usebootstrap.org/lang-en/extend" target="_blank"
                                        icon="bi-chevron-right" icon-end>
                                        Extend
                                    </DropdownItem>
                                    </Col>
                                </Row>
                            </Container>
                        </DropdownMenu>
                    </NavItemDropdown>
                </NavbarNavList>
                <NavbarNavList flex-direction="row" flex-wrap="wrap" margin="s-md-auto">
                    <NavItem padding="y-2" col="12 lg-auto">
                        <Vr display="none lg-flex" relative-height="100" margin="x-lg-2" text-color="black-50" />
                        <hr class="d-lg-none my-2 text-black-50" />
                    </NavItem>
                    <NavItem col="6 lg-auto">
                        <NavLink pdding="y-2 x-0 x-lg-2" to="https://github.com/simplise/use-bootstrap" target="_blank"
                            rel="noopener">
                            <Icon name="bi:github" class="navbar-nav-svg" />
                        </NavLink>
                    </NavItem>
                </NavbarNavList>
            </NavbarCollapse>
        </Container>
    </Navbar>
</template>
