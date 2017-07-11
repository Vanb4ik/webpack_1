import React from "react";
import  Element  from "./Element";

const TodoList = React.createClass({

    render:function () {
        var onTodoElelmentDelete = this.props.onTodoElelmentDelete;
        var onTodoElelmentSelect = this.props.onTodoElelmentSelect;
        return (
            <ul className="media-list" ref="grid">
                {
                    this.props.notes.map(function (note) {
                        return (
                            <Element key={note.id}
                                      onDelete ={onTodoElelmentDelete.bind(null,note)}
                                      selectedItem ={onTodoElelmentSelect.bind(null,note)}
                                      flagTodo = {note.flagTodo}
                            >         {note.text}
                            </Element>
                        );
                    })
                }
            </ul>
        )
    }
});

export default TodoList;