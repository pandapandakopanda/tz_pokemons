// @ts-nocheck
import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { isNull } from '../stores/help'

import ST from './index.scss'

@inject('store')
@observer
class PokePage extends React.Component {

  state = {
    isListOpen: false
  }
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

  createListOfFlavors = (flavor_text) => {
    return flavor_text.map((el, i) => {
      const name = Object.keys(el)[0]
      console.log('name: ', name);
      return <li key={i}>{name.toUpperCase()}: {el[name]}</li>
    })
  }

  listOnClick = () => {
    this.setState({isListOpen:!this.state.isListOpen})
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
                <p className={ST.activeP} onClick={this.listOnClick}>
                  {(this.state.isListOpen)
                  ?'Показать изображение'
                  :'Посмотреть особенности' }
                </p>
              </div>
              {(this.state.isListOpen)
              ? <div className={ST.ability} >
                  <ul>
                    {this.createListOfFlavors(abilitiesData.flavor_text)}
                  </ul>
                </div>
              :<img src={ this.props.store.getPokeImages(id) } alt='` Img server problem... sorry' />}
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