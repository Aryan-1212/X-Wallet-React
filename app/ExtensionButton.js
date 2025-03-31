"use client";

// Standalone function for checking and handling wallet extension
export const handleButtonClick = () => {
  // Check if window exists (browser environment)
  if (typeof window === "undefined") return;

  // Check for extension
  const checkExtension = async () => {
    // Method 1: Try detecting via window object injection
    if (window.myCryptoWallet) {
      openExtension();
      return;
    }
    
    // Method 2: Try detecting via custom event with timeout
    return new Promise((resolve) => {
      const detectionEvent = new CustomEvent('detectMyCryptoWallet', {
        detail: { id: Date.now() }
      });
      
      const handleResponse = () => {
        window.removeEventListener('myCryptoWalletResponse', handleResponse);
        openExtension();
        resolve(true);
      };
      
      window.addEventListener('myCryptoWalletResponse', handleResponse, { once: true });
      window.dispatchEvent(detectionEvent);
      
      // Timeout removed as it was causing the extension to close
      // We're keeping the connection open indefinitely now
    });
  };
  
  // Start the extension check
  checkExtension();
};

const openExtension = () => {
  // Use custom event to communicate with the extension
  window.dispatchEvent(new CustomEvent('openMyCryptoWallet', {
    detail: { timestamp: Date.now() }
  }));
  
  // Optionally, we can also store a flag to indicate the user wants to open the wallet
  localStorage.setItem('openWalletRequested', 'true');
};

const askToInstallLocally = () => {
  alert(
    "It looks like the extension is not installed. Please follow these steps:\n\n" +
      "1. Open Chrome and go to chrome://extensions/\n" +
      "2. Enable 'Developer mode' (toggle at the top-right corner)\n" +
      "3. Click 'Load unpacked' and select the folder where your extension is stored.\n" +
      "4. Once loaded, refresh this page and try again."
  );
};

// No component export - only exporting the function
export {};