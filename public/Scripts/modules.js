// Object to keep track of the sorting direction for each column
var sortDirections = {};

function sortTable(colIndex) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchCount = 0;

  // Get the table element
  table = document.getElementById("myTable");

  // Set the switching flag to true to start the sorting loop
  switching = true;

  // Get the current sorting direction for the column, default to ascending if not set
  dir = sortDirections[colIndex] || "asc";

  // Loop through the table rows until no more switching is needed
  while (switching) {
    switching = false; // Assume no switching is needed
    rows = table.rows;

    // Loop through all table rows (except the header row)
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      // Get the two elements to compare, current row and the next row
      x = rows[i].getElementsByTagName("td")[colIndex];
      y = rows[i + 1].getElementsByTagName("td")[colIndex];

      // Check if the two rows should switch place, based on the direction
      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // Mark as a switch and break the loop
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // Mark as a switch and break the loop
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      // If a switch is needed, perform the switch
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true; // Set the switching flag to true to continue looping
      switchCount++; // Increment the switch count
    }
  }

  // If no switching was done and the direction is "asc", set direction to "desc"
  if (switchCount === 0 && dir === "asc") {
    dir = "desc";
    switching = true; // Continue looping to sort in the new direction
  } else if (switchCount === 0 && dir === "desc") {
    // If no switching was done and the direction is "desc", reset to "asc"
    dir = "asc";
  }

  // Update the sorting direction for the column
  sortDirections[colIndex] = dir;

  // Reset all header classes to remove previous sorting states
  var headers = table.rows[0].getElementsByTagName("th");
  for (var j = 0; j < headers.length; j++) {
    headers[j].classList.remove("sorted-asc", "sorted-desc");
  }

  // Set the appropriate class for the sorted column header to display the correct arrow
  if (dir === "asc") {
    headers[colIndex].classList.add("sorted-asc");
  } else {
    headers[colIndex].classList.add("sorted-desc");
  }
}
