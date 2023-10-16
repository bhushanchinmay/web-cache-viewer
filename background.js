// originalReload.js
// Listen for clicks on the action button
chrome.action.onClicked.addListener((tab) => {
    // Get the current tab URL
    let url = tab.url;
  
    // Define the prefix value
    let prefix = "https://webcache.googleusercontent.com/search?q=cache:";
  
    // Check if the URL already has the prefix
    if (url.startsWith(prefix)) {
      // Remove the prefix and reload the original page
      let newUrl = url.replace(prefix, "");
      chrome.tabs.update(tab.id, { url: newUrl });
    } else {
      // Add the prefix and load the new page
      let newUrl = prefix + url;
      chrome.tabs.update(tab.id, { url: newUrl });
    }
  });