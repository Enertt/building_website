import { API } from "../api/api";

// Actions
const LOGIN = 'LOGIN';
const APP = 'APP'

let initialState = {
    isAuth: false,
    // state: null
};

const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: action.newState,
            };

        // case APP:
        //     return {
        //         ...state,
        //         state: action.state,
        //     };
        // case SET_USERS:
        //     let newUsers = [...action.users]
        //     let stateCopy = { ...state, users: newUsers }
        //     return stateCopy

        // case SET_CURRENT_PAGE:

        //     let newPage = action.currentPage
        //     let stateCopyPage = { ...state, currentPage: newPage }
        //     return stateCopyPage

        // case SET_TOTAL_USERS_COUNT:
        //     let newUsersCount = action.totalCount
        //     let stateCopyTotalCount = { ...state, totalUsersCount: newUsersCount }
        //     return stateCopyTotalCount

        // case TOGGLE_IS_FETCHING:
        //     let newFetchingState = action.isFetching
        //     let stateCopyFetching = { ...state, isFetching: newFetchingState }
        //     return stateCopyFetching

        // case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
        //     let newFollowingProgressState = action.followingIsInProgress
        //     let stateCopyfollowingProgress = { ...state, followingInProgress: newFollowingProgressState }
        //     return stateCopyfollowingProgress

        default: return state;
    }
};


// Action Creators
export const loginAC = (newState) => ({ type: LOGIN, newState });
// export const appAC = (state) => ({ type: APP, state });

// export const getAppStateThunkCreator = () => {
//     return (dispatch) => {
//         API.getState().then(response => {
//             if(response.status === 200){
//                 dispatch(appAC(response.state))
//             }
//         });
//     }
// }

// export const unfollowThunkCreator = (userId) => {

//     return (dispatch) => {

//         dispatch(toggleFollowingInProgressAC(true));

//         usersAPI.deleteFollowingState(userId).then(data => {
//             if (data.resultCode === 0) {
//                 dispatch(unfollowAC(userId));
//             };
//             dispatch(toggleFollowingInProgressAC(false));
//         });
//     }
// }

export default authReduser;