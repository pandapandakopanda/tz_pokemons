export const cName = (str) => {
  const name = str[0].toUpperCase() + str.slice(1, str.length)
  return name
}

export const pokeData = (name, weight, base_experience) => {
  const pokeDataObject = {
    name: cName(name),
    weight,
    base_experience
  }
  return pokeDataObject
}
export const abilityData = (name, generation, is_main_series ) => {
  const abilityDataObject = {
    name: (name) ? name : 'no name',
    generation: (generation) ? generation : 'dont have info',
    is_main_series: (is_main_series) ? 'yes' : 'no'
  }
  return abilityDataObject
}