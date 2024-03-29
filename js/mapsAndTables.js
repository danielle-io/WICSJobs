// Fill states with darker opacity based on amount of records
$(document).ready(function () {
  var stateColors = {};
  for (var i in stateJobs) {
    var totalSum = Object.values(stateJobs[i]).reduce((a, b) => a + b, 0);
    var opacity = totalSum / 10;
    if (stateJobs[i] >= 10) {
      opacity = 1.0;
    }
    stateColors[i] = {};
    stateColors[i]["fill"] = "#ff0c7b";
    stateColors[i]["opacity"] = opacity;
  }

  // Populate state table data
  function getStateTableData(state) {
    $("#stateInfoBody").empty();
    document.getElementById("stateCompanyData").style.display = "block";

    // Show the table
    var table = document.getElementById("stateInfoBody");
    for (i in stateJobs[state]) {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = i;
      cell2.innerHTML = stateJobs[state][i];
      cell3.innerHTML = "\t\t" + jobData[i]["averageOverallRating"];
    }
  }

  $("#map").usmap({
    stateSpecificStyles: stateColors,
    mouseoverState: {},

    // The display of states and job data upon clicking a state on the map
    click: function (event, data) {
      var stateConversion = new StateAbbreviationConversions(data.name);
      var fact = new StateFacts(stateConversion.stateFull);
      var textString = "";

      if (data.name in stateJobs) {
        getStateTableData(data.name);
      }
      // State does not exist in our state data
      else {
        // Hide the table
        document.getElementById("stateCompanyData").style.display = "none";

        textString +=
          "We have no WICS data for this state yet <span class='material-icons'>sentiment_dissatisfied </span>" +
          "In the meantime, <b>here's a state fact for " +
          stateConversion.stateAbb +
          ": " +
          "<br><span class='state-facts'>" +
          fact.stateFact +
          "</b></span><br><small>If you've worked in this state please submit your rating using our linked form under 'Submit Your Rating'!</snall>";
      }

      document.getElementById("stateName").innerHTML =
        stateConversion.stateFull;
      document.getElementById("stateInfo").innerHTML = textString;
    },
  });

  $("#over-md").click(function (event) {
    $("#map").usmap("trigger", "MD", "mouseover", event);
  });

  populateSummaryTable();
  populateIndividialReviewTable();
});

function populateIndividialReviewTable() {
  // Populate table
  for (var i in data_array) {
    var table = document.getElementById("individualReviewBody");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = data_array[i].companyName;
    cell2.innerHTML = data_array[i].positionName;
    cell3.innerHTML = data_array[i].jobType;
    cell4.innerHTML = data_array[i].duration;
    cell5.innerHTML = data_array[i].overallRating;
    cell6.innerHTML = data_array[i].learningGrowthRating;
    cell7.innerHTML = data_array[i].recRating;
    cell8.innerHTML = data_array[i].detailsText;
  }
  $("#individualReviewTable").DataTable({
    order: [[1, "desc"]],
    scrollX: 700,
    scrollY: 700,
  });
}

function populateSummaryTable() {
  // Populate table
  for (let i in jobData) {
    var table = document.getElementById("companyCountBody");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = i;
    cell2.innerHTML = jobData[i].employeeCount;
    cell3.innerHTML = jobData[i].averageOverallRating;
    cell4.innerHTML = jobData[i].averageLearnGrowRating;
    cell5.innerHTML = jobData[i].averageRecRating;
  }
  $("#companyCountTable").DataTable({
    order: [[1, "desc"]],
  });
}

function generateCards() {
  var textString = "<div class='row'>";

  var counter = 3;

  for (let i in sorted_contact_array) {
    var contactArray = sorted_contact_array[i]
      .toString()
      .replaceAll(",", "<br>");
    textString += "<div class='col-sm-3' style='margin-bottom: 30px;'>";
    textString +=
      "<div class='flip-card'>" +
      "<div class='flip-card-inner'>" +
      "<div class='card-front'>";
    textString += "<div class='flip-card-logo card-center'>" + i + "</div>";
    textString += "</div>";
    // Back of the card
    textString += "<div class='card-back'>";
    textString += "<span>" + contactArray + "</span>";

    textString += "</div></div></div></div>";
    counter--;

    if (counter === 0) {
      counter = 3;
      textString += "</div><div class='row''>";
    }
  }
  document.getElementById("card-container").innerHTML = textString;
}
