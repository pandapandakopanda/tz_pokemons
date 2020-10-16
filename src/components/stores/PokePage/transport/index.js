import { API } from '../../API'

export function getPokemonData( id ){
  return API.get(`/pokemon/${id}`).then( response => {
    return response
  })
}