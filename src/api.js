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

export function GET_LIST({page}){
  return{
    url: API_URL + `users?page=${page}`,
    options: {
      method: 'GET',
      cache:'no-store'
    },
};
}
export function CLIENT_POST(body){
  return{
    url: API_URL + 'users',
    options:{
      method: 'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    }
  }
};