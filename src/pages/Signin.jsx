import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";
import { signinUser } from "../store/actions/actions"

import {useHistory} from 'react-router-dom'







const FIELDS = {email: "email", password:"password"}

const Signin = (props) => {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler =  e => {
        console.log("click connect")
        e.preventDefault();
        props.signinUser({email, password}, history);

    }

    return (
        <section className="mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <form className="">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                name={FIELDS.email}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name={FIELDS.password}
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={submitHandler}
                        >
                            Connexion
                        </button>
                    </form>
                </div>


            </div>

        </section>
    );
};

const signinForm = reduxForm({
    // a unique name for the form
    form: 'signin',
    fields: Object.keys(FIELDS)
})(Signin)


const mapDispatchToProps = (dispatch) => {
    return {
        signinUser: (user, history) => dispatch(signinUser(user, history)),
    }
}

export default connect(null, mapDispatchToProps)(Signin);
