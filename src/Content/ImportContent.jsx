import  {Component} from "react";
import axios from "axios"

class ImportContent extends Component {

    constructor(props) {
        super(props);

        axios.get(`/api/import`).then((res) => {

            this.setState({importData: res.data, keys: Object.keys(res.data[0])})
        })
        this.state = {
            importData: [],
            keys: []
        }
    }

    render() {
        return (

            <div style={{width:`100%`}}>
                <table className="table ">
                    <thead className="table-dark">
                    <tr>
                        <td colSpan="100%" style={{alignSelf: `center`}}><h3
                            style={{textAlign: `center`}}>{`Импорт заказов`}</h3></td>
                    </tr>
                    <tr key={`main`}>{this.state.keys.map(k =>
                        <td><h4>{k}</h4></td>)}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.importData.map(line => <tr key={line.bcode}>{this.state.keys.map(k =>
                        <td className="noselect" key={`${k}${line[k]}`}>{line[k]}</td>)}
                    </tr>)}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default ImportContent