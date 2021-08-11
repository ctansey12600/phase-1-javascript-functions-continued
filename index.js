function saturdayFun(activity){
   if(typeof activity === 'string') {
       return `This Saturday, I want to ${activity}!`
   }else{
       return `This Saturday, I want to roller-skate!`
   }
}

function mondayWork(activity){
    if(typeof activity === 'string'){
        return `This Monday, I will ${activity}.`
    }else{
        return `This Monday, I will go to the office.`
    }
}

function wrapAdjective(adjective){
    function youAre(){
    if (typeof adjective === 'string'){
        return `You are ${adjective}.`
    }else{
          return `You are special.`
    }
    }
}