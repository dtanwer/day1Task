const myFun1=(arr)=>{
    return arr.filter((num)=>{
        return num>0;
    })
}
const myFun2=(arr)=>{
    var res=[];
   arr.forEach(element => {
        if(element>0)
        {
            res.push(element);
        }
   });

   return res;
}

var myarr=[1,2,3,-1,-5,0];
console.log(myFun2(myarr));