# Welcome to JavaScript Training!

This repo contains a working web page built with simple HTML, CSS, and [Vanilla] JavaScript. 

Feel free to use it for training or play around with it! Simply clone it or download it as a zip file.

For cloning:

```
	git clone git@github.com:mcrice123/simple-javascript-page.git
	cd simple-javascript-page
```

For downloading:
![alt text](img/download.jpg "How To Download")

You can use pretty much any text editor you want to run the page in the browser, but I'll provide some instructions on how to use a Sublime code editor for viewing this page in the browser (assuming it's already [installed](https://www.sublimetext.com/download)).


# Viewing in Browser using Sublime Text Editor
### Instructions for Installing the Plugin 'View In Browser'
[Package Control](https://packagecontrol.io/packages/View%20In%20Browser)

Press 'CTRL' + 'SHIFT' + 'P'
Click on 'Package Control: Install Package' in the dropdown
Search for and click on 'View In Browser'

Plugin is now installed. When you open an HTML file and click on 'Tools' > 'View in Browser', a new browser tab opens to display the webpage. The default browser is Firefox, but the user can specify a different browser to use via one of the key combinations below OR by following the directions to configure the browser in settings.
  * CTRL + ALT + F - Firefox
  * CTRL + ALT + C - Chrome
  * CTRL + ALT + I - Internet Explorer
  * CTRL + ALT + S - Safari

### Configuring Browser
How to configure plugin to open files in Google Chrome rather than the default (Firefox).
1. Go to 'Preferences' > 'Package Settings' > 'View in Browser' > 'Settings--User'
2. Copy and paste the following code into the file:
```
{
	"browser": "chrome"
}
```
3. Save the file.

Now when you open an html file and click on 'Tools' > 'View in Browser', the page will appear on a new Chrome tab.