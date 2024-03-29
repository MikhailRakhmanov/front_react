import {Component} from "react";
import axios from "axios"


class PlatformScanContent extends Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            axios.get(`/scan/table`).then((res) => {
                this.setState({
                    platformName: res.data.platformName,
                    count: res.data.count,
                    area: res.data.area,
                    products: res.data.products
                })
            })
        }, 300);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    constructor(props) {
        super(props);
        this.state = {
            platformName: '',
            count: 0,
            area: 0.0,
            keys: Object.keys({
                "caption":"Наименование",
                "mark":"Маркировка",
                "numDog":"№ договора",
                "raz":"Размер",
                "client":"Клиент",
                "sm":"Площадь",
                "dts":"Старт",
                "dtf":"Финиш",
            }),
            products: []
        }
        axios.get(`/scan/table`).then((res) => {
            let products = res.data.products;
            this.setState({
                platformName: res.data.platformName,
                count: res.data.count,
                area: res.data.area,
                keys: Object.keys(products[0]),
                products: res.data.products
            })
        })

    }

    render() {
        if(this.state.platformName==null){
            return <>
                <h2 style={{width: `100%`, textAlign: `center`, marginTop:`23vh`}}>Отсканируйте пирамиду</h2>
            </>
        }
        if (window.outerWidth < 1200) {
            return <table className="table" style={{fontSize: `30px`, width: `100%`}}>
                <thead className="table-dark">
                <tr>
                    <td colSpan="100%" style={{alignSelf: `center`}}><h3
                        style={{textAlign: `center`, fontSize: `72px`}}>{`Пирамида №${this.state.platformName}`}</h3>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="table-dark" style={{width: `30%`, fontSize: `48px`}}>Площадь</td>
                </tr>
                <tr>
                    <td style={{fontSize: `140px`,fontWeight: `bolder`}}>{this.state.area}</td>
                </tr>
                <tr>
                    <td className="table-dark" style={{width: `30%`, fontSize: `48px`}}>Кол-во</td>
                </tr>
                <tr>
                    <td style={{fontSize: `140px`,fontWeight: `bolder`}}>{this.state.count}</td>
                </tr>
                </tbody>
            </table>
        }
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
                        <td><h4>{tableCaption[k]}</h4></td>)}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map(p => <tr key={p['MARK']}>{this.state.keys.map(k =>
                        <td>{p[k]}</td>)}</tr>)}
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

export default PlatformScanContent