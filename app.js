// const endDate=" 2 March 2025 3:00 PM";

// document.querySelector('#end-date').innerText= endDate;
// const input= document.querySelectorAll('input')


// function clock(){

//     const end = new Date(endDate);
//     const now = new Date();
//     const diff= (end-now)/1000;
//     if(diff<0) return;
//     // console.log(diff)
// input[0].value=Math.floor(diff/3600/24);
// input[1].value=Math.floor(diff/3600)%24;
// input[2].value=Math.floor(diff/60)%60;
// input[3].value=Math.floor(diff)%60
// }
// setInterval(clock, 1000);

const endDate = "20 March 2025 3:00 PM"
const input = document.querySelector("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    console.log(diff)
    input[0].value=Math.floor(diff/3600/24)
    input[0].value=Math.floor(diff/3600/24)
}