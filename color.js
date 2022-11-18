//№1 ⊗jsPrGChCTF
// let rows = 3;
// let cols = 3;
// let field = document.querySelector('#field');
// for(let i = 0; i <3; i++){
// let tr = document.createElement('tr');
// for(let i = 0; i <3; i++){

// let td = document.createElement('td');
// tr.append(td);
// }

// field.append(tr);
// }

//№1 №2 ⊗jsPrGChCCDC
// let field = document.querySelector('#field');

// let colors = ['red', 'green', 'blue'];
// function createTable(){
// for(let i = 0; i <3; i++){
// let tr = document.createElement('tr');
// for(let i = 0; i <3; i++){

// let td = document.createElement('td');
// td.classList.add(getColor())
// tr.append(td);
// }

// field.append(tr);
// }}

// function getColor(){
//     return colors[getRandom(0, 4)]
// }

// createTable()
// function getRandom(min, max){
//     return Math.floor(Math.random()* (max-min - 1)) + min;
// }
// let tds = document.querySelectorAll('td');

// tds.forEach(function(item)
// {item.onclick = function()
// {item.classList.add(getNext(colors, item.className));
// };
// });

// //?console.log(getNext(colors, 'blue'))


//  function getNext(arr, num){
//     let i = arr.indexOf(num)  ;
//   if(i == arr.length-1){
//        i = -1;
//     }
//   return arr[i+1];
//  }

//№1 ⊗jsPrGChCGV

let field = document.querySelector('#field');

let parent = document.querySelector('#parent');
let parentSpan = document.querySelector('#span');
let colors = ['red', 'green', 'blue'];

function createTable(){
for(let i = 0; i <3; i++){
let tr = document.createElement('tr');
for(let i = 0; i <3; i++){

let td = document.createElement('td');
td.classList.add(getRandomColor())
tr.append(td);
}

field.append(tr);
}}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

let i = 0;
let span = document.createElement('span');
parentSpan.append(span);
createTable();

function getRandom(min, max){
    return Math.floor(Math.random()* (max-min - 1)) + min;
}
// let tds = document.querySelectorAll('td');

let cells = document.querySelectorAll('td');
cells.forEach(function(item)
{item.onclick = function(event)
{i++;
span.textContent = `Done ${i} tap in game`;
let numItem = colors.indexOf(event.target.className);
 event.target.classList.replace(event.target.className, getNext(colors, numItem));

 if (isVictory(event.target)) {
    alert('You win!!!'); 
}else {
    return
}


};
});


function getNext(arr, num){
if(num === 2){
return arr[0];
}else
{ return arr[num+1]; 
}}  

function isVictory(item) {
	if(cells[0].className ===  item.className &&
        cells[1].className === item.className &&
        cells[2].className === item.className &&
        cells[3].className === item.className &&
        cells[4].className === item.className &&
        cells[5].className === item.className &&
        cells[6].className === item.className &&
        cells[7].className === item.className &&
        cells[8].className === item.className)  {
        return true;
      
      }else{ 
          
      return false
}}




// console.log(getNext(colors, 2))






// next.addEventListener('click', function(event) {
// 	i++; 
//     if(i === arr.length){
//         i = 0;
//     }
//     slider.setAttribute('src', texts[i]);
//     event.preventDefault();
 
// });




//  function getNext(arr, string){
//    let num = arr.indexOf(string);         
//   if(num >= 0 && num < arr.length){
//         return arr[num+1];   
//     }else if(num === 2){
//           console.log('!') 
//         return arr[0];
      
//      } 

//     }







 //??№1 ⊗jsPrGChCMNSh