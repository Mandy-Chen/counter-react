import { connect } from  'react-redux'
import Counter from '../Components/Counter'
import { increaseAction, reduceAction } from '../Actions/Action';
const mapStateToProps = (state) => ({
    value: state.value
})
const mapDispatchToProps=(dispatchEvent)=>({
    increase:()=>dispatchEvent(increaseAction()),
    reduce:()=>dispatchEvent(reduceAction())
})
const CountApp=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
export default CountApp
