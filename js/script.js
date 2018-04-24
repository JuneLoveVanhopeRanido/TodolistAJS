var app = angular.module('todoApp', []);
app.controller('MainController', function(){
    
    var ctr = this;
    ctr.tasklist = [];
    
    ctr.addTask = function( ){
        ctr.tasklist.push({
            desc: ctr.taskInput,
            done: false,
            edit:false
        
        }
                         );    
        ctr.taskInput = '';
    }
    
    ctr.delete = function(index){
        ctr.tasklist.splice(index,1);
    }
    
    ctr.clearAll = function(){
        ctr.tasklist = ctr.tasklist.filter(function(){
            return false;
        });
    }
    
    ctr.clearCompleted = function(){
        ctr.tasklist = ctr.tasklist.filter(function(element){
            if(element.done == true){
                return false;
            }
            else{
                return true;
            }
        });
    }
});