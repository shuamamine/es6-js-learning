window.onload = function(){
    
    // constants
    const pi = 3.142;
    function calcArea(r){
        console.log("area :" + pi*r*r);
    }

    calcArea(5);

    // let keyword
    var x=10;
    if(x>5){
        let x=5;
        console.log("inside :"+x);
    }
    console.log("outside :"+x);
    var items= document.getElementsByTagName("li");
    for(var i=0;i<items.length;i++){
        items[i].onclick = function(){
            console.log(i);
        }
    }

    //default parameters 
    function log(num=10){
        console.log(num);
    }
    log();
    log(30);
    function func1(name,roll,age){
        console.log("My name is" + name + "and my roll is" + roll + " and my age is" + age);
    }
    func1("Taylor",13,35);

    // Spread Operator
    var meats=["ham","salami", "bacon"];
    console.log(...meats);

    var num1 = [3,5,7];
    function addNum(a,b,c){
       console.log(a+b+c); 
    }
    addNum(...num1);

    // template strings
    var temp=`hello, my name is Taylor`;
    console.log(temp);

    function func1(name,age){
        console.log( `My name is ${name} amd my age is ${age}` );
    }
    func1("Taylor",35);

    // object literals
    var name ="Taylor";
    var job="Singer";
    var person ={
        name,job,
        chop(x){
            console.log(`you chopped the enemy ${x} times`);
        }
    };
    console.log(person.name);
    console.log(person.chop(5));

    // new string methods
    var str="Hello";
    console.log(str.repeat(3)); 
    console.log(str.startsWith("H"));
    console.log(str.endsWith("lo"));
    console.log(str.includes("el"));

    var greetings = () => {
        console.log("Happy New Year!");
    }
    greetings();

    // var greeting = (name) => console.log(`${name} says Happy New Year!`);
    // greetings("Dua");

    var obj = {
        name:"Taylor",
        chop(x){
            var _this = this;
            window.setInterval(() => {
                if(x>0)
                {
                    console.log(this.name + " saysHappy New Year");
                    x--;
                }
            },1000)
        }
    };
    obj.chop(5);

    // Sets 
    var names= new Set();
    names.add("Taylor").add("Selena").add("Dua");
    console.log(names.has("Niall"));
    names.delete("Selena");
    names.clear();
    console.log(names);
    console.log(names.size);

    var set1 = new Set(arr); // array to set, getting rid of dupes
   
    // generators
    function* gen(){
        yield console.log("Apple");
        var y = yield console.log("Mango");
        console.log("Pineapple");
        return y;
    }
    var mygen = gen();
    mygen.next();
    mygen.next(10);
    mygen.next();
}