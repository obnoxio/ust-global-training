/* eslint-disable eqeqeq */

export function isEmpty(obj = {}) {
    return Object.keys(obj).length === 0
  }
  
  export function isString(value) {
    return typeof value === 'string' || value instanceof String
  }
  
  export function isNumber(value) {
    return typeof value == 'number' && !isNaN(value)
  }
  export function isNil(value) {
    return typeof value === 'undefined' || value === null
  }
  
  export function isDateString(value) {
    if (!isString(value)) return false
  
    return value.match(/^\d{2}-\d{2}-\d{4}$/)
  }
  
  export function convertDateString(value) {
    return value.substr(6, 4) + value.substr(3, 2) + value.substr(0, 2)
  }
export function filterRows(rows, filters) {
    if (isEmpty(filters)) return rows
  
    return rows.filter((row) => {
      return Object.keys(filters).every((accessor) => {
        const value = row[accessor]
        const searchValue = filters[accessor]
  
        if (isString(value)) {
          return toLower(value).includes(toLower(searchValue))
        }
        if (isNumber(value)) {
            return value == searchValue
          }
    
          return false
        })
      })
}
