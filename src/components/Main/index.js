import React from 'react'
import ST from './index.scss'
import Card from '../Card'
import PokePage from '../PokePage'
import  store  from '../stores/store'
import { createId } from '../stores/help'
import { observer } from 'mobx-react'
import { cName } from '../stores/PokePage/transport/converter'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

@observer
class Main extends React.Component {


  createCard = () => {
    return store.pokeNames.map((el, i) =>{
      const imgID = createId(el.url)
      return (
        <Card 
          key={el.name} 
          name={cName(el.name)} 
          url={`#/pokemon/${imgID}`}
          imgID={imgID}
        />
      )
    })
  }
  
  render(){
    const cards = this.createCard()
    
    return(
      <div className={ST.main}> 
        <Switch>
          <Route exact path='/' children={cards}/>
          <Route exact path='/pokemon/:id' children={<PokePage/>}/>
        </Switch>
      </div>
    )
  }
}

export default Main