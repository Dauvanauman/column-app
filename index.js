document.addEventListener('DOMContentLoaded', function () {
    const rowsSlider = document.getElementById('rows');
    const columnsSlider = document.getElementById('columns');
    const rowsOutput = document.getElementById('rowsOutput');
    const columnsOutput = document.getElementById('columnsOutput');
    const tableContainer = document.getElementById('tableContainer');

    function generateTable() {
        const rows = rowsSlider.value;
        const columns = columnsSlider.value;
        rowsOutput.textContent = rows;
        columnsOutput.textContent = columns;

        tableContainer.innerHTML = ''; // Clear previous table

        // Set the grid dimensions
        tableContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        tableContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

        // Create table cells
        let cellNumber = 1;
        for (let i = 0; i < rows * columns; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = cellNumber++;
            tableContainer.appendChild(cell);
        }
    }

    rowsSlider.addEventListener('input', generateTable);
    columnsSlider.addEventListener('input', generateTable);

    // Generate initial table
    generateTable();
});
