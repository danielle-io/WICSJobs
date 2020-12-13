function collapseAndExpandInnerContainers(itemId) {
  // Apply the active and inactive styling
  var containerId = "#" + itemId + "Containter";
  var items = document.getElementsByClassName("nav-link");

  // If everything is closed do not close the section
  if ($("#" + itemId).hasClass("active-link")) {
    return;
  }

  for (var item in items) {
    if (items[item].id !== itemId) {
      $("#" + items[item].id).removeClass("active-link");
      $("#" + items[item].id).removeClass("inactive-link");
      $("#" + items[item].id + "Container").removeClass("show");
    }
  }

  // Make current item active
  $("#" + itemId).removeClass("inactive-link");
  $("#" + itemId).addClass("active-link");
  $("#" + itemId + "Container").addClass("show");
}

// Clicking a card opens up the relevant container
$(".card").on("click", function (event) {
  collapseAndExpandContainers(this.id);
});

function populateSummaryTable(jobArray) {
  // Populate table
  for (var i in jobArray) {
    var table = document.getElementById("companyCountBody");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = jobArray[i].companyName;
    cell2.innerHTML = jobArray[i].employeeCount;
    cell3.innerHTML = jobArray[i].averageOverallRating;
    cell4.innerHTML = jobArray[i].averageLearnGrowRating;
    cell5.innerHTML = jobArray[i].averageRecRating;
  }
  $("#companyCountTable").DataTable({
    order: [[1, "desc"]],
  });
}

function collapseAndExpandContainers(itemId) {
  // Apply the active and inactive styling
  var items = document.getElementsByClassName("card-button");

  // If everything is closed do not close the section
  if ($("#" + itemId).hasClass("active-card-button")) {
    return;
  }

  for (var item in items) {
    if (items[item].id !== itemId) {
      $("#" + items[item].id).removeClass("active-card-button");
      $("#" + items[item].id + "Container").removeClass("show");
    }
  }

  // Make current item active
  $("#" + itemId).addClass("active-card-button");
  $("#" + itemId + "Container").addClass("show");
}

// Clicking a card opens up the relevant container
$(".nav-link").on("click", function (event) {
  collapseAndExpandInnerContainers(this.id);
});
