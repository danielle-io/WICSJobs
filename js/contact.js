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
        console.log("hi");
        console.log("hello" + this.contactInfo);
        if (this.contactInfo.includes("linkedin")) {
            var splitText = this.contactInfo.split("/in/");
            console.log(splitText);
            var linkAddress = splitText[1];
            // "<span class='iconify' data-icon='fa-linkedin' data-inline='false'></span>"
            // <i class="fab fa-linkedin"></i>
            this.contactInfo = "<span class='iconify' data-icon='fa-linkedin' data-inline='false'></span>" +
                "<a target='_blank' style='margin-left: 20px' href=" +
                this.contactInfo +
                "\>" +
                // "/in/" + 
                linkAddress +
                "</a>";
        }
        return this.contactInfo;
    }
}
