<template>
    <b-footer
      padding="y-4 y-md-5"
      margin="t-5"
      background-color="body-tertiary"
      class="bd-footer"
    >
      <Container
        type="xl"
        padding="y-4 y-md-5 x-4 x-md-3"
        text-color="body-secondary"
      >
        <Row>
          <Col
            col="lg-3"
            margin="b-3"
          >
            <b-a
              display="inline-flex"
              margin="b-2"
              text-color="body-emphasis"
              text-decoration="none"
              href="/"
              aria-label="use-bootstrap"
            >
              <img
                src="~/assets/img/logo1.svg"
                alt="use-bootstrap"
                height="30"
              >
            </b-a>
            <b-ul
              unstyled
              small
            >
              <b-li margin="b-2">
                Designed and built with all the love in the world by the Simplise Inc. team with the help of our contributors.
              </b-li>
              <b-li margin="b-2">
                Code licensed MIT docs CC BY 3.0.
              </b-li>
            </b-ul>
          </Col>
          <Col
            col="6 lg-2"
            offset="lg-1"
            margin="b-3"
          >
            <b-h level="5">Links</b-h>
            <b-ul unstyled>
              <b-li margin="b-2">
                <Anchor text-color="body-secondary" link-underline="0 100-hover dark" href="/">Home</Anchor>
              </b-li>
            </b-ul>
          </Col>
          <Col
            col="6 lg-2"
            margin="b-3"
          >
            <b-h level="5">Guides</b-h>
            <b-ul unstyled>
              <b-li margin="b-2">
                <Anchor text-color="body-secondary" link-underline="0 100-hover dark" href="/">Getting started</Anchor>
              </b-li>
            </b-ul>
          </Col>
          <Col
            col="6 lg-2"
            margin="b-3"
          >
            <b-h level="5">Projects</b-h>
            <b-ul unstyled>
              <b-li margin="b-2">
                <Anchor text-color="body-secondary" link-underline="0 100-hover dark" href="https://usebootstrap.org/">use-bootstrap</Anchor>
              </b-li>
            </b-ul>
          </Col>
          <Col
            col="6 lg-2"
            margin="b-3"
          >
            <b-h level="5">Community</b-h>
          </Col>
        </Row>
      </Container>
    </b-footer>
  </template>