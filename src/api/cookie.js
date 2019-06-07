import Cookies from 'js-cookie'

export function getCookies(name) {
  return Cookies.get(name)
}

export function setCookies(name,val) {
  return Cookies.set(name,val,{ expires: 7, path: '/' })
}