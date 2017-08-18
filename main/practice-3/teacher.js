const Person = require('./person');

module.exports = class Teacher extends Person{

    constructor(name,age,clazzes){
        super(name,age);
        this.clazzes = clazzes;
    }

    introduce(){
        return super.introduce()+' I am a Teacher.'+this.getClass()
    }

    getClass(){
        if(this.clazzes.length ===0){
            return ' I teach No Class.'
        }else{
            let result =[];
            this.clazzes.map((item)=>{
                result.push(item.num)
            })
            return ' I teach Class '+result.join()+'.'
        }
    }

    isTeaching(){
        for(let item of this.clazzes){
            if(item.member.length!=0){
                return true
            }
        }
        return false

    }

}