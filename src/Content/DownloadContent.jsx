import  {Component} from "react";


class DownloadContent extends Component {
    render() {
        return (
            <div style={{width:`100%`}}>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <td colSpan="100%" style={{alignSelf: `center`}}><h3
                            style={{textAlign: `center`}}>Загрузки</h3></td>
                    </tr>

                    </thead>
                    <tbody style={{fontSize:`24px`}}>
                    <tr>
                        <td style={{textAlign:`start`}}><a href="/ComPortDataSend.zip" download>Com-Port-App</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}



export default DownloadContent