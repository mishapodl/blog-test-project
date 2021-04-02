import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreater from '../redux/actions'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreater, dispatch)
}
