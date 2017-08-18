const Person = require('./person');
const Class = require('./class')

module.exports = class Teacher extends Person{
    constructor(name,age,clazzes){
        super(name,age);
        this.clazzes = clazzes;
    }
    introduce(){
        return super.introduce()+' I am a Teacher. I teach '+this.getClass()+'.'
    }
    getClass(){
       if (this.clazzes.length == 0){
           return 'No Class'
       }else{
           let num_arr = []
           this.clazzes.map((item) =>{
               num_arr.push(item.num)
           })
           return 'Class '+num_arr.join()
       }
    }
}