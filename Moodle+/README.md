# Moodle+
You must have used moodle in your first semester, and observed it required you to solve a simple math question as a CAPTCHA.

Now, build a chrome extension which will solve this question automatically!

## Setting up the extension
* Start from the boilerplate/template of the chrome extension given in the [Moodle+](/Moodle+/) folder
* To install a Chrome Extension, first go to `chrome://extensions` and toggle on `Developer mode`
* Then click `Load unpacked` and select the `Moodle+` folder. Note that you will have to reload the extension each time you make changes
* The `manifest.json` file tells Chrome about your extension, and requests it to include the `login.js` script whenever the url matches `https://moodle.iitd.ac.in/login/index.php`

## Solving the CAPTCHA!
* Use your knowledge of HTML to inspect the moodle login page and identify the correct selector from where you can get the captcha question
* Extract the question string by reading the DOM using JavaScript, and then apply String operations to extract the relevant parts of the problem
* Use if-else logic statements to solve the math question and get the required answer
* Use DOM Manipulation again to fill the value in the input field.

## Bonus
* Try to make the code submit the login form too! (You may have to store the credentials for this (Make sure to remove them before pushing your code to GitHub))
* Make a separate file `style.js`, and add it to `content_scripts` in `manifest.json` such that it loads each time you open any moodle page. (You may have to use wildcards for this)
* Using DOM selector you can change the style of the elements. So now, try to redesign moodle according to your own creativity! For instance, try making a dark-mode for moodle!


##  With the captcha and dark mode
https://user-images.githubusercontent.com/109871116/182167059-a65fe28f-0802-4f88-8514-8370644c2dc1.mp4


##  With the captcha,credentials and submit(commented out in submission)
https://user-images.githubusercontent.com/109871116/182167397-a509cc1a-1fb8-4397-93c7-265527d2b205.mp4

