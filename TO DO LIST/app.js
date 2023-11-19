let input=document.getElementById("inp");
let text=document.querySelector(".text");
function add(){
    if(input.value==""){
alert("Enter task")
    }
    else{
        let newel=document.createElement("ul");
        newel.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newel);
        input.value="";
        newel.querySelector("i").addEventListener("click",remove);
        function remove(){
            newel.remove();
        }
    }
}
