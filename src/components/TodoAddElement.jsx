import React from "react";
import styles from "./TodoAddElement.scss"

export const TodoAddElement= React.createClass({
    getInitialState:function () {
        return{
            text:"",
            flagTodo:false
        }
    },

    handleTextChange:function (e) {             // metod obnovlaje stan polja text
        this.setState({text:e.target.value});
        /*console.log(e.target.value);*/
    },

    handleTodoAdd:function () {
        if(this.state.text.length>0){
            var newNote = {
                text: this.state.text,
                flagTodo:this.state.flagTodo,
                id: Date.now()
            };
            console.log("handleTodoAdd");
            this.props.onTodoAdd(newNote);
        }



        this.setState({ text: '' });

    },

    render:function () {
        return (
            <div>
                 <textarea name="name"
                           rows={2}
                           placeholder="тут писати завдання"
                           className={styles.textarea}
                           value={this.state.text}
                           onChange={this.handleTextChange}
                 >
               </textarea>

                <button onClick ={this.handleTodoAdd}>Add</button>
            </div>

        )
    }
});

