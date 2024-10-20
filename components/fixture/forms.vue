<template>
 <ViewState v-slot="user" src="reqres://users/5" path="data" schema-src="app-config://usebootstrap/schemas/basic">
  <Row margin="b-3">
   <BColFormLabel for="staticEmail" class="col-sm-2">
    ID
   </BColFormLabel>
   <Col col="sm-10">
   <BFormInput type="text" validate :value="user.data.id" readonly="plaintext" />
   </Col>
  </Row>
  <Row margin="b-3">
   <BColFormLabel for="staticEmail" class="col-sm-2">
    Email
   </BColFormLabel>
   <Col col="sm-10">
   <BFormInput type="text" validate :state-src="user" state-path="email" />
   <BValidFeedback>
    <template #valid>
     Looks good!
    </template>
    Please enter your email
   </BValidFeedback>
   </Col>
  </Row>
  <Row margin="b-3">
   <BColFormLabel for="inputPassword" class="col-sm-2">
    first_name
   </BColFormLabel>
   <Col col="sm-10">
   <BFormInput type="text" validate :state-src="user" state-path="first_name" />
   <BValidFeedback>
    <template #valid>
     Looks good!
    </template>
    Please enter your firstname
   </BValidFeedback>
   </Col>
  </Row>
  <Row margin="b-3">
   <BColFormLabel for="inputPassword" class="col-sm-2">
    last_name
   </BColFormLabel>
   <Col col="sm-10">
   <BFormInput type="text" validate :state-src="user" state-path="last_name" />
   <BValidFeedback>
    <template #valid>
     Looks good!
    </template>
    Please enter your firstname
   </BValidFeedback>
   </Col>
  </Row>
  <ActionState src="reqres://user/5">
   <template #default="{ action }">
    <b-button color="primary" :disabled="!user.validationResult.valid" @click="action('post', user.data)">
     Action
    </b-button>
   </template>
   <template #fallback>
    <b-button color="primary" disabled>
     <Spinner spinner="grow" sm aria-hidden="true" />
     Loading...
    </b-button>
   </template>
   <template #complete="{ data, status }">
    <b-button color="success-subtle" color-generate @click="status.value = 0">
     Retry
    </b-button>
    <div v-if="status.value == 201">
     Response: {{ data }}
    </div>
    <div v-else>
     ErrorMessages: {{ data }}
    </div>
   </template>
  </ActionState>
 </ViewState>
</template>