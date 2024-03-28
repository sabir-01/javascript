
// var image = document.getElementById("spider");
// var currentTop = 0;

// var right = 0;
// var leftjin = 0;
// console.log(right);
// document.addEventListener('keydown', function (event) {
//     console.log(event.key);
//     if (event.key === 'w' || event.key === 'W') {
//         image.style.left = (right += 25) + 'px';

//     }
//     else if (event.key === 'ArrowRight') {
//         image.style.left = (right += 25) + 'px';

//     }
//     else if (event.key === 'ArrowDown') {
//         image.style.width = "200px"
//         image.style.top = (right += 50) + 'px';

//     }
//     else if (event.key === 'ArrowLeft') {
//         image.style.left = (right -= 5) + 'px';
//     }
//     else if (event.key === 'ArrowDown') {
//         image.style.top = (right += 5) + 'px';
//     }
//     else if (event.key === 'ArrowUp') {
//         image.style.top = (right -= 5) + 'px';
//     }
// });
var image = document.getElementById("spider");

var right = 0;
var leftjin = 0;
document.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key === 'w' || event.key === 'W') {
        if (right + 25 <= window.innerWidth - image.offsetWidth) {
            image.style.left = (right += 25) + 'px';
        }
    }
    else if (event.key === 'ArrowRight') {
        if (right + 25 <= window.innerWidth - image.offsetWidth) {
            image.style.left = (right += 15) + 'px';
        }
    }
    else if (event.key === 'ArrowDown') {
        if (right + 50 <= window.innerHeight - image.offsetHeight) {
            image.style.width = "200px"
            image.style.top = (right += 50) + 'px';
        }
    }
    else if (event.key === 'ArrowLeft') {
        if (right - 5 >= 0) {
            image.style.left = (right -= 5) + 'px';
        }
    }
    else if (event.key === 'ArrowDown') {
        if (right + 5 <= window.innerHeight - image.offsetHeight) {
            image.style.top = (right += 5) + 'px';
        }
    }
    else if (event.key === 'ArrowUp') {
        if (right - 5 <= 0) {
            image.style.top = (right+= 5) + 'px';
        }
    }
});
