import { observable, action } from 'mobx'
import { getPokemonData } from './transport'

export default class PokePage{
  @observable id = null
  @observable isFetching = false 

  fetchDataIfNeeded( id ){
    if( this.id !== id){
      this.fetch(id)
    }
  }

  @action fetch( id ){
    this.isFetching = true
    getPokemonData(id).then( response => {
      this.isFetching = false
    } )

  }
}