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
    // Displays clickable linkedin link with icon on back of contact card
    get convertLinkedInLink() {
        if (this.contactInfo.includes("linkedin")) {
            var splitText = this.contactInfo.split("/in/");
            console.log(splitText);
            var linkAddress = splitText[1];
            this.contactInfo =
                "<span class='iconify' data-icon='fa-linkedin' data-inline='false'></span>" +
                    "<a target='_blank' style='margin-left: 20px' href=" +
                    this.contactInfo +
                    ">" +
                    linkAddress +
                    "</a>";
        }
        else {
            this.contactInfo = "<span class='iconify' data-icon='mdi-email' data-inline='false'></span>" + "<h7 style='margin-left:20px;word-wrap:break-word'>" + this.contactInfo + "</h7>";
        }
        return this.contactInfo;
    }
}
