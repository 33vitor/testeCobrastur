export const API_URL = 'https://reqres.in/api/';

export function TOKEN_POST(body){
  return{
    url: API_URL + 'login',
    options:{
      method: 'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    }
  }
};