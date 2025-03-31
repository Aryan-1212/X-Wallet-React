// aa file aj complete working che

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JS Loaded Successfully!");

    // Fetching Elements
    const privateKeyInput = document.querySelector("#privateKey");
    const walletAddressInput = document.querySelector("#address");
    const amountInput = document.querySelector("#amount");
    const checkBalanceBtn = document.querySelector("#check_balance");
    const transferBtn = document.querySelector("#form");
    const networkSelect = document.querySelector("#network"); // New select element
    const statusMessage = document.querySelector("small");
    const transactionLink = document.querySelector("#link");
    const mpinInput = document.getElementById('login-mpin');
    
    let provider;

    // if(localStorage.getItem(newAddress)){
    //     if(localStorage.getItem(newAddress) != privateKeyInput.value){
    //         alert("⚠️ Invalid private key.", "error");
    //         return;

    //     }
    // }

    function updateProvider() {
        const selectedNetwork = networkSelect.value;
        if (selectedNetwork === "sepolia") {
            provider = new ethers.providers.JsonRpcProvider(
                "https://sepolia.infura.io/v3/539628f55e3c429896373f96a382ba11"
            );
        } else {
            provider = new ethers.providers.JsonRpcProvider(
                "https://polygon-mainnet.g.alchemy.com/v2/I7cbIbgtNsh-1XfM_IFaMy7FMVoSVZZK"
            );
        }
    }

    // Update provider on network change
    networkSelect.addEventListener("change", updateProvider);
    updateProvider(); // Initialize the provider based on default selection

    function showMessage(message, type = "success") {
        statusMessage.textContent = message;
        statusMessage.style.color = type === "error" ? "red" : "green";
    }

    function validateMpin() {
        const enteredMpin = mpinInput.value;
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        
        if (!enteredMpin) {
            showMessage("Please enter your MPIN", "error");
            return false;
        }

        if (enteredMpin !== localStorage.getItem("mpin")) {
            showMessage("Invalid MPIN", "error");
            mpinInput.value = ''; // Clear the MPIN input
            return false;
        }

        return true;
    }

    async function fetchBalance() {
        if (!validateMpin()) {
            return;
        }

        console.log("🔍 Fetching balance...");
        const privateKey = localStorage.getItem("newAddress");

        // if (!privateKey) {
        //     showMessage("⚠️ Enter your private key.", "error");
        //     return;
        // }

        try {
            const wallet = new ethers.Wallet(privateKey, provider);
            const balance = await provider.getBalance(wallet.address);
            const balanceInEth = ethers.utils.formatEther(balance);

            showMessage(`✅ Balance: ${balanceInEth} ${networkSelect.value === "sepolia" ? "ETH" : "MATIC"}`);
        } catch (error) {
            showMessage("❌ Error fetching balance. Invalid private key?", "error");
            console.error("⚠️ Balance Fetch Error:", error);
        }
    }

    async function sendTransaction() {
        if (!validateMpin()) {
            return;
        }

        console.log("🚀 Sending transaction...");
        const privateKey = localStorage.getItem("newAddress")
        const recipientAddress = walletAddressInput.value.trim();
        const amount = amountInput.value.trim();

        if (!privateKey || !recipientAddress || !amount) {
            showMessage("⚠️ Fill all fields before proceeding.", "error");
            return;
        }

        if (!ethers.utils.isAddress(recipientAddress)) {
            showMessage("⚠️ Invalid recipient address format.", "error");
            return;
        }

        try {
            const wallet = new ethers.Wallet(privateKey, provider);
            const balance = await provider.getBalance(wallet.address);
            const balanceInEth = ethers.utils.formatEther(balance);

            if (parseFloat(amount) >= parseFloat(balanceInEth)) {
                showMessage("⚠️ Insufficient balance.", "error");
                return;
            }

            showMessage("⏳ Transaction in progress...");

            const tx = {
                to: recipientAddress,
                value: ethers.utils.parseEther(amount),
                gasLimit: 21000,
                gasPrice: await provider.getGasPrice(),
            };


            const transaction = await wallet.sendTransaction(tx);
            await transaction.wait();   

            showMessage("✅ Transaction successful!");
            const explorerUrl =
                networkSelect.value === "sepolia"
                    ? `https://sepolia.etherscan.io/tx/${transaction.hash}`
                    : `https://polygonscan.com/tx/${transaction.hash}`;
            transactionLink.href = explorerUrl;
            transactionLink.style.display = "block";
        } catch (error) {
            showMessage("❌ Transaction failed. Check funds and try again.", "error");
            console.error("⚠️ Transaction Error:", error);
        }
    }

    checkBalanceBtn.addEventListener("click", fetchBalance);
    transferBtn.addEventListener("click", sendTransaction);

    // Clear MPIN input when page loads
    mpinInput.value = ''; // Clear MPIN input on page load
});
