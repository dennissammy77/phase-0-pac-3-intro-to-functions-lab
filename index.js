function shout(params) {
  return params.toUpperCase();
};

function whisper(params){
  return params.toLowerCase();
};

function logShout(params){
  console.log(params.toUpperCase());
};

function logWhisper(params){
  console.log(params.toLowerCase());
};

function sayHiToHeadphonedRoommate(params){
  if(params.toLowerCase() === params){
    return "I can\'t hear you!"
  }else if(params.toUpperCase() === params){
    return"YES INDEED!"
  }else if(params === "Let's have dinner together!"){
    return("I would love to!")
  }
}
