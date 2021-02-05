import React,{ Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCurrentUserProfile } from '../../actions/profile';
import Spinner from '../Layout/Spinner';

const Dashboard = ({ getCurrentUserProfile, auth: { user }, profile: { loading, profile  } }) => {
    useEffect(() => {
        getCurrentUserProfile()
    }, [])
     return (
         <Fragment>
             <h1 className="large text-primary">Dashboard </h1>
             <p className="lead">
                 <i className="fas fa-user"></i>
                  Welcome { user && user.name }
             </p>
             { profile != null ? (
                 <Fragment>
                     has
                 </Fragment>
             ): (
                 <Fragment>
                     <p>You have not yet set up your profile</p>
                     <Link to='/profile'>Create profile</Link>
                 </Fragment>
             )}
         </Fragment>
     )
         
}

Dashboard.propTypes = {
    getCurrentUserProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentUserProfile }) (Dashboard)
