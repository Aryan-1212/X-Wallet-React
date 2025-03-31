// content.js

// Method 1: Inject a detection object
window.myCryptoWallet = { installed: true, version: "1.0" };

// Method 2: Listen for the custom event for detection
window.addEventListener('detectMyCryptoWallet', function(event) {
  window.dispatchEvent(new CustomEvent('myCryptoWalletResponse', {
    detail: { 
      installed: true,
      version: "1.0" 
    }
  }));
});

// Listen for open wallet event
window.addEventListener('openMyCryptoWallet', function(event) {
  // Send message to background script to open the popup
  chrome.runtime.sendMessage({ action: "openPopup" });
  
  // Alternative approach: Create a visible notification in the page
  const notificationDiv = document.createElement('div');
  notificationDiv.style.position = 'fixed';
  notificationDiv.style.top = '20px';
  notificationDiv.style.right = '20px';
  notificationDiv.style.padding = '15px';
  notificationDiv.style.background = '#4CAF50';
  notificationDiv.style.color = 'white';
  notificationDiv.style.borderRadius = '5px';
  notificationDiv.style.zIndex = '10000';
  notificationDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  notificationDiv.textContent = 'Opening Crypto Wallet...';
  
  document.body.appendChild(notificationDiv);
  
  setTimeout(() => {
    notificationDiv.style.opacity = '0';
    notificationDiv.style.transition = 'opacity 0.5s';
    setTimeout(() => {
      document.body.removeChild(notificationDiv);
    }, 500);
  }, 2000);
});

// Check for wallet open request on page load
(function checkWalletOpenRequest() {
  if (localStorage.getItem('openWalletRequested') === 'true') {
    // Clear the flag
    localStorage.removeItem('openWalletRequested');
    
    // Send message to background script to open the popup
    chrome.runtime.sendMessage({ action: "openPopup" });
  }
})();