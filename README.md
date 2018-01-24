




# Viewing in Browser using Sublime Text Editor
### Instructions for Installing the Plugin 'View In Browser'
[Package Control](https://packagecontrol.io/packages/View%20In%20Browser)

Press 'CTRL' + 'SHIFT' + 'P'
Click on 'Package Control: Install Package' in the dropdown
Search for and click on 'View In Browser'

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