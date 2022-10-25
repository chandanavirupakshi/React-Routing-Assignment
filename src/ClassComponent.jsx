import React from 'react';   
    
class ClassComponent extends React.Component { 
    render() {
        return React.createElement("h1", {}, "Hello World From a class Component!!!");
    }
}
export default ClassComponent;
