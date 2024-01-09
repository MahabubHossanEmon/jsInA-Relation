// where to add
const placesList=document.getElementById('places-list');

//what to be added
const li=document.createElement('li');
li.innerText='pahar-toli bon';

// add the child
placesList.appendChild(li);


//where to add
const mainContainer=document.getElementById('main-container'); 

// what to be added
const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='borhani';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='rost';
ul.appendChild(li3);

const li4=document.createElement('li');
li4.innerText='kacchi';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);


// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML=`
<h1>My Dress Section</h1>
<ul>
<li>lingi</li>
<li>ganji</li>
<li>shari</li>
</ul>
`
mainContainer.appendChild(sectionDress);

