function scoreLetter(input){
  if(input > 85){
    return 'A'
  } else if(input > 70){
    return 'B'
  } else if(input > 55){
    return 'C'
  } else if(input>=1 && input <= 55){
    return 'E'
  } else {
    return 'empty'
  }
}

module.exports = scoreLetter;
