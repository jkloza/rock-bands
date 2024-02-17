  // Given an object {ticketType: totalCost}, calculate final cost of all keys in object
  export function calculateTotal(total) {
    let finalCost = 0
    // For each object in total, add and return
    for (const ticket in total) {
      finalCost += total[ticket]
    }
    return finalCost
  }

  // Given a text input, remove all spaces and check if 16 digit number
  export function checkCreditCardNumber(number) {
    const cardNum = parseInt(number.replaceAll(' ', ''))
    const reg = new RegExp('^[0-9]{16}$')
    // Validates that the given credit card number is formatted correctly 
    return reg.test(cardNum)
  }

  // Given a 
  export function cardNumberFormat(number, setValue) {
    let num = number
    // If there is a space already, find the last index of one and 
    if (number.lastIndexOf(' ') > 0) {
      const index = number.lastIndexOf(' ') + 1
      if (number.substring(index).length === 4 && number.length < 16) {
        num += ' '
      }
    } else {
      if (number.length === 4) {
        num += ' '
      }
    }
    return num

  }

  // Given a text input and a set form value num
  export function cardExpiryFormat(number, setValue) {
    let num = number
    // If there is a space already, find the last index of one and 
    if (number.length === 2) {
      num += '/'
    } 
    return num
  }