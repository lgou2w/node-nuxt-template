<template lang="pug">
  .container
    p {{ text }}
    input(v-model="text")
    p Vuex localStorage counter: {{ counter }}
    button(@click.stop="counter++") Increment
    button(@click.stop="counter--") Decrement
    button(@click.stop="delCounter") Delete
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import * as types from '../store/mutation-types'

@Component({
  name: 'index'
})
export default class Index extends Vue {
  text: string | null = 'HelloWorld!'

  @State(state => state.counter) _counter!: number
  @Mutation(types.SET_COUNTER) setCounter!: (counter: number) => void
  @Mutation(types.DEL_COUNTER) delCounter!: () => void

  get counter (): number { return this._counter }
  set counter (val: number) { this.setCounter(val) }

  mounted () {
    const counter = Number.parseInt(localStorage.getItem(types.KEY_COUNTER) || '0') || 0
    if (counter) {
      this.counter = counter
    }
  }
}
</script>
