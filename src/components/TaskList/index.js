import React from 'react';
import {bindActionCreators} from "redux";
import {doneTask, removeTask} from "../../store/actions";
import {connect} from "react-redux";

const TaskList = (props) => {

    const {tasks, setTaskDone, setTaskRemove} = props;

    return (
        <ul>
            {tasks.map((el, index) => (
                <li key={index}>
                    {el.name}
                    {
                        el.done?"":<button onClick={()=> setTaskDone(index)}>Done</button>
                    }
                    <button onClick={()=>setTaskRemove(index)}>Remove</button>
                </li>
            ))}
        </ul>
    )
};


const mapStateToProps = state => ({...state});
const mapActionToProps = dispatch =>{
    return {
        setTaskDone:task=>dispatch(doneTask(task)),
        setTaskRemove:task=>dispatch(removeTask(task))
    }
};
export default connect(mapStateToProps,mapActionToProps)(TaskList);
