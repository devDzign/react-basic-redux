import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
    const RequireAuthentication = ({...props}) => {
        console.log("HOC HOC....")
       return  <WrappedComponent {...props} />
    }

    RequireAuthentication.propTypes = {}

    return RequireAuthentication
}