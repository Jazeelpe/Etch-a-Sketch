const board = document.querySelector('.js-board');
const sizeValue = document.querySelector('.sizeValue');

function takeValue(){

    const value=prompt('Enter the grid value (not more than 64): ');
    if(value !== Number.isInteger()  && value >64)
    return;
    board.innerHTML='';
    updateSizeValue(value);
    board.style.gridTemplateColumns = `repeat(${value},1fr)`; 
        
    for(let i = 1; i<=value*value; i++){
    let div= document.createElement('div');
    div.classList.add('child');
    
    div.addEventListener('mouseover', changeBackground)
    board.appendChild(div);
    
    }

}




function clean()
{
    
    board.innerHTML='';
    sizeValue.innerHTML =''; 
}




function changeBackground(e){
    e.target.style.backgroundColor='black'

}


function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value} Grid`
  }


