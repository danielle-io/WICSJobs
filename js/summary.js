var jobCounts = {};
var stateJobs = {};

function parseData(raw_data) {
  if (raw_data === undefined) {
    return;
  }

  var data_array = raw_data.map(function (data) {
    return new Job(data);
  });

  // Set earliest and latest dates
  getCounts(data_array);
}

function getCounts(data_array) {
  for (var i in data_array) {
    var companyName = data_array[i].standardizedCompanyName;
    var state = data_array[i].stateAbbreviation.state;
    if (companyName in jobCounts) {
      jobCounts[companyName] += 1;
    } else {
      jobCounts[companyName] = 1;
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
  var jobArray = createJobArray(jobCounts);

  jobArray.sort((a, b) => (jobCounts[a] < jobCounts[b] ? -1 : 1));

  for (var i in jobArray) {
    var table = document.getElementById("companyCountTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = jobArray[i].job;
    cell2.innerHTML = jobArray[i].count;
  }
}

function createJobArray(jobCounts) {
  var jobArr = [];
  for (i in jobCounts) {
    jobArr.push({
      job: i,
      count: jobCounts[i],
    });
  }
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

function searchJobs(searchWords) {
  // Ignore casing of search and results
  var lowerCaseSearch = searchWords.toLowerCase();

  return currentSearch;
}

//Wait for the DOM to load
$(document).ready(function () {
  loadData().then(parseData);
});
