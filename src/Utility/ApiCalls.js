import { apiMainUrl } from './url'

export const fetchAPI = async() => {
  try {
    const response = await fetch(apiMainUrl)
    const json = await response.json();
    return console.log(json);
  }catch(error) {
    return console.log("error", error)
  }
}