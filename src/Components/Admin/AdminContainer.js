import { connect } from 'react-redux';
import Admin from './Admin';
import { loginAC } from '../../redux/authReduser';

let mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {loginAC})(Admin);