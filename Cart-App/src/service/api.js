import axios from 'axios';
import toast from 'react-hot-toast';


// put you api url
const URL ='https://task45-ochre.vercel.app'; 

export const Order = async(data)=>{
    try{
        return await axios.post(`${URL}/ok`,data,{
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Accept' :'text/plain'
            }
        });
    }catch(error){
        console.log(error.message);
        toast.error(error.message);
    }

}
