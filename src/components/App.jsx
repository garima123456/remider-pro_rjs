import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addReminder } from '../actions';

class App extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            text:''
        }
    }
    addReminder() {
        console.log('this',this)
    }
    render(){
    return(
        <div className="App">
            <div className="title">
                Reminder Pro
            </div>
            <div className="form-inline">
            <div className="form-group">
                <input
                        className="form-control"
                        placeholder="I ahve to..."
                        onChange={event => this.setState({text:event.target.value})}
                    />
                </div>
                <button
                    type="button"
                    className="btm btn-success"
                    onClick={()=>this.addReminder()}
                >Add reminder</button>
            </div>
        </div>
    )
    }
}

export default connect(null,{addReminder})(App);