import { connect } from 'react-redux'
import  CounterGroup from '../Components/CounterGroup'
import { createCounterAction } from '../Actions/CreatCounterAction';
const mapStateToProps = (state) => ({
    value: state.value
})
const mapDispatchToProps = (dispatchEvent) => ({
    inputCount: () => dispatchEvent(createCounterAction())
})
const AddCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)
export default AddCounter

