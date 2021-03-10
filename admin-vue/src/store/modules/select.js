
import { sysCustomer } from '@/api/system'

const state = {
  industry: [],
  position: [],
  customer: []
}

const mutations = {
  SET_INDUSTRY: (state, industry) => {
    state.industry = industry
  },
  SET_POSITION: (state, position) => {
    state.position = position
  },
  SET_CUSTOMER: (state, customer) => {
    state.customer = customer
  }
}

const actions = {
  getSelectData({ commit }, type, refresh) {
    sysCustomer().then(() => { })
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}