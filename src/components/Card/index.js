import React from 'react'
import ST from './index.scss'
import store from '../stores/store'



class Card extends React.Component {
  render(){
    const { name, isLoading, url, imgID } = this.props
    const card = <a href={url}><div className={ ST.wrapper }>
                  <h4>{ name }</h4>
                  <div className={ST.image}>
                    <img src={ store.getPokeImages(imgID) } alt='` Img server problem... sorry' />
                  </div>
                </div>
                </a>
    return(
      isLoading ? <p>isLoading...</p> : card
    )
  }
}

export default Card