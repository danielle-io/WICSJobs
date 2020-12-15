// A dictionary of companies and people's email or linkedin
var sorted_contact_array = {};

function parseContactData(raw_contact_data) {
  if (raw_contact_data === undefined) {
    console.log("undefined");
    return;
  }

  contact_array = raw_contact_data.map(function (contact) {
    return new Contact(contact.company_name, contact.contact_info);
  });

  contact_array.forEach((element) => {
    // console.log(element.convertLinkedInLink);
    element.convertLinkedInLink;
    if (element.companyName in sorted_contact_array) {
      sorted_contact_array[element.companyName].push(element.contactInfo);
    } else {
      sorted_contact_array[element.companyName] = [element.contactInfo];
    }
  });
  generateCards();
}

$(document).ready(function () {
  loadContactData().then(parseContactData);
});
