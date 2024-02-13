import {Component} from "react";
import axios from "axios";

export default class Diction extends Component {
    componentDidMount() {
        this.interval = setInterval(() => {

            axios.get(`/api/dict`).then((res) => {
                res.data.forEach(el => {
                    el.dot1 = new Date(el.dot1).toLocaleDateString()
                    el.dot2 = new Date(el.dot2).toLocaleDateString()
                    el.dot3 = new Date(el.dot3).toLocaleDateString()
                    switch (el.flg) {
                        case 1: {
                            el.flg = '#b7ff9d';
                            break;
                        }
                        case 2: {
                            el.flg ='#ffcc75';
                            break;
                        }
                        case 3: {
                            el.flg ='#ff9999';
                            break;
                        }
                        default:
                            break;

                    }
                })
                this.setState({
                    tasks: res.data
                })
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        axios.get(`/api/dict`).then((res) => {
            res.data.forEach(el => {
                el.dot1 = new Date(el.dot1).toLocaleDateString()
                el.dot2 = new Date(el.dot2).toLocaleDateString()
                el.dot3 = new Date(el.dot3).toLocaleDateString()
                switch (el.flg) {
                    case 1: {
                        el.flg = '#b7ff9d';
                        break;
                    }
                    case 2: {
                        el.flg ='#ffcc75';
                        break;
                    }
                    case 3: {
                        el.flg ='#ff9999';
                        break;
                    }
                    default:
                        break;

                }
            })
            this.setState({
                tasks: res.data
            })
        })
    }


    render() {
        const keys = {
            "notes": "left",
            "dot1": "center",
            "dot2": "center",
            // "dot3": "Факт",
            "notes1": "center",
        }
        return <table style={{
            textAlign: `center`,
            fontSize: `48px`
        }} className="table">
            <thead className="table-dark">
            <tr className="table-dark">
                <td colSpan="100%" style={{
                    textAlign: `center`,
                }}><h3 style={{
                    textAlign: `center`,
                    fontSize: `64px`,
                    margin: `0`
                }} className="table-dark">{`Список Дел`}</h3></td>
            </tr>
            <tr>
                <td>Задача</td>
                <td>Поступление</td>
                <td>План</td>
                {/*<td>Факт</td>*/}
                <td>Примечание</td>
            </tr>
            </thead>
            <tbody style={{fontSize: `26px`}}>
            {this.state.tasks.map(t => <tr key={t['']} style={{borderColor: `black`}}>{Object.keys(keys).map(k =>
                <td style={{textAlign: keys[k], paddingLeft: "10px", backgroundColor: t.flg,fontWeight:`bold`}}>{t[k]}</td>)}</tr>)}
            </tbody>
        </table>

    }
}