interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const student1: Student = {
    firstName: "Chinonso",
    lastName: "Morba",
    age:26,
    location: "Nigeria"
}

const student2: Student = {
    firstName: "Somtochi",
    lastName: "Tope",
    age: 23,
    location: "Nigeria"
}
const studentsList:Student[] = [student1, student2]

const table: HTMLTableElement = document.createElement('table');
const tablebody: HTMLTableSectionElement = document.createElement('tbody');


for (let items of studentsList) {
    let tableRow: HTMLTableRowElement = document.createElement('tr');
    
        let tableData_s: HTMLTableCellElement = document.createElement('td');
        let tableData_l: HTMLTableCellElement = document.createElement('td');

        tableData_s.textContent = items.firstName;
        tableData_l.textContent = items.location;
        tableRow.appendChild(tableData_s);
        tableRow.appendChild(tableData_l);
    
    tablebody.appendChild(tableRow);
}

table.appendChild(tablebody);

document.body.appendChild(table);
