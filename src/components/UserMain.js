import React, {
  Component
} from 'react';
import logo from '../boom.svg';
import {NavLink, Route} from 'react-router-dom' //?

class UserMain extends Component {

  render() {
    return(<h1> HIt it</h1>
    )
  }
}

export default UserMain;



  // constructor() {
  //   super()
  //   this.state = {
  //     user: {},
  //     pages: {}
  //   }
  // }

  // componentDidMount(props) {
  //   //needs UID from login
  //   const UID = this.props.UID
  //   const user = rootRef.child('users').child(UID);
  //   //user to state?
  //   // this.setState
  //   const pages = rootRef.child('pages').orderByChild('UID').equalTo(UID).limitToFirst(10);
  //   //pages to state
  //   // this.setState
  // }

  // render() {
  //   const pages = this.state.pages;
  //   <div>
  //     <div>
  //       <button><NavLink to='/AddVideo'>+</NavLink></button>
  //     </div>

  //     <div>
  //     {
  //       pages.map(page => {
  //         //render page images vertically
  //       })
  //     }
  //     </div>
  //   </div>
  // }
