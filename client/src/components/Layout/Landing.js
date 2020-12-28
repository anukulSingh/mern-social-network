import React from 'react';
import { Link } from 'react-router-dom';

import showcase from '../../img/showcase2.jpg';

const Landing = () => {
  return (
    <div className="container-fluid center">
      
        <div className="row m-4">
          <h1 className="col-12 x-large mb-2">Developer conecctor</h1>
          <p className="col-12 lead ">
            Create a developer portfolio and get in touch with other developers !
          </p>
        </div>
        <div className="row m-4">
            <Link to="/register" className="btn btn-outline-primary mr-2">Sign up ✏</Link>
            <Link to="/login" className="btn btn-outline-secondary">Login 🎾</Link>
        </div>
        
      
    </div>
  )
}

export default Landing
