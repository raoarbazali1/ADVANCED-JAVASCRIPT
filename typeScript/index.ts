// step 1 download nodejs
// step 2 write => npm install -g typescript
// step 3 check version => tsc -v
// step 4 change location => cd C:\Users\raoar\OneDrive\Desktop\RAO\ADVANCED JAVASCRIPT  
// step 5 write code and run on command prompt =>tsc index.ts

export var std_name : string = "Rao";
var std_age : number = 21 ;
console.log(std_name);


function SUM (a: number, b: number){
    return a+ b;
}
SUM(20,40);


class car{
    drive(c_name:string, c_price:number){
        return c_name + " " + c_price;
    }
}
let car_obj = new car();
car_obj.drive("BMW",20000)



let student_name: string [] = ["Rao", "Ali", "Asim"]
let student_age: number [] = [20, 23, 40]
let students: any [] = ["Aqsa", 23, "Anum"]