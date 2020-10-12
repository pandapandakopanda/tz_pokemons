import React from 'react'
import {Link} from 'react-router-dom'
import ST from './index.scss'


class Header extends React.Component {
  render(){
    return(
      <div className={ST.header}>
        <Link to='/'> POKEMON! </Link>
      </div>
    )
  }
}

export default Header