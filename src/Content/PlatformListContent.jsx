import {Component} from "react";
import axios from "axios"



class PlatformListContent extends Component {
    tableDataInRow(){
        let width = window.innerWidth;
        if (width > 800){
            return 10
        }else if(width<250){
            return 3
        }else{
            return 5
        }

    }
    componentDidMount() {

        this.interval = setInterval(() => {
            let tableDataInRow = this.tableDataInRow();
            let a = [];
            this.state.platformList.forEach((el, i) => {
                if (i % tableDataInRow === 0) {
                    a.push([])
                }
                a[Math.floor(i / tableDataInRow)].push(el)
            })
            this.setState({platformData: a})
        }, 300);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    constructor(props) {

        super(props);
        let tableDataInRow = this.tableDataInRow();
        axios.get(`/api/tpir`).then((res) => {
            this.setState({platformList: res.data})
            let a = []
            res.data.forEach((el, i) => {

                if (i % tableDataInRow === 0) {
                    a.push([])
                }
                a[Math.floor(i / tableDataInRow)].push(el)
            })
            this.setState({platformData: a})
        })

        this.state = {
            platformList: [],
            platformData: [],
            tableDataInRow : Math.floor(Math.sqrt(window.outerWidth/1200)*10),

        }


    }

    render() {
        return (
            <div style={{width: `100%`}}>
                <table className="table ">
                    <thead className="table-dark">
                    <tr><td colSpan="100%" style={{alignSelf: `center`}}><h2>Пирамиды</h2></td></tr>
                    </thead>
                    <tbody>
                    {this.state.platformData.map(somePlatform =>
                        <tr  key={`ps${somePlatform[0].num}`}>{somePlatform.map(platform =>
                            <td className="platform-list noselect" key={`p${platform.num}`}  style={ platform.sospir === 1 ? {padding: 0,backgroundColor: `#BBFFBB`}:{padding: 0,backgroundColor: `#FFBBBB`}} >
                                <a href={platform.sospir === 1?`/main/platform/${platform.num}`: `/main/platform/old/${platform.num}`}>
                                    <div  style={{width : `100%`,
                                            height : `100%`,
                                            padding:`8px`,
                                            color: `black`,
                                            textDecoration: `none`
                                    }}>
                                        {platform.num}
                                    </div>
                                </a>
                            </td>
                        )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PlatformListContent