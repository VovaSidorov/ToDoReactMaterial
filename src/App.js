import React from 'react';

import Header from "./Layouts";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

export default props =>(
            <div>
                <Header />
                <AddTask/>
                <TaskList tasks={props.tasks}/>
            </div>
);
