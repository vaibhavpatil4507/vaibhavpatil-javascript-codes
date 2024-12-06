
function modifyArray(arr,callback){
    arr.push(100);

    console.log(arr);

    callback();

}

let arr=[100,200,300,400];

modifyArray(arr,()=>{
    console.log("I am callback function")
});