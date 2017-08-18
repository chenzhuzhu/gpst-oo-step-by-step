// Write your code here
"use strict";
function find(collection,element){
    for(let item of collection){
        if (item === element){
            return true
        }
    }
    return false

}

module.exports = class Class {
    constructor(num){
        this.num =num;
        this.member=[];
        this.leader;
    }

    appendMember(student){
        this.member.push(student.name)

    }

    assignLeader(student){
        this.leader = student.name
        let finded=find(this.member,student.name)
        if ((this.leader===student.name)&&(finded)){
            return 'Assign team leader successfully.'
        }else if(finded===false){
            return 'It is not one of us.'
        }
    }
    toHaveBeenCalledWith(){

    }
}