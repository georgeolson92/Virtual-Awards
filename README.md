# SALPies

Single-page web project for the virtual SALPies awards in 2020. This project has been built to be able to be re-used for other virtual events using a hosted YouTube video. 

## Installation

1. Make sure you have PHP installed on your machine
2. Download XAMPP if not already downloaded. Start the Apache Web Server in the manager application.
3. Navigate to your XAMPP /htdocs folder and clone git repository
4. You should now be able to load the website at http://localhost/SALPies/

## Code Organization

This project is built in a series of PHP templates that contain the source code for different elements of the web site's functionality. These templates are as follows:

### index.php
This template is the index page that defines the HTML markup and includes links to the other templates
### categories.php
This template contains markup for the categories section below the YouTube player, where you can add links that will skip to certain parts of the video.
### magic.php
This template contains all of the elements of the initial animation that appears when loading. If using a different animation, you can completely clear out this code with something different. 

### player.php
This template contains markup for the YouTube video player which also uses the YouTube API to implement interactive functionality. 

## How to add Video Player links
Open /templates/categories.php and scroll down to the divs containing the 'card' class and you will see some <a> tags containing on click events. They will look like this:
        onclick="seekTo(20);"
The number being passed as an argument is the total number of seconds to skip from the beginning of the video. This may require some calculation using the timestamps provided in the YouTube player. When you determine the value of how many seconds you want to skip in the video, add that number as the value.


