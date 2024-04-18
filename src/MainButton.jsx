import {Component} from "react";


export default class MainButton extends Component {
    render() {
        return <div className="col">

            <button className={'my-button'} style={{
                width: `100%`,
                height: `100%`,
                padding: '0',
                cursor: `pointer`
            }}>
                <div className="card-cover overflow-hidden shadow-lg">
                    <div className="d-flex flex-column p-5 pb-3 text text-shadow-1" style={{height:`30vh`}}>
                        <ul className="d-flex list-unstyled">
                            <li className="me-auto">
                                <h3 className="mb-4 display-6 lh-1 fw-bold">{this.props.cName}</h3>
                            </li>

                        </ul>
                    </div>
                </div>
            </button>

        </div>
    }
}