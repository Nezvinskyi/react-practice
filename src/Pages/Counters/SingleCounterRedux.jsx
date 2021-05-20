import { connect } from 'react-redux';
import SingleCounter from './SingleCounter';
import * as actions from '../../redux/counter/actions';

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
