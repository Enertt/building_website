import { API } from "../api/api";

// Actions
const SET_NEWS = 'SET-NEWS'
const SET_TOKEN = 'SET-TOKEN'


let initialState = {
    newsData: null,
    token: null,
};

const newsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                newsData: action.news,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };

        default: return state;
    }
};


// Action Creators
export const setNewsAC = (news) => ({ type: SET_NEWS, news });
export const setTokenAC = (token) => ({ type: SET_TOKEN, token });

export const getNewsThunkCreator = () => {

    return (dispatch) => {
        debugger
        API.getNews().then(data => {
            dispatch(setNewsAC(data));
        });
    }
}

export const loginThunkCreator = (password) => {

    return (dispatch) => {
        API.login(password).then(token => {
            dispatch(setTokenAC(token));
        });
    }
}

// export const setNewsThunkCreator = (token, password) => {

//     return (dispatch) => {
//         API.setNews(token, password)
//         .then(token => {
//             dispatch(setTokenAC(token));
//         });
//     }
// }

export default newsReduser;