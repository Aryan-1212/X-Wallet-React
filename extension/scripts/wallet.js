// DOM elements
const connectWalletBtn = document.getElementById('connect-wallet-btn');
const createWalletBtn = document.getElementById('create-wallet-btn');
const importWalletBtn = document.getElementById('import-wallet-btn');
const logoutBtn = document.getElementById('logout-btn');
const walletAddressInput = document.getElementById('wallet-address');
const walletMessage = document.getElementById('wallet-message');

// Check authentication status
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    if (!currentUser.isAuthenticated) {
        // Not authenticated, redirect to login
        window.location.href = 'login.html';
        return;
    }
    
    // Check if user already has a connected wallet
    if (currentUser.walletAddress) {
        walletMessage.textContent = `Wallet already connected: ${currentUser.walletAddress}`;
        walletMessage.style.color = 'green';
        
        // Redirect to main extension after 2 seconds
        setTimeout(() => {
            window.location.href = 'popup.html';
        }, 2000);
    }
});

// Connect existing wallet
connectWalletBtn.addEventListener('click', () => {
    const walletAddress = walletAddressInput.value.trim();
    
    if (!walletAddress) {
        walletMessage.textContent = 'Please enter a wallet address';
        walletMessage.style.color = 'red';
        return;
    }
    
    // Simple wallet address validation (Ethereum-style)
    const walletRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!walletRegex.test(walletAddress)) {
        walletMessage.textContent = 'Invalid wallet address format';
        walletMessage.style.color = 'red';
        return;
    }
    
    // Save wallet address to user data
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    currentUser.walletAddress = walletAddress;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    walletMessage.textContent = 'Wallet connected successfully!';
    walletMessage.style.color = 'green';
    
    // Redirect to main extension interface
    setTimeout(() => {
        window.location.href = 'popup.html';
    }, 1500);
});

// Create new wallet
createWalletBtn.addEventListener('click', () => {
    // For demo, generate a random Ethereum-style address
    // In production, you would use a proper wallet creation library
    const randomHex = Array.from({length: 40}, () => 
        Math.floor(Math.random() * 16).toString(16)).join('');
    const newAddress = `0x${randomHex}`;
    
    localStorage.setItem("newAddress", newAddress);
    walletAddressInput.value = newAddress;
    
    walletMessage.textContent = 'New wallet created! Click "Connect Wallet" to use it.';
    walletMessage.style.color = 'green';
});

// Import existing wallet (in a real app, this would open a private key import interface)
importWalletBtn.addEventListener('click', () => {
    // This would typically open a modal for importing via private key, seed phrase, etc.
    walletMessage.textContent = 'To import a wallet, enter your wallet address above';
    walletMessage.style.color = 'blue';
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    // Remove auth data
    localStorage.removeItem('currentUser');
    
    // Redirect to login page
    window.location.href = 'login.html';
});