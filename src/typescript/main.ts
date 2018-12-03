// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// // every方法
// const everys = (t: number, arr: number[]) => {
//     let b = true;
//     for (const n of arr) {
//         if (n < t) {
//             b = false;
//         }
//         return b;
//     }
// };
// const every = <T>(arr: T[], fn: any) => {
//     for (const n of arr) {
//         const t = fn(n);
//         if (!t) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(every<number>(arr, function(value) {
//     return value > 3;
// }));

// // some方法
// const somes = (t: number, arr: number[]) => {
//     let b = false;
//     for (const n of arr) {
//         if (n > t) {
//             b = true;
//         }
//     }
//     return b;
// };
// console.log(somes(10, arr));

// // entries方法

// const arrEN: string[] = ["a", "b", "c"];

// const entriess = (arry: string[]) => {
//     const obj: object = {};
//     for (const index in arry) {
//         const arr: string[] = [];
//         arr.push(index);
//         arr.push(arry[index]);
//         obj[index] = arr;
//     }
//     return obj;
// };
// console.log(entriess(arrEN));

// // find方法

// const finds = (n: number, arr: number[]) => {
//     let x: string | number = "undefined";
//     for (const t of arr) {
//         if (t > n) {
//             return x = t;
//         }
//     }
//     return x;
// };
// console.log(finds(5, arr));

// // map方法
// const maps = (arr, fn) => {
//     const a = [];
//     for (const index in arr) {
//         const s = fn(arr[index], index, arr);
//         if (s != "undefined") {
//             a.push(s);
//         }
//     }
//     return a;
// };
// const ss = maps(arr, function(value) {
//     return value * 2;
// });
// console.log(ss);

// // filter方法
// const filters = (arr, fn) => {
//     const a = [];
//     for (const index in arr) {
//         const s = fn(arr[index], index, arr);
//         if (s != "undefined") {
//             a.push(s);
//         }
//     }
//     return a;
// };
// const tt = filters(arr, function(value) {
//     let l = null;
//     if (value > 3) {
//         l = value;
//     } else {
//         l = "undefined";
//     }
//     return l;
// });
// console.log(tt);

// // fill方法

// const fills = (arr, str, start, end) => {
//     for (const index in arr) {
//         if (index > start) {
//             arr[index] = str;
//             if (index == end) {
//                 arr[index] = arr[index];
//             }
//         }
//     }
//     return arr;
// };
// console.log(fills(arr, 0, 2, 6));

// // findindex方法
// const findindexs = (arr, age) => {
//     let i = null;
//     for (const index in arr) {
//         if (arr[index] == age) {
//             i = index;
//         }
//     }
//     return i;
// };
// console.log(findindexs(arr, 5));

// // join方法

// const joins = (arr) => {
//     let str = "";
//     for (const index in arr) {
//         if (index < arr.length) {
//             str += arr[index] + ",";
//         }
//     }
//     str = str.substr(0, str.length - 1);
//     return str;
// };

// console.log(joins(arr));
// export {
//     finds,
//     somes,
//     everys,
//     entriess,
//     maps,
//     filters,
//     fills,
//     findindexs,
//     joins,
// };
export default class Ccc {
    private firstName: string;
    private lastname: string;
    private last = "wucheng";
}
