import React from 'react';
function AppWitoutJsx() {
      return (
        React.createElement('form', {},
        React.createElement("h1", {}, "Login"),
        React.createElement('input', {type: 'text',placeholder:'Name', value: '',}),
        React.createElement('br', {}),React.createElement('br', {}), 
        React.createElement('input', {type: 'password', placeholder: 'password',
                             value: '',}), 
        React.createElement('br', {}), React.createElement('br', {}), 
        React.createElement('button', {type: 'submit'}, "Login"))
       )
    }
    export default AppWitoutJsx;
    