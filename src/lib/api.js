import Axios from 'axios';

const APIKEY = '28a885c6daab4d7bb1791bcb85db6ad5'
const SEARCH = 'coronavirus'
const LANGUAGE = 'es'
const FROM = '2020-03-29'
const ENDPOINT = `http://newsapi.org/v2/everything?q=${SEARCH}&apiKey=${APIKEY}&language=${LANGUAGE}&from=${FROM}`

const get = () => Axios.get(ENDPOINT);

export default { get }