<template>
 <b-div ratio="16x9">
  <LMap :zoom="10" :center="[35.681236, 139.767125]" :use-global-leaflet="false">
   <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap" />
  </LMap>
 </b-div>
</template>