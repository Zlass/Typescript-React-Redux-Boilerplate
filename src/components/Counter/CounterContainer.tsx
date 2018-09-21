import Counter from './Counter';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: state.counterReducer,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {dispatch({ type: 'INCREMENT' })},
  onDecrement: () => {dispatch({ type: 'DECREMENT' })},
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
