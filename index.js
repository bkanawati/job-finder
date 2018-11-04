// GitHub Jobs URL https://jobs.github.com/positions.json?search=....&location=... query location and keyword
// Search.gov Jobs URL https://jobs.search.gov/jobs/search.json?query=...+in+... query location and keyword

$(document).ready(function() {
    
    $('#search-btn').click(function(){
        $('#jobList-results').empty();
        

        // Once clicled on "Search", the search bar will be lifted up, so data is appeneded at the bottom
        $(".container").css("height", "50vh");

        // Function created to extract data from the Search.gov API
        function createJobListForGovJobs(dataInfo) {
            let result = "";
            for (let i = 0; i < dataInfo.length; i++) {
                result += "<div  class='list' style='cursor: pointer;' onclick='window.location=" + '"' + dataInfo[i].url + '"' + ";'> ";
                result += "<img src='https://search.gov/img/searchdotgovlogo.png'></img>"
                result += "<div> <h1>" + dataInfo[i].position_title + "</h1> </div>";
                result += "<div> <h2>" + dataInfo[i].organization_name + "</h2> </div>";

                let fixedLocation = "";
                for (let y = 0; y < dataInfo[i].locations.length; y++) {
                    fixedLocation += dataInfo[i].locations[y] + "<br/>";
                }
                result += "<div> <h2>" + fixedLocation + "</h2> </div>";

                // Date format DD MM YYYY
                let fixedDate = dataInfo[i].start_date.split("-");
                result += "<div> <h3>" + fixedDate[2] + "/" + fixedDate[1] + "/" + fixedDate[0] + "</h3> </div>";
                result += "</div> "
            }
            return result;
        }

        // Function created to extract data from the GitHub API
        function createJobListForGitHub(dataInfo) {
            let result = "";

            for (let i = 0; i < dataInfo.length; i++) {
                result += "<div  class='list' style='cursor: pointer;' onclick='window.location=" + '"' + dataInfo[i].url + '"' + ";'> ";

                // If logo not found, display GitHub Jobs logo
                if(dataInfo[i].company_logo == undefined) {
                    result += "<img src='https://pbs.twimg.com/profile_images/625760778554093568/dM7xD4SQ_400x400.png'></img>";
                } else {
                result += "<img src='" + dataInfo[i].company_logo + "'></img>"
                }

                result += "<div> <h1>" + dataInfo[i].title + "</h1> </div>";
                result += "<div> <h2>" + dataInfo[i].company + "</h2> </div>";

                let location = dataInfo[i].location.split(";");
                let fixedLocation = "";
                for (let y = 0; y < location.length; y++) {
                    fixedLocation += location[y] + "<br/>";
                }
                result += "<div> <h2>" + fixedLocation + "</h2> </div>";

                // Date format DD MM YYYY
                result += "<div> <h3>" + dataInfo[i].created_at.slice(8,10) + " " + dataInfo[i].created_at.slice(3,8)+ " " + dataInfo[i].created_at.slice(24) + "</h3> </div>";
                result += "</div> "
            }
            return result;
        }

        // The skills the user chose
        let skillsValue = $('#skills').val();

        // The location the user chose
        let locationValue = $('#location').val();

        // The Query that will be added to GitHub Jobs Url to extract the data needed
        let requestDataFromGitHubJobs = "?search=" + skillsValue + "&location=" + locationValue;

        // The Query that will be added to Search.gov Jobs Url to extract the data needed
        let requestDataFromSearchGovJobs = "?query=" + skillsValue + "+in+" + locationValue;
        
        
        // If the "Search.gov" option is selected, call a "Get" request from the Search.gov Jobs API
        if ($('select').val() == 'searchGov') {
            $.ajax({
                url: 'https://jobs.search.gov/jobs/search.json' + requestDataFromSearchGovJobs,
                method: 'get',
                dataType: 'json',
                success: function(data) {
                    if (data.length === 0) {
                        $('#jobList-results').append("<h4>No Jobs found...</h4>")
                    }
                    $('#jobList-results').append(createJobListForGovJobs(data));
                    //console.log((data));
                }
            });
        };

        // If the "GitHub Jobs" option is selected, call a "Get" request from the GitHub Jobs API
        if ($('select').val() == 'gitHub') {
            $.ajax({
                url: 'https://jobs.github.com/positions.json' + requestDataFromGitHubJobs,
                method: 'get',
                dataType: 'json',
                success: function(data) {
                    if (data.length === 0) {
                        $('#jobList-results').append("<h4>No Jobs found...</h4>")
                    }
                    $('#jobList-results').append(createJobListForGitHub(data));
                    //console.log(data);
                }
            });
        }
    });
});