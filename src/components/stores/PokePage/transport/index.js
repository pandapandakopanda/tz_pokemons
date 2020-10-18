import { API } from '../../API'

export function getPokemonData( id ){
  return API.get(`/pokemon/${id}`).then( response => {
    return response
  })
}

export function getAbilitiesData( id ) {
  return API.get(`/ability/${id}`).then( response => {
    return response
  })
}