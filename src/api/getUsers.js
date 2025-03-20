import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "@/store/reducers/userReducer";

export function useGetUsers(url) {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                dispatch({type: FETCH_USERS})
                const response = await axios.get(url);
                console.log(response.data);
                dispatch({type: FETCH_USERS_SUCCESS, payload: response.data})
            } catch (e) {
                console.error(e);
                dispatch({type: FETCH_USERS_ERROR, payload: 'This is error'})
            }
        }

        fetchData();
    }, [url]);
}