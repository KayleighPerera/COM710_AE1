// Allows filters to work creates a function called filterTable
function filterTable(columnIndex) {
  var input, filter, table, tr, td, i, txtValue;
  // Gets all elements from the modules.html page
  input = document.getElementsByClassName("filter-input")[columnIndex];
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  // Loop through each row of the table
  for (i = 0; i < tr.length; i++) {
    // Get the cell in the specified column for the current row
    td = tr[i].getElementsByTagName("td")[columnIndex];

    // Check if the cell exists
    if (td) {
      // Get the text content of the cell, considering browser compatibility
      txtValue = td.textContent || td.innerText;

      // Check if the text content of the cell contains the filter text, ignoring case
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // If the filter text is found, display the row
        tr[i].style.display = "";
      } else {
        // If the filter text is not found, hide the row
        tr[i].style.display = "none";
      }
    }
  }
}
