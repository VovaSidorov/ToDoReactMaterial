import React from 'react';

import Header from "./Layouts";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskFilter from "./components/TaskFilter";

export default props =>(
            <div>
                <Header />
                <AddTask/>
                <TaskFilter/>
                <TaskList tasks={props.tasks}/>
            </div>
);
