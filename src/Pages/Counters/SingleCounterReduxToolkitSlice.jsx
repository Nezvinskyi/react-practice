import { connect } from 'react-redux';
import SingleCounter from './SingleCounter';
import * as actions from '../../redux/counterToolkitSlice/reducer';

const mapStateToProps = state => ({
  value: state.counterToolkitSlice.value,
  step: state.counterToolkitSlice.step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
