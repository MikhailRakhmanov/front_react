import {Component} from "react";


export default class Header extends Component {
    render() {
        return <header className="p-1">
            <div className="container" style={{marginLeft: `0`}}>
                <div className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-start">


                    <ul className="nav col-12 col-lg-auto me-lg-autojustify-content-center mb-md-0">
                        <li><a href="/" className="nav-link text-white" style={{padding: `0`}}>
                            {/*<img src={logo} className="bi me-2"  height="32" role="img" aria-label="Bootstrap" alt='logo'></img>*/}

                            <h1 className="mb-0" style={{fontSize: 24}}>Стеклопакет</h1>
                        </a></li>
                    </ul>
                    {/*<div className="text-end">*/}
                    {/*    <button type="button" className="btn btn-outline-light me-2">Login</button>*/}
                    {/*    <button className="btn" style={{backgroundColor:'var(--main-color)'}}>Sign-up</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </header>
    }
}