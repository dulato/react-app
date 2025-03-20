export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

const initialState = {
    loading: false,
    error: null,
    users: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { loading: true, error: null, users: [] };
        case FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload };
        case FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] };
        default:
            return state;
    }
};