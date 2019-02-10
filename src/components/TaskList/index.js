import React from 'react';
import {bindActionCreators} from "redux";
import {doneTask} from "../../store/actions";
import {connect} from "react-redux";

export const TaskList = (props) => {

    const {tasks, setTaskDone} = props;

    return (
        <ul>
            {tasks.map((el, index) => (
                <li key={index}>
                    {el.name}
                    {
                        el.done?"":<button onClick={()=> setTaskDone(index)}>Done</button>
                    }
                    <button onClick={onRemoveHandler}>Remove</button>
                </li>
            ))}
        </ul>
    )
};

const onDoneHandler = () => {
    console.log("onDoneHandler")
};

const onRemoveHandler = () => {
    console.log("onRemoveHandler")
};

const mapStateToProps = state => ({...state});
const mapActionToProps = dispatch =>{
    return {
        setTaskDone:task=>dispatch(doneTask(task))
    }
};
export default connect(mapStateToProps,mapActionToProps)(TaskList);