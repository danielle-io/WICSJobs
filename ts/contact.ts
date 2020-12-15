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

    get contactType():string {    
        //linkedin
        if(this.contactInfo.includes("linkedin")){
            return "linkedin";
        }
        //email   
        else{
            return "email";
        }    
   
    }

  }
  