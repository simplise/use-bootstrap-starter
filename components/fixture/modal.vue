<template>
 <b-button color="primary" toggle="modal" target="#exampleModal">
  Modal
 </b-button>
 <Modal id="exampleModal">
  <ModalDialog>
   <ModalContent>
    <ModalHeader>
     <ModalTitle>Modal title</ModalTitle>
     <CloseButton dismiss="modal" />
    </ModalHeader>
    <ModalBody>...</ModalBody>
    <ModalFooter>
     <b-button color="secondary" dismiss="modal">
      Close
     </b-button>
     <b-button color="primary">
      Save changes
     </b-button>
    </ModalFooter>
   </ModalContent>
  </ModalDialog>
 </Modal>
</template>