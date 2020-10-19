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
          <div className={ST.data}>
            <h1> {data.name}</h1>
            <div className = {ST.text_pic}>
              <div className={ST.about}>
                <p>Вес: {data.weight}</p>
                <p>Начальный опыт: {data.base_experience}</p>
                <p>Способность: {abilitiesData.name}</p>
                <p>Поколение: {abilitiesData.generation}</p>
                <p>Наличие в оригинальной серии игр: {abilitiesData.is_main_series}</p>
                <p>Особенность: {abilitiesData.flavor_text}</p>
              </div>
              <img src={ this.props.store.getPokeImages(id) } alt='` Img server problem... sorry' />
            </div>
          </div>
        )
      }
    }
    
    const {id} = this.props.store.pokePage
    return(
      <div className={ST.wrapper}>    
        {getData()}
       
      </div>
    )
  }
}


export default withRouter(PokePage)