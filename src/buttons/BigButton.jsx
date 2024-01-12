import React, {Component} from "react";

class BigButton extends Component{
    render() {
        return (
            <button onClick={this.props.action}
                    className=" btn-padding d-inline-flex align-items-center  border-0 collapsed"
                    data-bs-toggle="collapse" data-bs-target="#orders-collapse"
                    aria-expanded="false">
                {this.props.name}
            </button>
        );
    }
}
export default BigButton