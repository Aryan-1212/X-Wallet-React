// DOM elements
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginFormElement = document.getElementById('login-form-element');
const signupFormElement = document.getElementById('signup-form-element');
const loginMpin = document.getElementById('login-mpin');
const signupMpin = document.getElementById('signup-mpin');
const errorMessage = document.getElementById('error-message');

// Tab switching logic
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    errorMessage.textContent = '';
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    errorMessage.textContent = '';
});

// Login form submission
loginFormElement.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // const enteredMpin = document.getElementById('login-mpin').value; // Updated ID
    
    try {
        // Validate inputs
        if (!email || !password) {
            throw new Error('Please fill in all fields');
        }
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Verify MPIN
        // if (enteredMpin !== user.mpin) {
        //     throw new Error('Invalid MPIN');
        // }
        
        // Save authentication state
        localStorage.setItem('currentUser', JSON.stringify({
            email: user.email,
            isAuthenticated: true,
            mpin: user.mpin // Store MPIN in session
        }));
        
        // Redirect to wallet connect page
        window.location.href = 'connect-wallet.html';
        
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.color = 'red';
    }
});

// Signup form submission
signupFormElement.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    const mpin = document.getElementById('signup-mpin').value;
    
    try {
        // Validate inputs
        if (!email || !password || !confirmPassword || !mpin) {
            throw new Error('Please fill in all fields');
        }
        
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }

        // Validate MPIN - should be exactly 4 digits
        if (!/^\d{4}$/.test(mpin)) {
            throw new Error('MPIN must be exactly 4 digits');
        }
        
        // Get existing users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if user already exists
        if (users.some(u => u.email === email)) {
            throw new Error('User already exists');
        }
        
        // Store MPIN as a key in localStorage
        localStorage.setItem("mpin", mpin);
        
        // Add new user with MPIN
        const newUser = {
            email,
            password,
            mpin
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Show success message and switch to login
        errorMessage.textContent = 'Account created successfully! Please log in.';
        errorMessage.style.color = 'green';
        
        // Switch to login tab
        loginTab.click();
        
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.color = 'red';
    }
});

// Check if user is already authenticated on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    if (currentUser.isAuthenticated) {
        // User is already logged in, redirect to wallet connect
        window.location.href = 'connect-wallet.html';
    }
    // localStorage.removeItem("currentUser");
});