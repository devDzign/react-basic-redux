import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

export default (WrappedComponent) => {
    const RequireAuthentication = ({...props}) => {
        const { history, isLogin} = props;


        useEffect(() => {
            if(isLogin){
                return history.push("/")
            }

        }, [isLogin]);


       return  <WrappedComponent {...props} />
    }

    RequireAuthentication.propTypes = {}

    const mapStateToProps = state => {
        return {
            isLogin: state.rootAuth.isAuth
        };
    }

    return connect(mapStateToProps)(RequireAuthentication);
}