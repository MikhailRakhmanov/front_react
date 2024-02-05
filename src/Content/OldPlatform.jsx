import {Component} from "react";
import axios from "axios"


export default class OldPlatform extends Component {

    constructor(props) {
        super(props);

        this.state = {
            strings: []
        }

        axios.get(`/api/table/old/` + this.props.platformId.match(/\d+/g).pop()).then((res) => {
            console.log(res.data)
            this.setState({
                strings: res.data
            })

        })


    }

    render() {
        return <div>
            {this.state.strings.map(el=>
                <div key={`d${el}`}><h2 key={`e${el}`}>{el}</h2></div>
            )}
        </div>
    }
}

