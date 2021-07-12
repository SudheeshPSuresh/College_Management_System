import React, { Component } from 'react';

import './Style.css';

class StudentLoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            usertype: "Admin"
        }

        this.userSelect = this.userSelect.bind(this);
    }


    render() {
        return (
            <>
                <div className="container login-style">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 heading-div"> STUDENT </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 Signup-div">
                            <form>
                                <h3>Sign In</h3>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </>
        );
    }


    userSelect(user) {
        this.setState(prevState => ({
            usertype: user
        }));
    }

}

export default StudentLoginComponent;