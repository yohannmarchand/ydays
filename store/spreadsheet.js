import axios from 'axios'

export const state = () => ({
  spreadSheets: []
})

export const getters = {
  getUserSpreadSheet: (state) => (userId) => {
    return state.spreadSheets.filter(spreadSheet => spreadSheet.user === userId)
  },

  getSpreadSheetById: (state) => (id) => {
    return state.spreadSheets.find(spreadSheet => spreadSheet.id === id)
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

  fetchsheetValue({ state, commit}, { id, sheet }) {
    return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${id}/values/'${sheet}'`, { params: {key: 'AIzaSyCdSW55KU1QxTukzbrTaK5PaknsCDH5qIQ'}}).then(data => {
      return data.data
    })
  }
}
