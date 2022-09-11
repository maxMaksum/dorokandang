const axios = require('axios');

export const fetchAdd = async(url, x)=>{

  try{
    const response = await axios.post(url, x)
    return response 
  }
  catch (error) {
    console.error(error);
  }
  }

export  const fetchRead = async(url, mdata)=>{
  console.log(mdata)
    try{
    const response = await axios.get(url, mdata)
    const {respond1} = await response.data
    return respond1
  }
  catch (error) {
    console.error(error);
  }
  }

export const fetchUpdate = async(url, x)=>{
    try{
      const response = await axios.put(url, x)
      return response 
    }
    catch (error) {
      console.error(error);
    }
    }


export const fetchDelete = async(url)=>{
 
        try{
        const response = await axios.delete(url)
      
        return response
      
      }
      catch (error) {
        console.error(error);
      }
      }

 

