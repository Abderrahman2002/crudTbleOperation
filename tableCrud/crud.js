//  DISPLAY THE BLOCKADD

function displyBlock() {
    document.querySelector('.blockadd').style.display = 'block';
}

function addStg() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const filiere = document.getElementById('filiere').value;
    const email = document.getElementById('email').value;
    const action = document.getElementById('action').value;

    const table = document.getElementById('data');
    const rowIndex = document.getElementById('action').dataset.rowIndex;

    if (rowIndex) {
        // Update existing row
        const row = table.rows[rowIndex];
        row.cells[0].innerText = nom;
        row.cells[1].innerText = filiere;
        row.cells[2].innerText = prenom;
        row.cells[3].innerText = email;

        // Clear the rowIndex after updating
        delete document.getElementById('action').dataset.rowIndex;
    } else {
        // Add new row
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${nom}</td>
            <td>${filiere}</td>
            <td>${prenom}</td>
            <td>${email}</td>
            <td>
                <button type="button" class="btn btn-success" onclick="editStg(this)">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deletedStg(this)">Delete</button>
            </td>
        `;
    }

    // Clear input fields after adding/updating
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    document.getElementById('filiere').value = '';
    document.getElementById('email').value = '';
    document.getElementById('action').value = '';

    // Update totals after adding/updating
    updateTotals();
}

function editStg(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    document.getElementById('nom').value = cells[0].innerText;
    document.getElementById('filiere').value = cells[1].innerText;
    document.getElementById('prenom').value = cells[2].innerText;
    document.getElementById('email').value = cells[3].innerText;

    // Store the row index to update it later
    document.getElementById('action').dataset.rowIndex = row.rowIndex - 1; // Adjusted to match the correct row index
}

function deletedStg(button) {
    // Supprime la ligne contenant le bouton "Delete" cliqué
    const row = button.parentNode.parentNode;
    row.remove();

    // Update totals after deleting
    updateTotals();
}

function updateTotals() {
    const table = document.getElementById('data');
    const rowCount = table.rows.length;
    document.getElementById('totalStagiaires').innerText = `Total Stagiaires: ${rowCount}`;
}