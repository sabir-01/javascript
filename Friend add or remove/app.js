var add = document.querySelector("#stranger");
var addfriend = document.querySelector("#add");
var remove = document.querySelector("#remove");
var flag = 0;
addfriend.addEventListener("click", function () {
    if (flag == 0) {
        add.innerHTML = "Friends";
        add.style.color = "White";
        add.style.background = "green";
        remove.addEventListener("click", function () {
            add.innerHTML = "Stranger";
            add.style.color = "White";
            add.style.background = "Red";
        })
    }
})

