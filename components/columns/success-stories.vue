<template>
    <HeroRow
     size="8"
     text-alignment="center"
     margin="y-3"
    >
     <b-p><b>Success Stories</b></b-p>
     <b-div headings="2">
      Discover how our platform is enabling teams to streamline their workflows and enhance productivity
     </b-div>
    </HeroRow>
   
    <Row
     margin="b-3"
     columns="1 md-3"
    >
     <Col>
      <Card relative-height="100">
       <CardImgTop
        src="/unsplash/image/480x220/redd-f-5U_28ojjgms-unsplash.jpg"
        alt="Image Description"
       />
   
       <CardBody>
        <b-div margin="b-3">
         <b-icon
          icon="bi:graph-up"
          display-headings="5"
          text-color="primary"
         />
        </b-div>
        <CardText>A leading company launched their enterprise platform and built a powerful user experience.</CardText>
       </CardBody>
   
       <CardFooter>
        <CardLink
         icon="bi:chevron-right"
         icon-end
         to="/"
         stretched-link
        >
         Read story
        </CardLink>
       </CardFooter>
      </Card>
     </Col>
   
     <Col>
      <Card relative-height="100">
       <CardImgTop
        src="/unsplash/image/480x220/dlxmedia-hu-U-W8FKeC6Mo-unsplash.jpg"
        alt="Image Description"
       />
   
       <CardBody>
        <b-div margin="b-3">
         <b-icon
          icon="bi:tools"
          display-headings="5"
          text-color="primary"
         />
        </b-div>
        <CardText>A marketing team was empowered to create digital dashboards easily and share them with their team.</CardText>
       </CardBody>
   
       <CardFooter>
        <CardLink
         icon="bi:chevron-right"
         icon-end
         to="/"
         stretched-link
        >
         Read story
        </CardLink>
       </CardFooter>
      </Card>
     </Col>
   
     <Col>
      <Card relative-height="100">
       <CardImgTop
        src="/unsplash/image/480x220/unseen-studio-s9CC2SKySJM-unsplash.jpg"
        alt="Image Description"
       />
   
       <CardBody>
        <b-div margin="b-3">
         <b-icon
          icon="bi:gear"
          display-headings="5"
          text-color="primary"
         />
        </b-div>
        <CardText>A tech company aimed to innovate and simplify their processes to achieve their mission.</CardText>
       </CardBody>
   
       <CardFooter>
        <CardLink
         icon="bi:chevron-right"
         icon-end
         to="/"
         stretched-link
        >
         Read story
        </CardLink>
       </CardFooter>
      </Card>
     </Col>
    </Row>
    <HeroRow
     size="md-4"
    >
     <b-button
      color="outline-primary"
      relative-width="100"
     >
      view all stories
     </b-button>
    </HeroRow>
   </template>
   