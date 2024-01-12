import {Component} from "react";
import axios from "axios"

class DeliveryContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            keys: []
        }
        axios.get(`/api/delivery`).then((res) => {
            if (res.data.length > 0)
                this.setState({
                    data: res.data,
                    keys: Object.keys(res.data[0])
                })
        })

    }

    render() {
        return (
            <div style={{width:`100%`}}>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <td colSpan="100%" style={{alignSelf: `center`}}><h3
                            style={{textAlign: `center`}}>Доставка</h3></td>
                    </tr>
                    <tr key={`main`}>{this.state.keys.map(k =>
                        <td><h4>{k}</h4></td>)}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(p => <tr key={p[`shet`]}>{this.state.keys.map(k =>
                        <td>{p[k]}</td>)}</tr>)}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default DeliveryContent