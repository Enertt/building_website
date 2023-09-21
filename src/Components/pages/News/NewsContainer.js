import { connect } from 'react-redux';
import News from './News';
import { getNewsThunkCreator } from '../../../redux/newsReduser';

let mapStateToProps = (state) => ({
    newsData: state.newsReduser.newsData
});

export default connect(mapStateToProps, {getNewsThunkCreator})(News);