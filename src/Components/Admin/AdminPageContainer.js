import { connect } from 'react-redux';
import AdminPage from './AdminPage';

let mapStateToProps = (state) => ({
    isAuth: state.authReduser.isAuth,
});

export default connect(mapStateToProps, {})(AdminPage);