import { connect } from 'react-redux';
import Admin from './Admin';
import { loginAC } from '../../redux/authReduser';
import { loginThunkCreator } from '../../redux/newsReduser';

let mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {loginAC, loginThunkCreator})(Admin);