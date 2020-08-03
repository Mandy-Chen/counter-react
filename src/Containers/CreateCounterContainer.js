import { connect } from  'react-redux'
import CounterGroup from '../Components/CounterGroup'
import { createCounterAction } from '../Actions/Action';
const mapStateToProps = (state) => ({
    value: state.value
})
const mapDispatchToProps=(dispatchEvent)=>({
    increase:()=>dispatchEvent(createCounterAction())
})
const CounterGroup=connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)
export default CounterGroup
