import Axios from 'axios';

const APIKEY = '28a885c6daab4d7bb1791bcb85db6ad5'
const SEARCH = 'coronavirus'
const LANGUAGE = 'es'
const SORTBY = 'publishedAt'

const endpoint = (page) => `http://newsapi.org/v2/top-headlines?q=${SEARCH}&apiKey=${APIKEY}&language=${LANGUAGE}&sortBy=${SORTBY}&page=${page}`

const get = ({ page }) => Axios.get(endpoint(page), { timeout: 5000 });

export default { get }