import { useEffect, useState } from "react";
import axios from "axios";

export function useFetcher(url) {
    const [response, setResponse] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoader(true);
                const response = await axios.get(url);
                setResponse(response);
                console.log(response.data);
            } catch (e) {
                console.error(e);
                setError(e.message);
            } finally {
                setLoader(false);
            }
        }

        fetchData();
    }, [url]);

    return {response, loader, error};
}