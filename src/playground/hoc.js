// Higher Order Component (HOC) - A component (HOC) that renders another component 
// Reuse Code
// Render Hijacking
// Prop manipulation

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


// Regular function, not react component 
const withAdminWarning = (WrappedComponent) => {
    return (props) => (     // anonymous function, what's returned is the HOC
        <div>
            { props.isAdmin && <p>This is private info. Please don't share.</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
            <p>Please login to see the info</p>
        )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info); // pass in the component, returned is the HOC
const AuthInfo = requireAuthentication(Info); 

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'));
