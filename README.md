# Job Finder Webpage

An webpage that helps user seek open jobs listed from two providers (GitHub and Search.gov)

## Steps to creating my project

 1. Created and set up an initializer/npm package

	```
	  npm init 
	```

 2. Included jQuery
	 **Browser**
	 Script tag
	 
	   ```
	   <script  src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script  src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	   ```
	**Terminal**
	```
	npm i jquery
	```
 3. Created an HTML and CSS file 
	- index.html
		-Created two inputs to filter position and location
		-Created a selector to choose between providers listed
		-Created a submit button
		-Created a div for results
	- style.css
		-Styled my pages according to the screen size using @media screen (.....)
		
		![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%208.59.31%20AM.png?raw=true)![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%208.59.39%20AM.png?raw=true)
 4. Created a JS file 
	- A page can't be executed safely until the document is "ready." So in order to make sure all my code is read through before execution, I inserted all my code inside the jQuery function `$( document ).ready()`. 
![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%2010.52.04%20AM.png?raw=true)
	Inside, a click event is called. Once the mouse pointer is over the chosen element, and the button is pressed and released. 
	- The results div is emptied.
	- A `createJobListForGovJobs()` function is created, it takes in an object. Created specifically for the Search.gov API.
![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%2011.04.03%20AM.png?raw=true)
	- A `createJobListForGitHub()` is created, it takes in an object. Created specifically for the GitHub API.
![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%2011.04.15%20AM.png?raw=true)
	 - The text inputed into the "options" tab, it's value will be stored in a variable called`skillsValue`.
	 - The text inputed into the "location" tab, it's value will be stored in a variable called `locationValue`.
	 - Using the `skillsValue` and `locationValue`. A query for the GitHub API is created and stored in a variable `requestDataFromGitHubJobs`. A query for the Search.gov API is created and stored in a variable `requestDataFromSearchGovJobs`.![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%2011.04.38%20AM.png?raw=true)
	 - If the chosen "select" element is GitHub Jobs, an AJAX Get request is made to the GitHub Jobs API. If successful, the `createJobListForGitHub()` function is executed, and the data is appended to the result div.![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%2011.05.03%20AM.png?raw=true)
	- If the chosen "select" element is Search.gov Jobs, an AJAX Get request is made to the Search.gov Jobs API. If successful, the `createJobListForGovJobs()` function is executed, and the data is appended to the result div.
![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%2011.04.57%20AM.png?raw=true)

## This is the results displayed:
 - Logo 	
 - Position title 	
 - Company name 	
 - Location 	
 - Date format DD/MM/YYYY

![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%209.00.34%20AM.png?raw=true)
![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%209.03.29%20AM.png?raw=true)

 - If a logo is NOT available.
 - The logo of the provider will be displayed instead. (Github logo will be an example here)

![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%209.00.52%20AM.png?raw=true)
 -  Features: 
 If clicked on the posting, it will directly to the job posting URL.
 - Extra Feature:	
 If a location or a position is not listed. A message "No Jobs found.." will be displayed.

![enter image description here](https://github.com/bkanawati/job-finder/blob/master/Screen%20Shot%202018-11-04%20at%2011.47.57%20AM.png?raw=true)

WARNING: 
If such an error is displayed:
```
Access to XMLHttpRequest at '[https://jobs.github.com/positions.json?search=&location=DUBAI](https://jobs.github.com/positions.json?search=&location=DUBAI)' from origin'[http://127.0.0.1:5500](http://127.0.0.1:5500/)' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
Use a chrome extension to enable CORS:
[Click here to enable CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

## Installation 
Steps to run my code.
```
git clone *Repository URL*
```
```
npm i
```
