import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  //zatim umesto blogs menjamo u data da bi posle mogli da ga koristimo globalno
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
     useEffect(() => {
        setTimeout(() => {
        
            fetch(url)
            .then(res => {
                console.log(res);
                
                if (!res.ok){
                throw Error('Ne mozemo fetchovati podatke za taj izvor');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
                
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
        }, [url]);
        return { data, isPending, error}
}

export default useFetch;    