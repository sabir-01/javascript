let p = new Promise(function(resolve,reject){
    document.write("sabr rakhoo thora")
setTimeout( ()=>{

    let a=1+4;
    if(a==3){
        resolve("I am a Resolve  sucess");
    }
    else{
        reject("I am a reject  Fail");
    }
    
},3000);
})

p.then((msg) => {
    document.write(msg + "<h1> completed </h1>");
  }).catch((msg) => {
    document.write(msg + "<h1>Not completed </h1>");
  });
  