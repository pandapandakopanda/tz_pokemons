import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import ST from './index.scss'

@inject('store')
@observer
class PokePage extends React.Component {

  checkCurrentId(){
    const { id } = this.props.match.params
    console.log('this.props.store: ', this.props.store);
    this.props.store.pokePage.fetchDataIfNeeded(id)
  }

  componentDidMount(){
    this.checkCurrentId()
  }

  componentDidUpdate(){
    this.checkCurrentId()
  }

  render(){
    return(
      <div className={ST.wrapper}>
        POKEPAGE        
      </div>
    )
  }
}


export default withRouter(PokePage)