import React from 'react'
import ST from './index.scss'
import store from '../stores/store'
import { observer } from 'mobx-react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PokePage from '../PokePage'
import { routes } from '../../routes'

@observer
class Nav extends React.Component {
  
  componentDidMount(){
    store.setPageData()
    store.setAllPokemonsName()
  }

  listElement = (el, index) => {
    return <Link to={`/pokemon/${index}`} key={index}>
              <li>
                {el.toUpperCase()}
              </li>
            </Link>}  

  render(){
    const ul = store.allPokemonsData.map((el, index) => this.listElement(el, index))
    console.log('routes: ', routes);
    return(
      <div className={ST.wrapper}>
        <ul>  
          {ul}
        </ul>
      </div>
    )
  }
}

export default Nav