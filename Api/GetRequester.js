let BASE_URL="https://imtekh.com/noman/zurvos";


export async function getRecentsgym(token) {
    return fetch(`${BASE_URL}/api/recents-gym`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .catch(error => error);
  }

  export async function getRequest(api,del=false) {
    return fetch(`${BASE_URL}/`+api, {
      method: del?'DELETE':'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .catch(error => error);
  }