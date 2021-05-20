import { connect } from 'react-redux';
import SingleCounter from './SingleCounter';
import * as actions from '../../redux/counterToolkit/actions';

const mapStateToProps = state => ({
  value: state.counterToolkit.value,
  step: state.counterToolkit.step,
});

export default connect(mapStateToProps, actions)(SingleCounter);
