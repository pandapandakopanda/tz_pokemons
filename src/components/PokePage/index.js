import React from 'react'
import { withRouter } from 'react-router-dom'

import ST from './index.scss'


 class PokePage extends React.Component {
  render(){
    console.log('this.props: ', this.props);
    return(
      <div className={ST.wrapper}>
      </div>
    )
  }
}


export default withRouter(PokePage)