import React from 'react'

const Error = ({error}) => {

  if(!error){
    return null
  }else{
  return (
    <p style={{color:'#f31', margin: '1rem 0', textAlign:'center'}}>
    Login ou Senha incorreto(s) 
    </p>
  )
}
}

export default Error
