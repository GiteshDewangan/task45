import axios from 'axios';
import toast from 'react-hot-toast';


// put you api url
const URL = 'http://192.168.21.251:8000'; 

export const Order = async(data)=>{
    try{
        return await axios.post(`${URL}/order`, data);
    }catch(error){
        console.log(error.message);
        toast.error(error.message);
    }

}