import {Component} from "react";
import Col from "./MainButton.jsx";
import {Link} from "react-router-dom";



export default class MainBody extends Component {
    render() {
        return (<div className="col">
        <div className="container px-4" id="custom-cards">
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4">
                <Link to={'/main/platform'}><Col name={'Пирамиды'} ></Col></Link>
                <Link to={'/main/delivery'}><Col name={'Доставка'} ></Col></Link>
                <Link to={'/main/import'}><Col name={'Импорт'} ></Col></Link>
                <Link to={'/main/download'}><Col name={'Загрузки'} ></Col></Link>
            </div>
        </div>
        </div>
        )
    }
}

