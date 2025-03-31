// In background.js
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "isInstalled") {
      sendResponse({ installed: true });
    }
    return true; // Required for async responses
  }
);

// Handle internal messages from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "openPopup") {
    try {
      // Attempt to open the popup programmatically
      chrome.action.openPopup();
      sendResponse({ success: true });
    } catch (error) {
      console.error("Could not open popup:", error);
      
      // Alternative method: Create a notification or badge to prompt user
      chrome.action.setBadgeText({ text: "!" });
      chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
      
      // Force focus on extension 
      // This is a workaround since direct popup opening might not be supported
      chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") }, function(tab) {
        // After creating the tab, you can close it immediately if you want
        // or leave it open as a fullscreen version of your wallet
        // chrome.tabs.remove(tab.id);
      });
      
      sendResponse({ success: false, error: error.message });
    }
  }
  return true;
});