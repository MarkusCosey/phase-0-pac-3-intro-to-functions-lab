function shout(String) {
return String.toUpperCase();
} 

function whisper(string) {
return string.toLowerCase();
}

function logShout(string) {
return console.log(string.toUpperCase())
}

function logWhisper(string) {
return console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase()===string){
        return "I can't hear you!"
    }
    if (string.toUpperCase()===string){
        return "YES INDEED!"
    }
    if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
}