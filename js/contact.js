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
    get contactType() {
        //linkedin
        if (this.contactInfo.includes("linkedin")) {
            return "linkedin";
        }
        //email   
        else {
            return "email";
        }
    }
}
