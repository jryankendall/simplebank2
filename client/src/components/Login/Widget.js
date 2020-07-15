import React, { useState } from 'react';

function Widget() {
    const [loginDetails, setLogin] = useState();

    return(
        <>
            <div>Pretend this is a namebox:</div>
            <div>[                       ]</div>
            <div>And pretend this is a password box:</div>
            <div>[                  ]</div>
        </>
    )
}

export default Widget;