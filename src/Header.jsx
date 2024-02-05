import {Component} from "react";



export default class Header extends Component {


    render() {
        return <header className="p-1">
            <div className="container" style={{marginLeft: `0`}}>
                <div className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-autojustify-content-center mb-md-0">
                        <button style={{display: this.props.btn ? 'block' : 'none' }} onClick={this.props.toggleLeftBar}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 36 36" width="36"
                                 focusable="false"
                                 fill="white">

                                <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
                            </svg>
                        </button>
                        <li><a href="/" className="nav-link text-white" style={{padding: `0`}}>
                            {/*<img src={logo} className="bi me-2"  height="32" role="img" aria-label="Bootstrap" alt='logo'></img>*/}

                            <h1 className="mb-1" style={{fontSize: 36}}>Стеклопакет</h1>
                        </a></li>


                    </ul>
                </div>
            </div>
        </header>
    }
}