// A dictionary of companies and people's email or linkedin 
var sorted_array = {};
var currentContact;

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

  insertCard();
}

// for (var i in sorted_array){    
//     if(sorted_array[i].contactInfo.length > 1){
//         for (var c in sorted_array[i].contactInfo){
//             currentContact = sorted_array.contactInfo[c];
//         }
//     }
//     else{
//         currentContact = sorted_array.contactInfo[i][0];
//     }
// }

// Update the HTML summary text



const cardArea = document.getElementById("contactViewContainer");

function insertCard() {
    for (var i in sorted_array){   
        $("#company-name").text(i);
        // console.log("hii" + i + sorted_array[i]);
        if(sorted_array[i].length > 1){
            for (var c in sorted_array[i]){
                console.log("c" + sorted_array[i]);
                console.log("ccccccc" + sorted_array[i][c]);
                currentContact = sorted_array[i][c];
                sortContact(currentContact);
            }
        }
        else{
            currentContact = sorted_array[i];
            // console.log("single" + currentContact);
            sortContact(currentContact);
        }
    }

//     $("#company-name").text()
// var cardContainer = document.getElementById("contact-card");
// var cardContent = "";
// sorted_array.forEach(function(elem){
//     if(i == 0){
//         content += 'div class = "row">'
//     }
//     if(elem.contactInfo.length > 0){
//         if(i == 0){
//             content += 'div class = "row">'
//         }


//     }
// });

}

function sortContact(currentContact){
    if(currentContact.includes("linkedin")){
        $("#linkedin-info").text(currentContact);
    }
    else{
        $('#email-info').text(currentContact);
    }
}

$(document).ready(function () {
  loadContactData().then(parseContactData);
  // Start with about expanded
  // Hide state map tables by default
//   document.getElementById("stateCompanyData").style.display = "none";
//   $("#aboutView").trigger("click");
});
