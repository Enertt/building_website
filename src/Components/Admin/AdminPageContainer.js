import { connect } from 'react-redux';
import AdminPage from './AdminPage';
import { getNewsThunkCreator, setNewsThunkCreator } from '../../redux/newsReduser';

let mapStateToProps = (state) => ({
    isAuth: state.authReduser.isAuth,
    newsData: state.newsReduser.newsData,
    token: state.newsReduser.token,
});

export default connect(mapStateToProps, {getNewsThunkCreator, setNewsThunkCreator})(AdminPage);