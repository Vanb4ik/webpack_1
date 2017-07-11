
import React from "react";
import styles from"./Element.scss"


const Element = React.createClass({
    setImg1:function () {
        return this.props.flagTodo
            ?`glyphicon glyphicon-ok ${styles.icon_align}`:`${styles.not_completed}`;
    },
    setStyleTextContent:function () {
        return this.props.flagTodo
            ? `text_content ${styles.align} col-xs-10`:`${styles.text_content} col-xs-10`;
    },
    render:function () {
        return (
            <li className="row">
                <div  className={`${styles.images1_content} col-xs-1`}
                      onClick={this.props.selectedItem}>
                    <i className={this.setImg1()}></i>
                </div>

                <div className={this.setStyleTextContent()}><div>{this.props.children}</div></div>

                <div className={`${styles.images2_content} col-xs-1`} onClick={this.props.onDelete}>
                    <i className={`glyphicon glyphicon-remove ${styles.onDeleteStyles}`}></i>
                </div>
            </li>
        )
    }
});

export default Element;