import axios from 'axios'

export const state = () => ({
  spreadSheets: []
})

export const getters = {
  getUserSpreadSheet: (state) => (userId) => {
    console.log(userId)
    return state.spreadSheets.filter(spreadSheet => spreadSheet.user === userId)
  }
}

export const mutations = {
  add(state , spreadSheet) {
    state.spreadSheets.push(spreadSheet)
  },
}

export const actions = {
  fetchSpreadsheet({ state, commit }, id) {
    return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${id}`, { params: {key: 'AIzaSyCdSW55KU1QxTukzbrTaK5PaknsCDH5qIQ'}}).then(data => {
      return data.data
    })
  },

  fetchSheet({ state, commit}, id) {
    return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${id}`, { params: {key: 'AIzaSyCdSW55KU1QxTukzbrTaK5PaknsCDH5qIQ'}}).then(data => {
      return data.data
    })
  }
}
