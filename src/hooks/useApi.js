import { useEffect, useState} from "react";

const useApi = (url) => {
    const [state, setState] = useState({})

        useEffect(()=>{
            fetch(url)
                .then(response => response.json())
                .then(data => setState({data}))
        },[url])

    return state
}

export default useApi;