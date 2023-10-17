## Description
Web Cache Viewer is a chrome extension that lets you view the web cache of any web page. The web cache is a snapshot of a web page that Google has stored in its servers. This can be useful for accessing pages that are temporarily unavailable or have been removed from the original source.

## How it works
The extension adds a button to the browser toolbar that allows you to reload the current page with a web cache prefix. The web cache prefix is https://webcache.googleusercontent.com/search?q=cache: which tells Google to return the cached version of the page.

If the current page already has the web cache prefix, the extension will remove it and reload the original page.

## Installation
To install the extension, follow these steps:

1. Download the zip file of the project from GitHub.
2. Unzip the file and extract the folder notify.
3. Open the Extension Management page by navigating to chrome://extensions or by clicking on the menu icon and selecting More Tools > Extensions.
4. Enable Developer mode by toggling the switch in the upper right corner.
5. Click on the Load unpacked button and select the notify folder.
6. The extension should appear in the toolbar with a purple puzzle piece icon.

## Usage
To use the extension, follow these steps:

1. Navigate to any web page that you want to reload with a web cache prefix.
2. Click on the extension icon in the toolbar.
3. The page will reload with a web cache prefix and show you the cached version of the page.
4. To go back to the original page, click on the extension icon again.
5. The page will reload without the web cache prefix and show you the original version of the page.

## Permissions
The extension requires the following permissions:

- activeTab: To access and modify the current tab URL.
- scripting: To execute code in the current tab context.

## Resources
For more information on how to make a chrome extension, you can refer to below resources:

- Chrome Extensions getting started guides: A series of tutorials that teach you how to build real-world extensions with different features and APIs.

## Feedback
If you have any feedback or suggestions for improving this extension, please feel free to create an issue or a pull request on GitHub. I would love to hear from you! 😊