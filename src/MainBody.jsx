import {Component} from "react";
import MainButton from "./MainButton.jsx";
import {Link} from "react-router-dom";


export default class MainBody extends Component {
    render() {
        return (<div className="col">
        <div className="container px-4" id="custom-cards">
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4">
                <Link to={'/main/platform'}><MainButton cName={'Пирамиды'} ></MainButton></Link>
                <Link to={'/main/delivery'}><MainButton cName={'Доставка'} ></MainButton></Link>
                <Link to={'/main/import'}><MainButton cName={'Импорт'} ></MainButton></Link>
                <Link to={'/main/download'}><MainButton cName={'Загрузки'} ></MainButton></Link>
            </div>
        </div>
        </div>
        )
    }
}

