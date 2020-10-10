import { API } from './API'
import { observable, action, toJS } from 'mobx'

class Store {

  @observable pokeNames = []
  @observable totalPage = 0
  @observable activePage = 1 
  @observable allPokemonsData = []

  @action getPokeNames = (limit, offset) =>  API.get(`/pokemon?limit=${limit}&offset=${offset}`)
  .then(response => response.data)

  getPageData = () => API.get('/pokemon')
  .then(response => response.data)

  @action setData = (pageNumber) => {
    this.setActivePage(pageNumber)
    store.getPokeNames(20, this.activePage*20-20).then(response =>{   
      this.pokeNames = response.results
    })
  }

  @action setAllPokemonsName = () => {
    this.getPokeNames(2000, 0).then(response => {
      this.allPokemonsData = response.results.map(el => el.name)
    })
  }

  @action setPageData = () => {
    store.getPageData().then(resp => {
      this.totalPage = resp.count
    })
  }

  @action setActivePage = (page) => {
    this.activePage = page
  }

  getPokeImages = (pokeID) => `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

}        


const store = new Store()
export default store