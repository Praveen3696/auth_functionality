// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onClockLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="logout-container">
      <button className="logout-button" type="button" onClick={onClockLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
