import axios from "axios";
import React from "react";


export const UseNotification=()=>{
  const [notification,setNotification]=React.useState({});
  let token:string;
  if(sessionStorage.getItem("loginData")){
    token = JSON.parse(sessionStorage.getItem("loginData")||'{}').token;    
  }
  const getNotification=()=>{
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization:`Bearer ${token}`,
      },
    };
    axios
    .post(`https://uniqual.dev:3001/api/v1/users/notifications`,{},config)
    .then((response) => {
      if (response.data){
        // console.log(response.data.data)
        setNotification(response.data.data)
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return {getNotification,notification};
}