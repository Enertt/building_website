// Actions
const LOGIN = 'LOGIN';


let initialState = {
    isAuth: false,
};

const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: action.newState,
            };
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

// export const getUsersThunkCreator = (currentPage, pageSize) => {

//     return (dispatch) => {

//         dispatch(toggleIsFetchingAC(true));

//         usersAPI.getUsers(currentPage, pageSize).then(data => {
//             dispatch(toggleIsFetchingAC(false));
//             dispatch(setUsersAC(data.items));
//             dispatch(setTotalUsersCountAC(data.totalCount));
//             dispatch(setCurrentPageAC(currentPage));
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