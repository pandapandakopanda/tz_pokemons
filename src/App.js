import React from 'react'
import Pagination from 'react-js-pagination'
import ST from './index.scss'

import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import { Route } from 'react-router-dom'

import store from './components/stores/store'
import { observer } from 'mobx-react'

@observer
class App extends React.Component {

  state = {
    activePage: 1
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber })
    store.setData(pageNumber)
  }
  
  componentDidMount(){
    console.log(this.state.activePage);
    store.setPageData()
    store.setData()
  }
  
  renderPagination(){
    return(
      <div className={ST.pagination}>
        <Pagination
          hideDisabled
          activePage = { this.state.activePage }
          itemsCountPerPage = {20}
          totalItemsCount = {store.totalPage - 1}
          onChange = { this.handlePageChange }
          innerClass={ST.inner}
          linkClass={ST.link}
          /* getPageUrl={()=> `#${this.state.activePage}` } */
        />
      </div>
    )
  }

  render(){
    return(
      <div className={ST.wrraper}>
        <Header />
        <div className={ST.main}>
          <Nav />
          <Main />
        </div>
        <Route exact path='/' children={this.renderPagination()}/>
      </div>
    )
  }
}

export default App