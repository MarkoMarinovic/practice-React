import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

    useEffect(()=>{
        const abortControler = new AbortController();
        fetch(url, {signal: abortControler.signal})
        .then(res => {
            if(!res.ok) {
               throw Error('ne valja ovo, pozdrav brate');
            }
            return res.json() ;
        })
            .then(data => {
                //console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Abort Error');
                } else {
                setError(err.message);//iako abortamo error u fetchu ovo i dalje updatea state
                setIsPending(false);
                }
            })

            return () => abortControler.abort();

      }, [url]); //url je dependencie i svaki put kad se promijeni useFetch ce se ponovo okinuti

      return {data, isPending, error}; //mozemo vratiti bilo sta, tipa array npr, u ovom slucaju nam treba objekt
}

export default useFetch;