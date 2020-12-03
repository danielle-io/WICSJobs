"use strict";
class Job {
    constructor(jobData) {
        this.timestamp = new Date(jobData.timestamp);
        this.companyName = jobData.companyName;
        this.jobType = jobData.jobType;
        this.positionName = jobData.positionName;
        this.location = jobData.location;
        this.remote = jobData.remote;
        this.overallRating = jobData.overallRating;
        this.detailsText = jobData.detailsText;
        this.duration = jobData.duration;
        this.learningGrowthRating = jobData.learningGrowthRating;
        this.recRating = jobData.recRating;
        this.contactInfo = jobData.contactInfo;
    }
    get standardizedCompanyName() {
        // lowercase with first letter capital
        return this.companyName.charAt(0).toUpperCase() + this.companyName.slice(1);
    }
}
