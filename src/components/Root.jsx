import React from "react";
import TodoListApp  from "./TodoListApp";

import styles from "./Root.scss";

const Root = () => (
    //contst Root = functions(){return <div>....  }
    <div className={styles.main_class}>
        <TodoListApp />
    </div>

);

export default Root;