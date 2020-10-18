import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { isNull } from '../stores/help'

import ST from './index.scss'

@inject('store')
@observer
class PokePage extends React.Component {

  e = null

  checkCurrentId(){
    const { id } = this.props.match.params
    this.props.store.pokePage.fetchDataIfNeeded(id)
    this.e = this.props.store.pokePage.fullData
  }
  
  componentDidMount(){
    this.checkCurrentId()
  }

  
  componentDidUpdate(){
    this.checkCurrentId()
  } 

 


  render(){
    const data = this.props.store.pokePage.baseData
    const { abilitiesData } = this.props.store.pokePage
    const { isFetching } = this.props.store.pokePage
    
    
    const getData = () => {
      if( isNull(data) || isNull(abilitiesData)){
        return 'no data'
      } else {
        return (
          isFetching ? 'waitin...' : 
          <div className={ST.wrapper}>
            <div className={ST.about}>
              <p>name: {data.name}</p>
              <p>weight: {data.weight}</p>
              <p>base experience: {data.base_experience}</p>
            </div>
            <div className={ST.ability}>
              <p>ability: {abilitiesData.name}</p>
              <p>generation: {abilitiesData.generation}</p>
              <p>is exist in main series: {abilitiesData.is_main_series}</p>
            </div>
          </div>
        )
      }
    }
    
    const view = getData()

    return(
      <div>    
        {view}
      </div>
    )
  }
}


export default withRouter(PokePage)