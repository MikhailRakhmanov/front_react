import {Component} from "react";
import SmallButton from "./buttons/SmallButton.jsx";
import BigButton from "./buttons/BigButton.jsx";
import {Link} from "react-router-dom";

export default class LeftBar extends Component{
    render() {

        const { isLeftBarVisible } = this.props;

        return (
            <div className="flex-shrink-0" style={{ display: isLeftBarVisible ? 'block' : 'none' ,width: `280px`}}>
                <ul className="list-unstyled ps-0">
                    <li className="mb-0 border-bottom">
                        <button
                            className="btn-toggle d-inline-flex align-items-center border-0 collapsed"
                            data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                            Пирамиды
                        </button>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal small">
                                <Link to={'/main/platform'} className="p-0 m-0 "><SmallButton name={"Список"}></SmallButton></Link>
                                <Link to={'/main/platform/scan'} className="p-0 m-0"><SmallButton name={"Сканирование"}></SmallButton></Link>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-0 border-bottom">
                        <Link to={'/main/delivery'}><BigButton name={'Доставка'}></BigButton></Link>
                    </li>
                    <li className="mb-0 border-bottom">
                        <Link to={'/main/import'}><BigButton name={'Импорт'}></BigButton></Link>
                    </li>
                    <li className="mb-0 border-bottom">
                        <Link to={'/main/download'}><BigButton name={'Загрузки'}></BigButton></Link>
                    </li>
                    {/*<li className="mb-1">*/}
                    {/*    <button*/}
                    {/*        className="btn-toggle d-inline-flex align-items-center border-0 collapsed"*/}
                    {/*        data-bs-toggle="collapse" data-bs-target="#account-collapse"*/}
                    {/*        aria-expanded="false">*/}
                    {/*        Аккаунт*/}
                    {/*    </button>*/}

                    {/*    <div className="collapse" id="account-collapse">*/}
                    {/*        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">*/}
                    {/*            <SmallButton name={'Новый'}*/}
                    {/*                         action={() => {*/}
                    {/*                             this.props.hideLeftBar();*/}
                    {/*                             this.props.changeMode("new")*/}
                    {/*                         }}></SmallButton>*/}
                    {/*            <SmallButton name={'Профиль'}*/}
                    {/*                         action={() => {*/}
                    {/*                             this.props.hideLeftBar();*/}
                    {/*                             this.props.changeMode("profile")*/}
                    {/*                         }}></SmallButton>*/}
                    {/*            <SmallButton name={'Настройки'}*/}
                    {/*                         action={() => {*/}
                    {/*                             this.props.hideLeftBar();*/}
                    {/*                             this.props.changeMode("options")*/}
                    {/*                         }}></SmallButton>*/}
                    {/*            <SmallButton name={'Выйти'}*/}
                    {/*                         action={() => {*/}
                    {/*                             this.props.hideLeftBar();*/}
                    {/*                             this.props.changeMode("exit")*/}
                    {/*                         }}></SmallButton>*/}
                    {/*        </ul>*/}

                    {/*    </div>*/}
                    {/*</li>*/}
                </ul>
            </div>
        );


    }
}