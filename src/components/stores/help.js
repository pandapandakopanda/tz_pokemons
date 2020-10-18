export const createId = (str) =>{
  const matchId = new RegExp('[0-9]', 'g') 
  return str.slice(str.length-6).match(matchId).join('')
  }

export const isNull = (data) => data === null