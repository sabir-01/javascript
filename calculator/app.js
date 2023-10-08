// let string="";
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>
// {
//     if(e.target.innerHTML=='='){

//         string=eval(string);
// document.querySelector('input').value=string;
    
//     }
//     else  if(e.target.innerHTML=='ac'){

//         string="";
// document.querySelector('input').value=string;
    
//     }
    
//     else{
//     console.log(e.target)
// string=string + e.target.innerHTML;
// document.querySelector('input').value=string;
// }

// })
// })
// let string = "";

// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML === '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         } else if (e.target.innerHTML === 'ac') {
//             string = "";
//             document.querySelector('input').value = string;
//         } else if (isOperator(e.target.innerHTML)) {
//             // Check if the last character is an operator before adding a new operator
//             if (!isOperator(string.charAt(string.length - 1))) {
//                 string = string + e.target.innerHTML;
//                 document.querySelector('input').value = string;
//             }
//         } else {
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     });
// });

// function isOperator(char) {
//     return ['+', '-', '*', '/'].includes(char);
// }


let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'ac') {
            string = "";
            document.querySelector('input').value = string;
        } else if (isOperator(e.target.innerHTML)) {
            // Check if the last character is an operator or a point before adding a new operator
            const lastChar = string.charAt(string.length - 1);
            if (lastChar !== '.' && !isOperator(lastChar)) {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        } else if (e.target.innerHTML === '.') {
            const lastChar = string.charAt(string.length - 1);
            if (lastChar !== '.' && !isOperator(lastChar)) {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

