class Contact {
  private companyName: string;
  private contactInfo: string;

  constructor(company_name: string, contact_info: string) {
    this.companyName = company_name;
    this.contactInfo = contact_info;
  }

  get standardizedCompanyName() {
    // lowercase with first letter capital
    return this.companyName.charAt(0).toUpperCase() + this.companyName.slice(1);
  }

  // Displays clickable Linkedin link with icon on back of contact card
  get convertLinkedInLink(): string {
    if (this.contactInfo.includes("linkedin")) {
      var splitText = this.contactInfo.split("/in/");
      var linkAddress = splitText[1];
      this.contactInfo =
        "<span><span class='iconify' data-icon='fa-linkedin' data-inline='true'></span>" +
        "<a target='_blank' style='margin-left: 26px;' href=" +
        this.contactInfo +
        ">" +
        linkAddress +
        "</a></span>";
    } else {
      this.contactInfo =
        "<span class='iconify' data-icon='mdi-email' data-inline='true' style='margin-top: 2px; margin-right: 2px;'></span>" +
        "<span style='margin-left: 26px;'>" +
        this.contactInfo +
        "</span>";
    }
    return this.contactInfo;
  }
}
