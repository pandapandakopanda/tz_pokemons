import { API } from '../../API'

export function getPokemonData( id ){
  return API.get(`/pokemon/${id}`).then( response => {
    console.log('response: ', response);
    return response
  })
}