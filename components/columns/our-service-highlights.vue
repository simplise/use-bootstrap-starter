<template>
    <HeroRow size="md-10">
     <Card shadow>
      <CardBody>
       <Row
        align-items="center"
        gutter="x-5"
       >
        <Col border="end">
         <b-h level="3">
          Our Services
         </b-h>
         <b-p>Tailored solutions for modern businesses</b-p>
   
         <Row>
          <Col
           margin="b-2"
          >
           <List unstyled>
            <ListItem
             icon="bi:check-circle-fill"
             text-color="success"
            >
             Creative Designs
            </ListItem>
            <ListItem
             icon="bi:check-circle-fill"
             text-color="success"
            >
             Flexible Solutions
            </ListItem>
           </List>
          </Col>
   
          <Col>
           <List unstyled>
            <ListItem
             icon="bi:check-circle-fill"
             text-color="success"
            >
             24/7 Assistance <badge
              background-color="secondary"
              rounded="pill"
             >
              New
             </badge>
            </ListItem>
            <ListItem
             icon="bi:check-circle-fill"
             text-color="success"
            >
             Cloud Integration
            </ListItem>
           </List>
          </Col>
         </Row>
        </Col>
        <Col col="md-3">
         <b-h level="4">
          Service Highlights
         </b-h>
         <b-p text-color="secondary">
          Discover the top features designed to meet your requirements.
         </b-p>
         <Anchor
          icon="bi:chevron-right"
          icon-end
          to="/"
          stretched-link
         >
          <b>Learn more</b>
         </Anchor>
        </Col>
       </Row>
      </CardBody>
     </Card>
    </HeroRow>
   </template>
   