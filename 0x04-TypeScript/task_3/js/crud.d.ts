import { RowID, RowElement } from "./interface";

declare namespace crud {
    function insertRow(row: RowElement ): RowID;
    function deleteRow(rowId: RowID): void;
    function updateRow(rowId: RowID, row: RowElement): RowID;
}

export = crud;