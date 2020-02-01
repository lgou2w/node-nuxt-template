<template lang="pug">
  .container
    h1 Hello Nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'index'
})
export default class Index extends Vue {
}
</script>
