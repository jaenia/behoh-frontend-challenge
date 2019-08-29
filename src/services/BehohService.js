import axios from 'axios'

function getStates() {
  return axios.get('http://apps.behoh.com:8081/api/v1/gateway')
    .then(res => {
      return res.data.map(item => ({label: item.sigla, value: item.link}))
    })
}

export default {getStates}