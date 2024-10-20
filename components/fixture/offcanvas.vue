
<template>
  <b-button color="primary" toggle="offcanvas" target="#offcanvasExample3">
    Offcanvas
  </b-button>
  <Offcanvas id="offcanvasExample3" placement="start">
    <OffcanvasHeader>
      <OffcanvasTitle>Offcanvas</OffcanvasTitle>
      <CloseButton dismiss="offcanvas" />
    </OffcanvasHeader>
    <OffcanvasBody>
      <div>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </div>
      <Dropdown margin="t-3">
        <DropdownToggle color="secondary">
          Droppdown button
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </OffcanvasBody>
  </Offcanvas>
</template>