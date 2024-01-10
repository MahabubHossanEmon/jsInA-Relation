console.log('this is separate js filr');
// directly set on HTML element
//<button onclick="document.body.style.backgroundColor='red'">background</button>



//option2:add onclick function 
function makeYellow(){
    document.body.style.backgroundColor='yellow'
}


//option2:
const makeBlueButton=document.getElementById('make-blue');

makeBlueButton.onclick=makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}


// option 3 Another
const makePurple=document.getElementById('make-purple');
makePurple.onclick= function purpleColor(){
    document.body.style.backgroundColor='purple';
}

//option 4 normal
const makeGoldenButton=document.getElementById('make-orange');
       makeGoldenButton.addEventListener('click',function makeOrange(){
        document.body.style.backgroundColor='orange';
       })

//option 4 final

document.getElementById('make-green').addEventListener('click',function(){
    document.body.style.backgroundColor='green';
   })