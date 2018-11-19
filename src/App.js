import React, {
  Component
} from 'react';
import Login from './components/logInScreen'
import {Link, Route} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <div>
      <Route path ="/login" component = {Login}/>
      <Link to='/login'>
   <button type='submit'>Log In</button>
   </Link>
   </div>
    )
  }
}
  export default App;
