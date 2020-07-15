import React, { useState } from 'react';
import Widget from '../components/Login/Widget';

function Login() {
    const [fullLogin, setFullLogin] = useState();

    return(<>
        <div>
            Welcome friend. Login box is below. Or it should be.
        </div>
        <Widget></Widget>
     </>)
}

export default Login;