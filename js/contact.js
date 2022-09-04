"use strict";
class Contact {
  constructor(company_name, contact_info) {
    this.companyName = company_name;
    this.contactInfo = contact_info;
  }
  get standardizedCompanyName() {
    // lowercase with first letter capital
    return this.companyName.charAt(0).toUpperCase() + this.companyName.slice(1);
  }
  // Displays clickable Linkedin link with icon on back of contact card
  get convertLinkedInLink() {
    if (this.contactInfo.includes("linkedin")) {
      var splitText = this.contactInfo.split("/in/");
      var linkAddress = splitText[1];
      this.contactInfo =
        "<div class='contact-card-back'><span class='iconify linked-in' style='padding-top:1px' data-icon='fa-linkedin' data-inline='true'></span>" +
        "<a target='_blank' class='contact-text' href=" +
        this.contactInfo +
        ">" +
        linkAddress +
        "</a></div>";
    } else {
      this.contactInfo =
        "<div class='contact-card-back'><span class='iconify email' data-icon='mdi-email' data-inline='true'></span>" +
        "<span class='contact-text'>" +
        this.contactInfo +
        "</span></div>";
    }
    return this.contactInfo;
  }
}
