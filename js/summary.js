// A dictionary of average ratings and amount of employees per job
var jobData = {};
var stateJobs = {};
var companyRatings = {};

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
    var companyName = data_array[i].standardizedCompanyName;
    var state = data_array[i].stateAbbreviation.state;
    var overallRating = data_array[i].overallRating;
    var recRating = data_array[i].recRating;
    var learnRating = data_array[i].learningGrowthRating;

    if (companyName in jobData) {
      jobData[companyName]["employeeCount"] += 1;
      jobData[companyName]["sumOfOverallRatings"] += overallRating;
      jobData[companyName]["sumOfRecRatings"] += recRating;
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
    }

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

  // jobArray.sort((a, b) => (jobData[a].employeeCount < jobData[b].employeeCount ? -1 : 1));

  console.log(jobData);

  for (var i in jobArray) {
    // Calculate average ratings
    var table = document.getElementById("companyCountTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    console.log(jobArray[i]);

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
      jobData[i]["sumOfLearnGrowRating"] / jobData[i]["employeeCount"];

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

function clearTable() {
  $("#jobsTable").empty();
  return data_array;
}

function displayJobs() {
  // Clear old rows first
  $("#jobsTable").empty();

  for (var rowNum in data_array_copy) {
    var htmlRow = data_array_copy[rowNum].getHTMLTableRow(parseInt(rowNum) + 1);

    $("#jobsTable").append(htmlRow);
  }
}

// Clicking a card opens up the relevant container
$(".card").on("click", function (event) {
  collapseAndExpandContainers("#" + this.id + "Containter");
});

function collapseAndExpandContainers(itemName) {
  console.log(itemName);
  // Apply the active styling 
}

$(document).ready(function () {
  loadData().then(parseData);
});

