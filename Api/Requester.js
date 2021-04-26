let BASE_URL="https://imtekh.com/noman/zurvos";
import axios from 'axios'

export async function login(data) {
    return fetch(`${BASE_URL}/api/admin-login`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(res => res)
      .catch(error => error);
  }

  export async function PostReq(data,api,formData=false) {
    return formData?
    fetch(`${BASE_URL}/`+api, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      body: data,
    })
      .then(response =>  response.text())
      .catch((err) =>err)
    :fetch(`${BASE_URL}/`+api, {
      method: 'post',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(res => res.json())
      .catch(error => error)
  }
  
  export async function axiosReq(data,api) {
  axios.post(`${BASE_URL}/`+api, data,
{
  headers:{
    // Accept:  'multipart/form-data' ,
     Accept: 'application/json, text/plain, */*',
     'Content-Type': 'multipart/form-data',
  }
}).then(res => res)
.catch(error => error);
}
  






