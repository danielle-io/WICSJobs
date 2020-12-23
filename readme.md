
<h1>WICS Jobs :sparkles:</h1>
Link to published website: https://danielle-io.github.io/WICSJobs/

<h2>About</h2>
This project was created by our team of two over several days, after collecting job experience data from past and present WICS (Women in Information and Computer Sciences) Committee members. The data was then converted to JSON format, parsed, and normalized so it can be searched and sorted by anyone interested in the experience of their WICS peers at a particular company or location. The purpose of this webpage is to act as a source for submitting and accessing anonymous peer reviews and connecting with others who have worked at a company of interest (using our 'Contact' tab, where contact info is kept separate from the review submitted). In addition to our searchable, sortable tables, we added an interactive map of the United States, which allows users to click and view company data by state (the opacity of the state reflects the amount of data submitted for it), but since our data so far only covers a few states, we added a state fact class as a fun way to still offer some information for states we have no company data for. 

<h2>To Run:</h2>
If TypeScript is not installed run:

<pre><code>npm install -g typescript</pre></code>

If you make any changes to the TypeScript files run:

<pre><code>tsc --p tsconfig.json</pre></code>

Then simply open index.html to view webpage.

<h2>App Images</h2>
<h3>Home Page Details</h3>
<img src="/assets/images/app_images/WICSJobsHome.png">

<h3>Map View of Company Data</h3>
<img src="/assets/images/app_images/WICSJobsMap.png">

<h3>Sort and Search Review Averages by Company</h3>
<img src="/assets/images/app_images/WICSJobsSumTable.png">

<h2>Sources:</h2>
<ul>
    <li>State abbreviation conversions via https://gist.github.com/mshafrir/2646763</li>
    <li>State facts converted to .csv then exported as JSON from https://www.infoplease.com/us/states/fifty-states-and-fifty-fun-facts</li>
</ul>