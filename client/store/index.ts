import {
  Commit,
  GetterTree,
  MutationTree,
  ActionTree
} from 'vuex'
import * as types from './mutation-types'

export interface State {
  counter: number
}

export const state = (): State => ({
  counter: 0
})

export const getters: GetterTree<State, any> = {
}

export const mutations: MutationTree<State> = {
  [types.SET_COUNTER] (state: State, counter: number) {
    state.counter = counter
    localStorage.setItem(types.KEY_COUNTER, counter.toString())
  },
  [types.DEL_COUNTER] (state: State) {
    state.counter = 0
    localStorage.removeItem(types.KEY_COUNTER)
  }
}

export const actions: ActionTree<State, any> = {
}

export const strict = process.env.NODE_ENV !== 'production'
