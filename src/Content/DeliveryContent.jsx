import {Component} from "react";
import axios from "axios"

class DeliveryContent extends Component {

    constructor(props) {
        const tableTitles = {
            "numPir":"№",
            "shet":"Счет",
            "client":"Клиент",
            "dotOut":"Вывоз",
            "kolvo":"Кол-во",
            "idClient":"Id Клиента",
            "fdt":'Время завершения'
        }
        super(props);
        this.state = {
            data: [],
            keys: []
        }
        axios.get(`/api/delivery`).then((res) => {
            if (res.data.length > 0)
                this.setState({
                    data: res.data,
                    // keys: Object.keys(res.data[0])
                    keys: Object.keys(tableTitles)
                })
        })

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
        const tableTitles = {
            "numPir":"№",
            "shet":"Счет",
            "client":"Клиент",
            "dotOut":"Вывоз",
            "kolvo":"Кол-во",
            "idClient":"Id клиента",
            "fdt":'Время завершения'
        }
        return (
            <div style={{width:`100%`}}>
                <table className="table">
                    <thead className="table-dark">
                    <tr>
                        <td colSpan="100%" style={{alignSelf: `center`}}><h3
                            style={{textAlign: `center`}}>Доставка</h3></td>
                    </tr>
                    <tr key={`main`}>{this.state.keys.map(k =>
                        <td key={k}><h4>{tableTitles[k]}</h4></td>)}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(p => <tr key={`${p['numPir']}`}>{this.state.keys.map(k =>
                        <td key={`${tableTitles[k]}${p[k]}`} className="noselect">{p[k]}</td>)}</tr>)}
                    </tbody>
                </table>
                <button onClick={()=>{
                    let list = document.querySelectorAll('.checked');
                    let data = [];
                    list.forEach(el=>{
                        data.push(el.firstChild.innerText);
                    })
                    console.log(data)
                }}>Доставка</button>

            </div>
        );
    }
}

export default DeliveryContent