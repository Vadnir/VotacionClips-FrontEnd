import axios from 'axios'
import cookies from 'vue-cookies'

const url = 'http://127.0.0.1:8000/api/v1/'

export const domain = "localhost"

export async function createUserApi(username, firstName, email, password) {
  console.log(username, firstName, email, password)

  var options = {
    method: 'POST',
    url: url + 'user/',
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json'
    },
    data: {
      username: username,
      password: password,
      email: email,
      first_name: firstName
    }
  }
  return await axios.request(options)
}

export async function getUserInfoApi(user) {
  var options = {
    method: 'GET',
    url: url + 'user/api/v1/user/' + user,
    headers: {
      Accept: '*/*',
      Authorization: 'token ' + cookies.get('token'),
      'Content-Type': 'application/json'
    }
  }
  return await axios.request(options)
}

export async function getTokenApi(username, password) {
  var options = {
    method: 'POST',
    url: url + 'user/auth/',
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json'
    },
    data: {
      username: username,
      password: password
    }
  }
  const response = await axios.request(options)
  const token = response.data.token
  cookies.set('token', token)
  cookies.set('username', username)
  return response
}

export function isLoginApi() {
  return cookies.get('token') != null
}

export function logOutApi() {
  cookies.remove('username')
  cookies.remove('token')
}

export async function getClipsApi(params = '') {
  let url_endpoint = 'clip/list/clip'
  if (params != '') {
    url_endpoint = url_endpoint + '?category__name=' + params
  }

  var options = {
    method: 'GET',
    url: url + url_endpoint,
    headers: {
      Accept: '*/*',
      Authorization: 'token ' + cookies.get('token'),
      'Content-Type': 'application/json'
    }
  }
  return await axios.request(options)
}

export async function createClipVote(id) {
  var options = {
    method: 'POST',
    url: url + 'clip/vote/',
    headers: {
      Accept: '*/*',
      Authorization: 'token ' + cookies.get('token'),
      'Content-Type': 'application/json'
    },
    data: {
      'clip_uuid': id
    }
  }
  return await axios.request(options)
}

export async function deleteClipVote(id) {
  var options = {
    method: 'DELETE',
    url: url + 'clip/vote/',
    headers: {
      Accept: '*/*',
      Authorization: 'token ' + cookies.get('token'),
      'Content-Type': 'application/json'
    },
    data: {
      'clip_uuid': id
    }
  }
  return await axios.request(options)
}