import { API } from "../api/api";
import { loginAC } from "./authReduser";

// Actions
const SET_NEWS = 'SET-NEWS'
const SET_MESSAGES = 'SET-MESSAGES'
const SET_TOKEN = 'SET-TOKEN'


let initialState = {
    newsData: null,
    messagesData: null,
    token: null,
};

const newsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEWS:
            
            return {
                ...state,
                newsData: action.news,
            };
            case SET_MESSAGES:
            
            return {
                ...state,
                messagesData: action.messages,
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
export const setMessagesAC = (messages) => ({ type: SET_MESSAGES, messages });
export const setTokenAC = (token) => ({ type: SET_TOKEN, token });

export const getNewsThunkCreator = () => {

    return (dispatch) => {
        
        API.getNews().then(data => {
            dispatch(setNewsAC(data));
        });
    }
}

export const getMessagesThunkCreator = (token) => {

    return (dispatch) => {
        
        API.getMessage(token).then(data => {
            dispatch(setMessagesAC(data));
        });
    }
}
export const delMessagesThunkCreator = (token, data) => {

    return (dispatch) => {
        
        API.delMessage(token, data).then(data => {
            dispatch(setMessagesAC(data));
        });
    }
}

export const loginThunkCreator = (password) => {

    return (dispatch) => {
        API.login(password).then(response => {
            if(response.status === 200){
                dispatch(loginAC(true))
            }
            dispatch(setTokenAC(response.data.token));
        });
    }
}

export const setNewsThunkCreator = (token, newNews) => {

    return (dispatch) => {
        API.setNews(token, newNews).then(data => {
            dispatch(setNewsAC(data));
        });
    }
}

export default newsReduser;