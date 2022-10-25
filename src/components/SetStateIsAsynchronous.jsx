import React from "react";
class SetStateIsAsynchronous extends React.Component {
    constructor() {
            super()
            this.state = {
                    quantity: 0,
                    price:0
            }
    }
    update = () => {
            this.setState({quantity:5},()=>{
                    if(this.state.quantity == 5) {
                            this.setState({price:2000-100})
                    }
                });
    }
    render() {
           return(<React.Fragment>
                    <h1>{this.state.quantity}</h1>
                    <h1>{this.state.price}</h1>
                    <button onClick={this.update}>Update</button>
            </React.Fragment>)}
           
}
export default SetStateIsAsynchronous;
