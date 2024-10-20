<template>
 <ViewState v-slot="example" src="state://editor" :data="[
  {
   type: 'paragraph',
   content: [
    {
     type: 'text',
     text: 'I\'m running Tiptap with use-bootstrap. 🎉',
    },
   ],
  },
  {
   type: 'paragraph',
  },
 ]">
  <TiptapEditor :state-src="example" />
  <JsonView :data="example.data" />
 </ViewState>
</template>