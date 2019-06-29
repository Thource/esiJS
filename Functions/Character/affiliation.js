module.exports = affiliation

let axios = require('axios')
let { link } = require('../../esi.json')

async function affiliation(charID) {
    let data;
    if (typeof charID !== 'object') {
        console.error(`The function 'affiliation' requires a array!`)
        data = 'affiliation requires array'
        return data
    }

    try {
        response = await axios.post(`${link}characters/affiliation/?datasource=tranquility`, charID)
    } catch(e) {
        console.error(e.response.data.error)
        return false
    }
    return response.data
}