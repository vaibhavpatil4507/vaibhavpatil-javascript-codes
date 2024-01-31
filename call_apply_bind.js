var obj={
    sgst:2.5,
    cgst:2.5,
    bill:function(product1,product2){
        let sum=(product1+product2)+((product1+product2)*((this.sgst+this.cgst)/100));
        console.log(sum);
    }
}

obj.bill(150,250);

var updateGSTrate={
    sgst:10,
    cgst:10
}

//1)cal() method ,Here we can pass multiple arguments
obj.bill.call(updateGSTrate,150,250);


//2)apply() method,here only two arguments first one need function and second one is array which are compulsory
obj.bill.apply(updateGSTrate,[150,250]);

//3)bind
var foo=obj.bill.bind(updateGSTrate,100,100);
foo();
