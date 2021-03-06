# Virtual Magic Awards

Single-page web project for a virtual awards ceremony hosted via embedded YouTube video. Originally built for PSU Student Media's SALPies awards that were hosted virtually during the COVID-19 pandemic in 2020, with permission this code base has been updated to provide an example of virtual event hosting without any specific branding. It is highly recommended to create your own custom assets using the template below as an example of image dimensions, in order to have a unique design that does not copy the current template.

## Installation

1. Make sure you have PHP installed on your machine
2. Download XAMPP if not already downloaded. Start the Apache Web Server in the manager application.
3. Navigate to your XAMPP /htdocs folder and clone git repository
4. You should now be able to load the website at http://localhost/virtual-awards/

## Code Organization

This project is built in a series of PHP templates that contain the source code for different elements of the web site's functionality. These templates are as follows:

1. **index.php** - This template is the index page that defines the HTML markup and includes links to the other templates
2. **categories.html** - This template contains markup for the categories section below the YouTube player, where you can add links that will skip to certain parts of the video.
3. **magic.html** - This template contains all of the elements of the initial animation that appears when loading. 
4. **player.html** - This template contains markup for the YouTube video player which also uses the YouTube API to implement interactive functionality. Currently, the player is set to a placeholder video that can be replaced by changing the src value in the iframe with id value 'video-iframe'.

## How to add Video Player links
Open /templates/categories.php and scroll down to the divs containing the 'card' class and you will see some <a> tags containing on click events. They will look like this:
```
        onclick="seekTo(20);"
```
The number being passed as an argument is the total number of seconds to skip from the beginning of the video. This may require some calculation using the timestamps provided in the YouTube player. When you determine the value of how many seconds you want to skip in the video, add that number as the value.

## How to replace opening animation
The opening animation is created using HTML elements in the /templates/magic.php file, CSS in the /css/style.css file and JS scirpts in /js/scripts.js.

In the magic.php file, you can replace all of the html content with any kind of html content you wish to use to display your opening animation. 

You can then find all of the styles for the animation under '/* INTRO ANIMATION STYLES */' in the CSS file, which were automatically generated when creating the animation in Adobe XD. You can use whatever program you want to create the animation and use the generated styles to replace the Intro Animation section of the CSS file. 

## Credits
- **Design, Assets & Animation:** John Rojas
- **Source Code:** George Olson

