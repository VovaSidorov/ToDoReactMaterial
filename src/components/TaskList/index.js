import React, {Fragment} from 'react';

import './style.css';

import {doneTask, removeTask} from "../../store/actions";
import {connect} from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import {SHOW_ALL_TASKS, SHOW_DONE_TASKS, SHOW_REMOVE_TASKS} from "../../index";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        justifyContent: "center"
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
    },
    title: {
        textAlign: "left"
    },
});

const TaskList = (props) => {

    const {modifyTasksReducer:{tasks}, setTaskDone, setTaskRemove,classes,filterTasksReducer} = props;
    console.log(props);

    let tasksToShow = tasks;
    switch (filterTasksReducer) {
        case SHOW_DONE_TASKS:
            tasksToShow = tasks.filter(el => el.done);
            break;
        case SHOW_REMOVE_TASKS:
            tasksToShow = tasks.filter(el => el.remove);
            break;
    }

    return (
        <Fragment>
            {tasksToShow.map((el, index) => {
                const taskClassName = classes.paper + (el.done?" task-done":"") + (el.remove?" task-remove":"");
                return (
                    <div className={classes.root} key={index}>
                        <Grid container spacing={24} className={classes.container}>
                            <Grid item xs={10} sm={8} md={6}>
                                <Paper className={taskClassName}>
                                    <Grid container spacing={24} className={classes.container}>
                                        <Grid item xs={10}>
                                            <Typography className={classes.title} component="h2" variant="h4" gutterBottom>
                                                {el.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            {
                                                el.remove?""
                                                    :
                                                    (
                                                        <Fragment>
                                                            <IconButton className={classes.button} aria-label="Done" onClick={() => setTaskDone(index)}>
                                                                <DoneIcon />
                                                            </IconButton>
                                                            <IconButton className={classes.button} aria-label="Delete" onClick={() => setTaskRemove(index)}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Fragment>
                                                    )
                                            }
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                )
            })}
        </Fragment>
    )
};

const mapStateToProps = state => ({...state});
const mapActionsToProps = dispatch =>{
    return {
        setTaskDone: task => dispatch(doneTask(task)),
        setTaskRemove: task => dispatch(removeTask(task)),
    }
};

export default withStyles(styles)(connect(mapStateToProps,mapActionsToProps)(TaskList));
