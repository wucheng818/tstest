var arr: number[] = [1,2,3,4,5,6,7,8]
// every方法
let everys=(t:number)=>{
    var b=true
    for(let n of arr){
        if(n<t){
            b = false
        }
        return b
    }
}

console.log(everys(0))

// some方法
let somes=(t:number)=>{
    var b=false
    for(let n of arr){
        if(n>t){
            b = true
        }
    }
    return b
}
console.log(somes(10))

//entries方法

var arrEN: string[] = ['a','b','c']

let entriess=(arry:string[])=>{
    var obj:object = {}
    for(let index in arry){
        let arr:string[]=[];
        arr.push(index)
        arr.push(arry[index])
        obj[index]=arr
    }
    return obj
}
console.log(entriess(arrEN))

// find方法

let finds=(n:number)=>{
    var x:string | number='undefined'
    for(let t of arr){
        if(t>n){
            return x=t      
        }
    }
    return x
}

console.log(finds(5))

// map方法

class ExtendFin extends Array {
    css
}
