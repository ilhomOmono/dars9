import React, { useEffect, useState } from 'react';

const useGatch = (URL) => {
    const [data, setData] = useState([])
        useEffect( ()=> {
            async function loadData() {
                try{
                    const response = await axios(URL);
                    setData(response.data)
                }
                catch(error){
                    console.log(error);
                    
                }
            }
        }
   
},  loadData()
[URL])


}

export default useFetch