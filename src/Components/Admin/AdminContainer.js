import { connect } from 'react-redux';
import Admin from './Admin';
import { loginAC } from '../../redux/authReduser';
import { loginThunkCreator } from '../../redux/newsReduser';


let mapStateToProps = (state) => ({
    isAuth: state.authReduser.isAuth,
    token: state.newsReduser.token,
});

export default connect(mapStateToProps, {loginAC, loginThunkCreator})(Admin);