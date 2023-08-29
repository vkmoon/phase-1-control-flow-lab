function scuberGreetingForFeet(ftCost){
  if (ftCost <= 400){
    return 'This one is on me!'
  }
  else if (ftCost > 400 && ftCost < 2000){
    return 'That will be twenty bucks.'
  }
  else if (ftCost > 2000 && ftCost < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (ftCost > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(cityCheck){
  return cityCheck === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    break;
    default:
      return 'Bye.'
  }
}