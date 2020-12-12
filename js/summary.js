// A dictionary of average ratings and amount of employees per job
var jobData = {};
var stateJobs = {};
var companyRatings = {};
var totalSummary = {
  participants: 0,
  companyCount: 0,
  sumOfRecRatings: 0,
  sumOfLearnGrowRating: 0,
  sumOfOverallRatings: 0,
  averageOverallRating: 0,
  averageLearnGrowRating: 0,
  averageRecRating: 0,
};

function parseData(raw_data) {
  if (raw_data === undefined) {
    return;
  }

  var data_array = raw_data.map(function (data) {
    return new Job(data);
  });

  getCounts(data_array);
}

function getCounts(data_array) {
  for (var i in data_array) {
    var stateObject = data_array[i].stateAbbreviation;

    var state = stateObject.stateAbb;

    var stateFullName = stateObject.stateFull;

    var companyName = data_array[i].standardizedCompanyName;
    var overallRating = data_array[i].overallRating;
    var recRating = data_array[i].recRating;
    var learnRating = data_array[i].learningGrowthRating;

    // Company exists in disctionary
    if (companyName in jobData) {
      jobData[companyName]["employeeCount"] += 1;
      jobData[companyName]["sumOfOverallRatings"] += overallRating;
      jobData[companyName]["sumOfRecRatings"] += recRating;
      jobData[companyName]["sumOfLearnGrowRating"] += learnRating;
    } else {
      jobData[companyName] = {};
      jobData[companyName]["employeeCount"] = 1;
      jobData[companyName]["sumOfOverallRatings"] = overallRating;
      jobData[companyName]["sumOfRecRatings"] = recRating;
      jobData[companyName]["sumOfLearnGrowRating"] = learnRating;

      // Start averages at 0 - will be calculated later
      jobData[companyName]["averageOverallRating"] = 0;
      jobData[companyName]["averageRecRating"] = 0;
      jobData[companyName]["averageLearnGrowRating"] = 0;

      // Add overall summary data
      totalSummary["companyCount"] += 1;
    }

    // Add overall summary data
    totalSummary["participants"] += 1;
    totalSummary["sumOfOverallRatings"] += overallRating;
    totalSummary["sumOfRecRatings"] += recRating;
    totalSummary["sumOfLearnGrowRating"] += learnRating;

    // State is in the dictionary
    if (state in stateJobs) {
      // Company is in the dictionary under the state name
      if (companyName in stateJobs[state]) {
        stateJobs[state][companyName] += 1;
      }
      // Company is not under the state name in the dictionary
      else {
        stateJobs[state][companyName] = 1;
      }
      // State is not in the dictionary
    } else {
      stateJobs[state] = {};
      stateJobs[state][companyName] = 1;
    }
  }
  // Create an array of job data so it can be sorted and displayed
  var jobArray = createJobArray(jobData);
  console.log(jobArray);

    jobArray.sort((a, b) => {
      (jobArray[a] < jobArray[b] ? -1 : 1);
    });
  

  // console.log(jobData);

  for (var i in jobArray) {
    // Calculate average ratings
    var table = document.getElementById("companyCountTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = jobArray[i].companyName;
    cell2.innerHTML = jobArray[i].employeeCount;
  }
}

function createJobArray(jobData) {
  var jobArr = [];
  for (i in jobData) {
    // Calculate Averages
    jobData[i]["averageOverallRating"] =
      jobData[i]["sumOfOverallRatings"] / jobData[i]["employeeCount"];
    jobData[i]["averageRecRating"] =
      jobData[i]["sumOfRecRatings"] / jobData[i]["employeeCount"];
    jobData[i]["averageLearnGrowRating"] =
      jobData[i]["sumOfLearnGrowRating"] / totalSummary["employeeCount"];

    // Add overall summary data
    totalSummary["averageOverallRating"] =
      totalSummary["sumOfOverallRatings"] / totalSummary["participants"];
    totalSummary["averageRecRating"] =
      totalSummary["sumOfRecRatings"] / totalSummary["participants"];
    totalSummary["averageLearnGrowRating"] =
      totalSummary["sumOfLearnGrowRating"] / totalSummary["participants"];

    insertOverallSummary();

    jobArr.push({
      companyName: i,
      employeeCount: jobData[i]["employeeCount"],
      averageOverallRating: jobData[i]["averageOverallRating"],
      averageRecRating: jobData[i]["averageRecRating"],
      averageLearnGrowRating: jobData[i]["averageLearnGrowRating"],
    });
  }
  console.log(jobArr);
  return jobArr;
}

function getPercent(sourceCount) {
  return ((sourceCount / data_array.length) * 100).toFixed(2);
}

// Update the HTML summary text
function insertOverallSummary() {
  $("#participants").text(totalSummary.participants);
  $("#companyCount").text(totalSummary.companyCount);
  $("#averageOverallRating").text(totalSummary.averageOverallRating.toFixed(2));
  $("#averageLearnGrowRating").text(
    totalSummary.averageLearnGrowRating.toFixed(2)
  );
  $("#averageRecRating").text(totalSummary.averageRecRating.toFixed(2));
}

// Clicking a card opens up the relevant container
$(".card").on("click", function (event) {
  collapseAndExpandContainers(this.id);
});

function collapseAndExpandContainers(itemId) {
  // Apply the active and inactive styling
  var containerId = "#" + itemId + "Containter";
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
  console.log("clicked");
  collapseAndExpandInnerContainers(this.id);
});

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
  console.log("here");

  // Make current item active
  $("#" + itemId).removeClass("inactive-link");
  $("#" + itemId).addClass("active-link");
  $("#" + itemId + "Container").addClass("show");
}

$(document).ready(function () {
  loadData().then(parseData);
  // Start with about expanded
  $("#aboutView").trigger("click");
});
