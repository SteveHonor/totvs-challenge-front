import axios from 'axios'
import store from './../../store'

// http request progress style
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

// URL Core
var API_SECURE = process.env.VUE_APP_CORE_URL

if (!store.getters.account.email) {
  delete localStorage.token
  delete localStorage.signedIn
  delete localStorage.email
}

const securedAxiosInstance = axios.create({
  baseURL: API_SECURE,
  withCredentials: true,
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Accept': 'application/json; charset=utf-8'
  }
})

const plainAxiosInstance = axios.create({
  baseURL: API_SECURE,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Accept': 'application/json; charset=utf-8'
  }
})

securedAxiosInstance.interceptors.request.use(config => {
  const method = config.method.toUpperCase()
  NProgress.start()
  NProgress.set(0.4)

  var element = document.getElementById("spinner-grow");
  if (element) {
    element.classList.add("active");
  }

  if (method !== 'OPTIONS') {
    config.headers = {
      ...config.headers,
      'X-TOKEN': store.getters.token
    }
  }

  return config
})

securedAxiosInstance.interceptors.response.use(response => {
  setTimeout(function () {
    NProgress.done(true)

    var element = document.getElementById("spinner-grow");
    if(element) {
      element.classList.remove("active");
    }
  }, 500)

  return response
})

securedAxiosInstance.interceptors.response.use(null, error => {
  setTimeout(function () {
    NProgress.done(true)

    var element = document.getElementById("spinner-grow");
    if (element) {
      element.classList.remove("active");
    }
  }, 500)

  if (error.response && error.response.config && error.response.status === 401) {
    delete localStorage.token
    delete localStorage.signedIn
    delete localStorage.email
  } else {
    return Promise.reject(error)
  }
})

export {
  securedAxiosInstance,
  plainAxiosInstance
}
