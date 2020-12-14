class Contact {
    private companyName: string;
    private contactInfo: string;
  
    constructor(contactData: Contact) {
      this.companyName = contactData.companyName;
      this.contactInfo = contactData.contactInfo;
    }
  
    get standardizedCompanyName() {
      // lowercase with first letter capital
      return this.companyName.charAt(0).toUpperCase() + this.companyName.slice(1);
    }

    get contactType():string {    
        //linkedin
        if(this.contactInfo.includes("linkedin")){
            return this.contactInfo;
        }
        //email   
        else{
            return "mailto:" + this.contactInfo;
        }    
   
    }
    
  }
  