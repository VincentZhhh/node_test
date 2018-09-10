function test(t){
  return new Promise((reslove, reject)=>{
    
    reject(t-1)
    reslove(t+1)
}
)
}

test(1).then((x)=>{console.log(x+1);return(x)},(x)=>{console.log(x);
return new Promise(function (reslove, reject){
reslove(x)
}
)
})
.then((x)=>{console.log(x+1);return(x)})
.then((x)=>{console.log(x+3);throw new Error('something wrong')})
.catch((err)=>console.log('oh no' + err))