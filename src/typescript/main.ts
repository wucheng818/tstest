const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// every方法
const everys= ( t : number, arr : number[] )=> {
    var b=true
    for(const n of arr){
        if(n<t){
            b = false
        }
        return b
    }
}

console.log(everys(0,arr))

// some方法
const somes=(t:number,arr:number[])=>{
    var b=false
    for(let n of arr){
        if(n>t){
            b = true
        }
    }
    return b
}
console.log(somes(10,arr))

//entries方法

const arrEN: string[] = ['a','b','c']

const entriess=(arry:string[])=>{
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

const finds=(n:number,arr:number[])=>{
    var x:string | number='undefined'
    for(let t of arr){
        if(t>n){
            return x=t
        }
    }
    return x
}
console.log(finds(5,arr));


// map方法
const maps=(arr,fn)=>{
    var a=[]
    for(let index in arr){
        let s=fn(arr[index],index,arr)
        if(s!='undefined'){
            a.push(s)
        }
    }
    return a
}
let ss=maps(arr,function(value){
    return value*2
})
console.log(ss)


// filter方法
const filters=(arr,fn)=>{
    var a=[]
    for(let index in arr){
        let s=fn(arr[index],index,arr)
        if(s!='undefined'){
            a.push(s)
        }
    }
    return a
}
let tt=filters(arr,function(value){
    var l=null;
    if(value>3){
        l=value
    }else{
        l="undefined"
    }
    return l;
})
console.log(tt)

//fill方法

const fills=(arr,str,start,end)=>{
    for(let index in arr){
        if(index>start){
            arr[index]=str;
            if(index==end){
                arr[index]=arr[index]
            }
        }
    }
    return arr
}
console.log(fills(arr,0,2,6))
export {
    finds,
    somes,
    everys,
    entriess,
    maps,
    filters,
    fills
}
