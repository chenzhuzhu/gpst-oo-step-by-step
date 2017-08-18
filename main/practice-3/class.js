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
        this.teacher;


    }

    appendMember(student){
        this.member.push(student.name)
        if (this.teacher) {
            this.teacher.notifyStudentAppended(`${student.name} has joined Class ${this.num}`)
        }



    }

    assignLeader(student){
        this.leader = student.name;

        if(this.teacher){
            this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.num}`);
        }

        let finded=find(this.member,student.name)
        if ((this.leader===student.name)&&(finded)){
            return 'Assign team leader successfully.'
        }else if(finded===false){
            return 'It is not one of us.'
        }
    }

}