// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBf-BP70s3nWOi8aiT0Jt9I0o-SlslqkmM",
    authDomain: "cbc-rockpaperscissors.firebaseapp.com",
    databaseURL: "https://cbc-rockpaperscissors.firebaseio.com",
    projectId: "cbc-rockpaperscissors",
    storageBucket: "",
    messagingSenderId: "1074168304695",
    appId: "1:1074168304695:web:33042fba5a7c711d"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
database = firebase.database();

// Intialize document Objects
const loginPOBtn = $("#infoPObtn");
const loginPTBtn = $("#infoPTbtn");
// const namePO =
// const namePT =

// const buttonsPO
// const buttonsPT

// const rockPO
// const rockPT
// const paperPO
// const paperPT
// const scissorPO
// const scissorPT

// const resultsPO
// const resultsPT

// //global changable variables
// let scorePO
// let scorePT


startPlayer = function(player){
    
    console.log(`${player} is logging in`)
    console.log($(`#name${player}`))
    $(`#name${player}`).text($(`#info${player}`).val().trim()).removeClass("hide")
    $(`#name${player}container`).removeClass("hide")
    $(`#grab${player}`).addClass("hide")
}


// Grab Player 1
loginPOBtn.on("click",(ele)=>{
    ele.preventDefault();
    name = $("#infoPO").val().trim()
    database.ref("/PO/").set(`{name:${name}, status: true}`)
    startPlayer("PO");
})
//Grab Player 2
loginPTBtn.on("click",(ele)=>{
    ele.preventDefault();
    name = $("#infoPT").val().trim()
    database.ref("/PT/").set(`{name:${name}, status: true}`)
    startPlayer("PT");
})


//Check to see if I have Both and Start Game


//Check Player 1 Push Button

//Check Player 2 Push Button

// Check who Won

//increment scores


