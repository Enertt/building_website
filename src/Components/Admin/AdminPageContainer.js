import { connect } from 'react-redux';
import AdminPage from './AdminPage';
import { getNewsThunkCreator, setNewsThunkCreator, getMessagesThunkCreator, delMessagesThunkCreator } from '../../redux/newsReduser';

let mapStateToProps = (state) => ({
    isAuth: state.authReduser.isAuth,
    newsData: state.newsReduser.newsData,
    messagesData: state.newsReduser.messagesData,
    token: state.newsReduser.token,
});

export default connect(mapStateToProps, {getNewsThunkCreator, setNewsThunkCreator, getMessagesThunkCreator, delMessagesThunkCreator})(AdminPage);