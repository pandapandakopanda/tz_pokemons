export const cName = (str) => {
  const name = str[0].toUpperCase() + str.slice(1, str.length)
  return name
}