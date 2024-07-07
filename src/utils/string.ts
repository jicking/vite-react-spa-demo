export const toPascalCase = (str: string): string => {
  return str.replace(/\w+/g, (w) => {
    return w[0].toUpperCase() + w.slice(1).toLowerCase()
  })
}
