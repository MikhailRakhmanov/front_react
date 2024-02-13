import {Component} from "react";



export default class Header extends Component {


    render() {
        return <header className="p-1">
            <div className="container" style={{marginLeft: `0`}}>
                <div className="d-flex flex-wrap  align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-autojustify-content-center mb-md-0">
                        <button style={{display: this.props.btn ? 'block' : 'none' }} onClick={this.props.toggleLeftBar}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 height="36"
                                 viewBox="0 0 43 43"
                                 width="36"
                                 focusable="false" >
                                <g fill="white">
                                    <rect x="3" y="7"  width="38" height="2" />
                                    <rect x="3" y="19" width="38" height="2" />
                                    <rect x="3" y="31" width="38" height="2" />
                                </g>
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