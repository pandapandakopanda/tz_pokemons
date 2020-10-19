import { observable, action } from 'mobx'
import { getPokemonData, getAbilitiesData } from './transport'
import { pokeData, abilityData } from  './transport/converter'


export default class pokeStore{
  
  @observable id = null
  @observable isFetching = false 
  @observable baseData = null
  @observable abilitiesData = null

  fetchDataIfNeeded( id ){
    if( this.id !== id){
      this.fetch(id)
    } else return
  }
  
  @action fetch( id ){
    this.isFetching = true
    getPokemonData(id).then( response => {
      this.setBaseData(response.data)
      getAbilitiesData(id).then(response => {
        this.setAbilitiesData(response.data)
      })
      this.isFetching = false
      this.setId(id)
    } )
  }

  @action setBaseData = (data) => {
    this.baseData = pokeData(data.name, data.weight, data.base_experience)
  }

  @action setAbilitiesData = (data) => {
    console.log('data: ', data);
    this.abilitiesData = abilityData(data.name, data.generation.name, data.is_main_series, data.flavor_text_entries)
  }

  @action setId = (id) => {
    this.id = id
  }

}