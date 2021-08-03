import { apiMainUrl } from './url'

export const fetchAPI = async() => {
  try {
    const response = await fetch(apiMainUrl)
    const json = await response.json();
    console.log(json);
  }catch(error) {
    console.log("error", error)
  }
}