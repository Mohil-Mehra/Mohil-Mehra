
var array = [
    { team: 'CSK', color: "yellow" },
    { team: "RCB", color: 'red' },
    { team: "MI", color: "blue" },
    { team: "SRH", color: "orange" },
    { team: "KKR", color: "purple" }
];

var btn = document.querySelector("button");
var winner = document.querySelector("h5");
var body = document.querySelector("body");

// btn.addEventListener("click", function() {
//     var random = Math.floor(Math.random() * array.length);
//     var selectedTeam = array[random];

//     winner.innerHTML = selectedTeam.team;

  
//     body.style.backgroundColor = selectedTeam.color;
// });

//  by  for each

btn.addEventListener("click", function(){
    var random = Math.floor(Math.random()*array.length)
    var selectedTeam = array[random];


    winner.innerHTML = selectedTeam.team;
    body.style.backgroundColor = selectedTeam.color;

       
    var cont="";
    array.forEach(function(value){
        cont +=`<div class="main flex justify-center items-center w-[100vw] h-[100vh] bg-[${value.color}]">
        <div class="bg-[grey] p-[1vw] pl-[3vw] pr-[3vw] rounded-[10px] ">
            ${value.team}

        </div>

    </div>`
document.querySelector(".mohi").innerHTML=cont;
    })
})







    

    

//     // cont +=`<div class="main flex justify-center items-center w-[100vw] h-[100vh] bg-[${array.color}]">
//     //     <div class="bg-[grey] p-[1vw] pl-[3vw] pr-[3vw] rounded-[10px] ">
//     //         ${array.team}

//     //     </div>

//     // </div>`




