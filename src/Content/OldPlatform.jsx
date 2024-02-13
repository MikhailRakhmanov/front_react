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
        if(this.state.strings.length===0){
            return <h2 style={{width: `100%`, textAlign: `center`, marginTop:`23vh`}}>
                <div className="spinner-border text-primary" style={{width : '3rem', height: '3rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </h2>
        }
        return <div style={{width: `100%`, textAlign: `center`, marginTop:`23vh`}}>
            {this.state.strings.map(el=>
                <div key={`d${el}`}><h2 key={`e${el}`}>{el}</h2></div>
            )}
        </div>
    }
}

