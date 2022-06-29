const tutorial = require('./tutorial')
const EventEmitter = require('events')
const ev = new EventEmitter()

ev.on('tutorial',(one,two)=>{
    console.log("Multiplied result is : " + tutorial.mul(one,two))
});

ev.emit('tutorial',10,2)

class firstName extends EventEmitter{
    constructor(name){
        super();
        this.fname = name
    }
    first_name(){
        return this.fname
    }
}

class lastName extends EventEmitter{
    constructor(name){
        super();
        this.lname = name
    }
    last_name(){
        return this.lname
    }
}

const callFirstName = new firstName('Enrique')
const callLastName = new lastName('Clioas')

callFirstName.on('firstname',()=>{
    console.log("First Name is : ",callFirstName.first_name());
});

callLastName.on('lastname',()=>{
    console.log("Last Name is : ",callLastName.last_name());
});

callFirstName.emit('firstname');
callLastName.emit('lastname');




