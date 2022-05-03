import axios from 'axios'

export const state = () => ({
  spreadSheets: []
})

export const mutations = {
  add({state}, spreadSheet) {
    state.spreadSheets.push({
      spreadSheet,
    })
  },
}

export const actions = {
  fetchSheet({ state, commit }, id) {
    return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${id}`, { params: {key: 'AIzaSyCdSW55KU1QxTukzbrTaK5PaknsCDH5qIQ'}}).then(data => {
      return data.data
    })
  }
}
