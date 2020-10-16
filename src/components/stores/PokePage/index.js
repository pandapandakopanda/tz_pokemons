import { observable, action, computed } from 'mobx'
import { getPokemonData } from './transport'


export default class pokeStore{
  
  @observable id = null
  @observable isFetching = false 

  @computed get data(){
    return getPokemonData(this.id).then(resp => resp.data)
  }


  fetchDataIfNeeded( id ){
    if( this.id !== id){
      console.log('id: ', id);
      console.log('this.id: ', this.id);
      console.log('this.id !== id: ', this.id !== id);
      this.fetch(id)
    } else return
  }
  
  @action fetch( id ){
    this.setFullData(id)
    this.setId(id)
    this.isFetching = true
  }

  @action setFullData =(id) => {
    getPokemonData(id).then( response => {
      this.fullData = response
      this.isFetching = false
    } )
  }

  @action setId = (id) => {
    this.id = id
  }

}