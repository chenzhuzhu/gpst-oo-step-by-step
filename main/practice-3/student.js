const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name,age,clazz){
        super(name,age);
        this.clazz=clazz;
    }

    introduce(){
        return super.introduce()+' I am a Student.'+this.joinClass()
    }

    joinClass(){
        for(let item of this.clazz.member){
            if ((this.name === this.clazz.leader)&&(this.name === item)){
                return ' I am Leader of Class '+this.clazz.num+'.'
            } else if(this.name ==item){
                return ' I am at Class '+this.clazz.num+'.'
            }
        }
        return " I haven't been allowed to join Class."
    }

}