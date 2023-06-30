let string = "";
let buttons = document.querySelectorAll('.button');
let buttonss = document.querySelectorAll('.b');

Array.from(buttonss).forEach((button)=>{ 
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
     document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = " ";
     document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'X'){
      //console.log(string.slice(0, -1 + string.length));
       let result = string.slice(0, -1,string.length);
       document.querySelector('input').value = result;
       //console.log(string.slice(0, -1))
       //document.querySelector('input').value = string;
     }
    else{console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
        }
  })
  
})
Array.from(buttons).forEach((button)=>{ 
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
     document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'X'){
     //console.log(string.slice(0, -1 + string.length));
      let result = string.slice(0, -1,string.length);
      document.querySelector('input').value = result;
      //console.log(string.slice(0, -1))
      //document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = " ";
     document.querySelector('input').value = string;
    }
    else{console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
        }
  })
  
})

