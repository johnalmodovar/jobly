import React, { useContext } from "react";
import userContext from "../../utilities/userContext";
import { Link } from "react-router-dom";

/** renders homepage.
 *
 * RoutesList -> Homepage
*/

function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currentUser.data
        ? <h3>Welcome Back, {currentUser.data.firstName}!</h3>
        : <>
          <Link className="btn btn-primary mx-1" to="/login">Login</Link>
          <Link className="btn btn-primary mx-1" to="/signup">Signup</Link>

          <div className="col card p-2 d-flex mt-5 shadow p-3 mb-5 bg-white rounded">
            <h4>Test User Login Information</h4>
            <p>Username: testuser</p>
            <p>Password: password</p>
          </div>
        </>}
    </div>
  );
}

export default Homepage;