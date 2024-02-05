import {Component} from "react";
import axios from "axios"


class PlatformContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            platformName: '',
            count: 0,
            area: 0.0,
            keys: [],
            products: []
        }

        axios.get(`/api/table/` + this.props.platformId.match(/\d+/g).pop()).then((res) => {
            this.setState({
                platformName: res.data.platformName,
                count: res.data.count,
                area: res.data.area,
                products: res.data.products
            })
            if (res.data.products.length>0){

                this.setState({
                    keys: Object.keys({
                        "caption":"Наименование",
                        "mark":"Маркировка",
                        "numDog":"№ договора",
                        "raz":"Размер",
                        "client":"Клиент",
                        "sm":"Площадь",
                        "dts":"Старт",
                        "dtf":"Финиш",
                    })
                })
            }
        })

    }

    render() {
        let tableCaption = {
            "caption":"Наименование",
            "mark":"Маркировка",
            "numDog":"№ договора",
            "raz":"Размер",
            "client":"Клиент",
            "sm":"Площадь",
            "dts":"Старт",
            "dtf":"Финиш",
        }
        if (window.outerWidth < 1200) {
            return <table className="table" style={{fontSize: `30px`, width: `100%`}}>
                <thead className="table-dark">
                <tr>
                    <td colSpan="100%" style={{alignSelf: `center`}}><h3
                        style={{textAlign: `center`, fontSize: `48px`}}>{`Пирамида №${this.state.platformName}`}</h3>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="table-dark" style={{width: `30%`}}>Площадь</td>
                    <td>{this.state.area}</td>
                </tr>
                <tr>
                    <td className="table-dark" style={{width: `30%`}}>Кол-во</td>
                    <td>{this.state.count}</td>
                </tr>
                </tbody>
            </table>
        }

        return (
            <div style={{width: `100%`}}>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <td colSpan="100%" style={{alignSelf: `center`}}><h3
                            style={{
                                textAlign: `center`,
                                fontSize: `24px`
                            }}>{`Пирамида №${this.state.platformName}`}</h3></td>
                    </tr>
                    <tr key={`main`}>{this.state.keys.map(k =>
                        <td key={k}><h4>{tableCaption[k]}</h4></td>)}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map(p => <tr key={p['MARK']}>{this.state.keys.map(k =>
                        <td key={p['MARK'] + p['caption']}>{p[k]}</td>)}</tr>)}
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                    <tr>
                        <td className="table-dark" style={{width: `30%`}}>Площадь</td>
                        <td>{this.state.area}</td>
                    </tr>
                    <tr>
                        <td className="table-dark" style={{width: `30%`}}>Кол-во</td>
                        <td>{this.state.count}</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default PlatformContent