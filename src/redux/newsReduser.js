import { API } from "../api/api";

// Actions
const SET_NEWS = 'SET-NEWS'


let initialState = {
    newsData: null,
};

const newsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                newsData: action.news,
            };

        default: return state;
    }
};


// Action Creators
export const setNewsAC = (news) => ({ type: SET_NEWS, news });

export const getNewsThunkCreator = () => {

    return (dispatch) => {
        debugger
        API.getNews().then(data => {
            dispatch(setNewsAC(data));
        });
    }
}

export default newsReduser;