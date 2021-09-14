import $axios from "./index"

export function getCardsData() {
  const url = '/getCardsData'
  return $axios.get(url)
}

export function getLineData() {
  const url = '/getLineData'
  return $axios.get(url)
}