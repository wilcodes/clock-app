import {useEffect, useState} from "react";

const useApi = (url) => {
    const [state, setState] = useState({})

    useEffect(() => {
        if (url) {
            fetch(url, {
                type: 'GET'
            })
                .then(response => response.json())
                .then(data => setState({data}))
                .catch(err => setState(err))
        }
    }, [url])

    return state
}

export default useApi;