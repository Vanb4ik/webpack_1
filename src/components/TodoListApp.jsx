import React from "react";

import  {TodoAddElement}  from "./TodoAddElement";
import  TodoList        from "./TodoList";



var  OBJ = [
    {
        id:1,
        flagTodo:false,
        text:"Darth Vader",
    }
    ,
    {
        id:2,
        flagTodo:false,
        text:"Titca",
    }
    ,
    {
        id:3,
        flagTodo:true,
        text:"Chubaca",
    }];

const TodoListApp = React.createClass({
    getInitialState:function () {
        return {
            notes:OBJ
        }
    },

    componentDidUpdate:function () {
        this._updateLocalStorege()
    },

    componentDidMount:function () { //1
        var localNotes = JSON.parse(localStorage.getItem("todos"));
        if (localNotes){
            OBJ=localNotes;
            this.setState({notes:OBJ});
        }
    },

    handleTodoAdd:function (newNote) {
        var newNotes = this.state.notes.slice();    //створює копію масиву notes
        newNotes.unshift(newNote);                  // передає на початок масиву прийнятий обєкт
        OBJ=newNotes;
        this.setState({notes:OBJ});                 //і перевизиває новий масив
    },

    handleTodoDelete:function (todo) {

        var todoId = todo.id;
        var newNotes = OBJ.filter(function (note) {
            return note.id !=todoId;
        });
        OBJ = newNotes;
        this.setState({notes:OBJ})
    },

    handleTodoSelect:function (todo) {

        var todoId=todo.id;
        var tempMass = [];
        for(var i=0;i<OBJ.length;i++)
        {
            if (OBJ[i].id!=todoId){
                tempMass.push(OBJ[i])
            }
            else{
                OBJ[i].flagTodo=!OBJ[i].flagTodo;
                tempMass.push(OBJ[i]);
            }
        }
        /*console.log(tempMass);*/
        OBJ = tempMass;
        this.setState({notes:OBJ});
    },

    sortAllTodo:function () {
        var newNotes = OBJ.filter(function (note) {
            return note;
        });
        this.setState({notes:newNotes})
    },

    sortExectionTodo:function () {
        var todoFlag = false;
        var newNotes = OBJ.filter(function (note) {
            return note.flagTodo !=todoFlag;
        });
        this.setState({notes:newNotes})
    },

    sortNotExectionTodo:function () {
        var todoFlag = true;
        var newNotes = OBJ.filter(function (note) {
            return note.flagTodo !=todoFlag;
        });
        this.setState({notes:newNotes})
    },

    render:function () {
        return (
            <div>
                <TodoAddElement onTodoAdd = {this.handleTodoAdd}/>
                <TodoList notes = {this.state.notes}
                          onTodoElelmentDelete = {this.handleTodoDelete}
                          onTodoElelmentSelect = {this.handleTodoSelect}/>
                <button onClick={this.sortAllTodo}>All</button>
                <button onClick={this.sortExectionTodo}>Execution</button>
                <button onClick={this.sortNotExectionTodo}>No Execution</button>

            </div>
        );
    },

    _updateLocalStorege:function () {
        var todos = JSON.stringify(this.state.notes);
        localStorage.setItem("todos",todos);
        /*console.log(this.state.notes);*/
    }
});

export default TodoListApp;