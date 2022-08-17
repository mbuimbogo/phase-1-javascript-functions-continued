// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
    };
    saturdayFun("roller-skate");
    saturdayFun("bathe my dog")

    const mondayWork = function (work= "go to the office") {
    return `This Monday, I will ${work}.`;
    }
    mondayWork();

   function wrapAdjective(adject){
    return function (inner){
        return `You are ${adject}${inner}${adject}!`;
    }
   }
   wrapAdjective('*')('a hard worker')
   wrapAdjective('||') ('a dedicated programmer')
