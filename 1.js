let countries  = ['Belarus', 'Belgium', 'Bulgaria'];
let parent = document.querySelector('#parent');
let input = document.querySelector('#elem');
let list = document.querySelector('#list');




 function loadData(data, element){
    if(data){
        element.innerHTML = '';
        let innerElement = '';
        data.forEach((item) =>{
            innerElement += `
            <li>${item}</li>`;
});

element.innerHTML =  innerElement; 

}}
  
    
    function filterData(data, searchText){
        return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()))
    }
 

input.addEventListener('input', ()=>{
        const fileteredData = filterData(countries, input.value);
        loadData(fileteredData, list)
    })

list.addEventListener('click', event =>{
    input.value = event.target.innerHTML;
    list.classList.add('hide');
})  



// input.addEventListener('input', ()=>{
 
//     if (input.value.startsWith('B')) {
// let li1 = document.createElement('li');
//  let li2 = document.createElement('li');
//  let li3 = document.createElement('li');
// 		li1.textContent = arr[0];
//         li2.textContent = arr[1];
//         li3.textContent = arr[2];
//         parent.append(li1);
//         parent.append(li2);
//         parent.append(li3);
  
//         return true;
// 	} if (input.value.startsWith('Be')) { 
//         li1.remove();
//         li2.remove();
//     }
    
    
//     else {
// 		return false;
// 	}
//  })