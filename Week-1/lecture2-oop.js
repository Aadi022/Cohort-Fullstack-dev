class Animal{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks;
    }
    speak(){
        console.log("Hi there"+ " "+this.speaks);
    }
    static myType(){     //Static functions are same for all objects in the class. They don't depend upon the object.Infact, several classes can have the same static funciton
        console.log("This is an Animal");
    }
}
let dog=new Animal("Oreo","4","JH");
console.log(dog.name);
console.log(dog.legcount);
console.log(dog.speaks);
dog.speak();
Animal.myType();  

