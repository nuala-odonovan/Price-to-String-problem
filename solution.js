const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}
const tens = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}
const teens = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
}

//helper function to convert integers to string value
function numToString(value){
  if(value < 10) return ones[value]
  if(value > 10 && value < 20 ) return teens[value]
  if(value % 10 === 0 ) return tens[value]
  else return tens[value - (value%10)] +  " " + ones[value%10]
}

function priceToString(value) {
  let dollars = parseInt(value)
  let cents = parseInt((value % 1).toFixed(2) * 100)
  
function priceToString(value) {
  let dollars = parseInt(value)
  let cents = parseInt((value % 1).toFixed(2) * 100)
  
  if(dollars===0) return `${numToString(cents)} ${cents > 1 ? 'cents' : 'cent'}`
  else if(cents===0) return `${numToString(dollars)} ${dollars > 1 ? 'dollars' : 'dollar'}`
  else return `${numToString(dollars)} ${dollars > 1 ? 'dollars' : 'dollar'} and ${numToString(cents)} ${cents > 1 ? 'cents' : 'cent'}`
}

}
