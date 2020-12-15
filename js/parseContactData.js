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

// const cardArea = document.getElementById("contactViewContainer");

function insertCard() {
    for (var i in sorted_array){   
        $("#company-name").text(i);

        if(sorted_array[i].length > 1){
            for (var c in sorted_array[i]){
                console.log("c" + sorted_array[i]);
                console.log("ccccccc" +  sorted_array[i][c]);
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
});
