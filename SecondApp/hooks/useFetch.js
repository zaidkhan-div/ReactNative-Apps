import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ endpoint, query }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key":   "252aeae17bmsh44e3397c6c471e8p127856jsndb3d2772ae1d",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        // headers: {
        //     'x-rapidapi-key': 'fc353d781dmsh1c20de7952ebe93p1297abjsn7dac65c05863',
        //     'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        // }, // newGmail
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;