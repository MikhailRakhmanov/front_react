import {Component} from "react";
import axios from "axios";

class ImportContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            importData: [],
            keys: [],
            tableCaption: {
                // "slc": "",
                "num": "№",
                "notes": "Особен",
                "packet": "Пакет",
                "kolvo": "Кол-во",
                "idbrig": "Бригада",
                "dtp": "На завод",
                "dot6": "Вывоз",
                // "wdate": "",
                // "idzmat": "",
                // "dotprn": "",
                // "notes1": "",
                // "fname": "",
                // "vd": "",
                // "parent": "",
                // "manager": "",
            }
        };
    }

    componentDidMount() {
        axios.get(`/api/import`).then((res) => {
            this.setState({importData: res.data}, () => {
                // Вызываем addSelectionListeners после успешного обновления состояния
                this.addSelectionListeners();
            });
        });
    }

    addSelectionListeners() {
        let isMousePressed = false;
        let tableRows = document.querySelectorAll('tbody > tr');
        let selectedRows = [];

        function handleMouseDown(e) {
            isMousePressed = true;
            let rowIndex = Array.from(tableRows).indexOf(e.currentTarget);

            if (!e.ctrlKey && !e.shiftKey) {
                clearSelections();
            }

            if (e.shiftKey && selectedRows.length > 0) {
                selectRowsBetween(selectedRows[selectedRows.length - 1], rowIndex);
            } else if (e.ctrlKey) {
                toggleRowSelection(rowIndex);
            } else {
                clearSelections();
                toggleRowSelection(rowIndex);
            }
        }

        function handleMouseUp() {
            isMousePressed = false;
        }

        function handleMouseEnter(e) {
            if (isMousePressed) {
                let rowIndex = Array.from(tableRows).indexOf(e.currentTarget);
                if (e.shiftKey && selectedRows.length > 0) {
                    selectRowsBetween(selectedRows[selectedRows.length - 1], rowIndex);
                } else if (e.ctrlKey) {
                    toggleRowSelection(rowIndex);
                } else {
                    clearSelections();
                    toggleRowSelection(rowIndex);
                }
            }
        }

        function handleMouseLeave() {
            if (isMousePressed) {
                clearSelections();
            }
        }

        function toggleRowSelection(rowIndex) {
            let row = tableRows[rowIndex];
            let isSelected = selectedRows.includes(rowIndex);

            if (isSelected) {
                selectedRows = selectedRows.filter(selectedIndex => selectedIndex !== rowIndex);
            } else {
                selectedRows.push(rowIndex);
            }

            toggleRowSelectionStyle(row, !isSelected);
        }

        function toggleRowSelectionStyle(row, isSelected) {
            let cl = row.classList;
            if (isSelected) {
                cl.add('checked');
                Array.from(row.children).forEach(child => {
                    child.style.color = '#2C0089';
                    child.style.backgroundColor = '#EEEEEE';
                });
            } else {
                cl.remove('checked');
                Array.from(row.children).forEach(child => {
                    child.style.color = 'black';
                    child.style.backgroundColor = 'white';
                });
            }
        }

        function selectRowsBetween(start, end) {
            let minIndex = Math.min(start, end);
            let maxIndex = Math.max(start, end);

            for (let i = minIndex; i <= maxIndex; i++) {
                if (!selectedRows.includes(i)) {
                    selectedRows.push(i);
                    toggleRowSelectionStyle(tableRows[i], true);
                }
            }
        }

        function clearSelections() {
            selectedRows.forEach(rowIndex => {
                toggleRowSelectionStyle(tableRows[rowIndex], false);
            });
            selectedRows = [];
        }

        tableRows.forEach(row => {
            row.addEventListener('mousedown', handleMouseDown);
            row.addEventListener('mouseup', handleMouseUp);
            row.addEventListener('mouseenter', handleMouseEnter);
        });

        let tbodyElement = document.querySelector('tbody');
        if (tbodyElement) {
            tbodyElement.addEventListener('mouseleave', handleMouseLeave);
        } else {
            console.error("Unable to find tbody element.");
        }
    }

    render() {
        if (this.state.importData.length < 1) {
            return <h2 style={{width: `100%`, textAlign: `center`, marginTop:`23vh`}}>
                Загрузка
            </h2>
        }
        return (
            <div style={{width: '100%'}}>
                <table className="table">
                    <thead className="table-dark">
                    <tr key={1}>
                        <td colSpan="100%" style={{alignSelf: 'center'}} key={11}>
                            <h3 style={{textAlign: 'center'}}>{`Импорт заказов`}</h3>
                        </td>
                    </tr>
                    <tr key={`main`}>{Object.keys(this.state.tableCaption).map(k => <td key={k}>
                        <h4>{this.state.tableCaption[k]}</h4></td>)}</tr>
                    </thead>
                    <tbody>
                    {this.state.importData.map(line => (
                        <tr key={line.num}>
                            {Object.keys(this.state.tableCaption).map(k => (
                                <td className="noselect" key={`${k}${line[k]}`}>
                                    {line[k]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={()=>{
                    let importList = document.querySelectorAll('.checked');
                    let data = [];
                    importList.forEach(el=>{
                       data.push(el.firstChild.innerText);
                    })
                    console.log(data)
                }}>Импорт</button>
            </div>
        );
    }
}

export default ImportContent;
