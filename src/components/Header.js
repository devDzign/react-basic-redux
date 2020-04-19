import React from 'react';
import {connect} from "react-redux";
import { setAuthentication } from "../store/actions/actions"
import {Link} from "react-router-dom";

const Header = (props) => {
    const {isLogin } =  props

    const authenticationHandler = () => {
        props.authenticationToggle(!isLogin);
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">MC</a>

                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Accuiel
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/resources">
                                Resources
                            </Link>
                        </li>

                        <li className="nav-item">
                            {isLogin ?   <a className="nav-link" href="#" onClick={authenticationHandler}>Connexion</a> :  <a className="nav-link" href="#" onClick={authenticationHandler}>Déconnexion</a>}
                        </li>

                    </ul>

                </div>
            </nav>
        </header>
    );
};

const  mapDispatchToProps = (dispatch) => {
    return {
        authenticationToggle: (isLogin) => dispatch(setAuthentication(isLogin)),
    }
}

const mapStateToProps = (state)=> {

    return {
      isLogin: state.rootAuth.isAuth
    };
}

export default connect(mapStateToProps, mapDispatchToProps )(Header)



