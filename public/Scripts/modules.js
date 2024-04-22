function sortTable(colIndex) {
  // Get the table and initialize variables
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

  // Loop through the table rows until no more switching is needed
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      // Get the content of the cells in the current and next rows
      x = rows[i].getElementsByTagName("td")[colIndex];
      y = rows[i + 1].getElementsByTagName("td")[colIndex];
      // Check if the content of the current cell is greater than the next cell, and if so, set shouldSwitch to true
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    // If shouldSwitch is true, swap the rows
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  // Toggle arrow direction
  var arrowUp = table.rows[0]
    .getElementsByTagName("th")
    [colIndex].getElementsByClassName("arrow-up")[0];
  var arrowDown = table.rows[0]
    .getElementsByTagName("th")
    [colIndex].getElementsByClassName("arrow-down")[0];
  if (arrowUp.style.display === "none") {
    // If arrowUp is hidden, show it and hide arrowDown
    arrowUp.style.display = "inline-block";
    arrowDown.style.display = "none";
  } else {
    // If arrowUp is visible, hide it and show arrowDown
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline-block";
  }
}
