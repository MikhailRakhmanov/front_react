import React, {Component} from "react";

class SmallButton extends Component{
    render() {
        return (
            <li>
                <button className=" btn-padding d-inline-flex align-items-center  border-0 collapsed"
                        style={{paddingLeft: `70px`}}
                onClick={this.props.action}>
                    {this.props.name}</button>
            </li>
        );
    }
}
export default SmallButton