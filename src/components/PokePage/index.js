import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import ST from './index.scss'

@inject('store')
@observer
class PokePage extends React.Component {

  e = null

  checkCurrentId(){
    const { id } = this.props.match.params
    console.log('id: ', id);
    this.props.store.pokePage.fetchDataIfNeeded(id)
    this.e = this.props.store.pokePage.fullData
  }
  
  componentDidMount(){
    console.log('-------------------');
    console.log('didMount');
    this.checkCurrentId()
  }

  
  componentDidUpdate(){
    console.log('--------------------');
    console.log('didUpdate');
    this.checkCurrentId()
  } 

 


  render(){

    const data = this.props.store.pokePage.data.then(resp => resp)
    console.log('data: ', data);
    
    return(
      <div className={ST.wrapper}>
        POKEPAGE     
      </div>
    )
  }
}


export default withRouter(PokePage)