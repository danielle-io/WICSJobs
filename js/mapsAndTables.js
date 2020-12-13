function addEventHandler() {}
// Fill the states with jobs recorded with darker opacity based on amount of records
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

  function getStateTableData(state) {
    $("#stateInfoBody").empty();
    document.getElementById("stateCompanyData").style.display = "block";

    // Show the table
    var table = document.getElementById("stateInfoBody");
    for (i in stateJobs[state]) {
      console.log(jobData[i]["averageOverallRating"]);
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = i;
      cell2.innerHTML = stateJobs[state][i];
      cell3.innerHTML = jobData[i]["averageOverallRating"];
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
          "<br><br>In the meantime, <b>here's a state fact for " +
          stateConversion.stateAbb +
          ": " +
          "<br><span class='state-facts'>" +
          fact.stateFact +
          "</b></span><br><br><small>If you've worked in this state please submit your rating using our linked form under 'Submit Your Rating'!</snall>";
      }

      document.getElementById("stateName").innerHTML =
        stateConversion.stateFull;
      document.getElementById("stateInfo").innerHTML = textString;
    },
  });

  $("#over-md").click(function (event) {
    $("#map").usmap("trigger", "MD", "mouseover", event);
  });
});
