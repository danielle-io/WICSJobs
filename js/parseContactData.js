// A dictionary of companies and people's email or linkedin 
var sorted_array = {};


function parseContactData(raw_contact_data) {
  if (raw_contact_data === undefined) {
    console.log("undefined");
    return;
  }

  contact_array = raw_contact_data.map(function(contact){
    return new Contact(contact.company_name, contact.contact_info);
  });
             
  console.log(contact_array);
 
  contact_array.forEach(element => {
      if(element.companyName in sorted_array){
          sorted_array[element.companyName].push(element.contactInfo);
      }
      else{
          sorted_array[element.companyName] = [element.contactInfo];
      }
  })

  console.log(sorted_array);
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

$(document).ready(function () {
  loadContactData().then(parseContactData);
  // Start with about expanded
  // Hide state map tables by default
//   document.getElementById("stateCompanyData").style.display = "none";
//   $("#aboutView").trigger("click");
});
