import React from 'react'

export const Comingsoon = () => {
    const censty={
        color:'white',
        marginLeft:'10%',
        marginTop:'10%',
        padding:'20px',
        border:'3px dashed purple',
        width:'fit-content',
    }
    return (
        <div>
            <div style={censty}>
            <h1>Coming soon</h1>
            <h2>We are working day and night on this :)</h2>
            <h2>For now do check our HTML tutorial <a href="/learnhtml">here</a>.</h2>
        </div>
        </div>
    )
}
