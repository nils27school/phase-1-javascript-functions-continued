
function saturdayFun(action1="roller-skate") {
    return(`This Saturday, I want to ${action1}!`);
}

function mondayWork(action2='go to the office') {
    return(`This Monday, I will ${action2}.`)
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }