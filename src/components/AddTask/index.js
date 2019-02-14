import React, {Component} from 'react';

import {withStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

import {addNewTask} from "../../store/actions";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";


const styles = theme => ({
    root:{
        flexGrow:1,
    },
    container:{
        justifyContent:"center",
    },
    paper:{
        padding:theme.spacing.unit * 2,
        textAlign:"center"
    },
    textField:{
        marginLeft:theme.spacing.unit,
        marginRight:theme.spacing.init,
    },
    button:{
        margin: theme.spacing.unit,
    },
    form:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
});

class AddTask  extends Component{

    state = {
        tasks:""
    };

render(){
    {
        const {classes,addNewTask} = this.props;
        return(
            <div className={classes.root}>
                <Grid container spacing={24} className={classes.container}>
                    <Grid item xs={10} sm={8} md={6}>
                        <Paper className={classes.paper}>
                            <form className={classes.form} onSubmit={(event)=>{
                                this.submitHandler(event, addNewTask)
                            }}>
                                <TextField
                                    id="outlined-name"
                                    label="Enter new task"
                                    className={classes.textField}
                                    value={this.state.task}
                                    onChange={this.handleChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Button variant="outlined" color="primary" className={classes.button}>
                                    Primary
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
    handleChange=(e)=>{
    this.setState({
        task:e.target.value
    })
    };

    submitHandler = (e,addNewTask) => {
        e.preventDefault();
        console.log("submitHandler",e.target[0].value);
        addNewTask(this.state.task);
        this.setState({
            task:""
        })
    };
}

const putStateToProps = (state) => {
    return {
        ...state
    }
};

const putActionsToComponent = (dispatch) => {
    return {
        addNewTask: bindActionCreators(addNewTask,dispatch)
    }
};

export default withStyles(styles)(connect(
    putStateToProps,
    putActionsToComponent
)(AddTask));
