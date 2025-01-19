export const checkValidData = (email, password) => {
    // Email validation regex
    const isEmailValid = /^[\w.+-]+@\w+\.\w+$/.test(email);
  
    // Password validation regex: Minimum 8 characters, at least one uppercase, one lowercase, and one digit or special character
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d|(?=.*\W)).{8,}$/.test(password);
  
    if (!isEmailValid) return "Email ID is not valid"; // Trigger error if email is invalid
    if (!isPasswordValid) return "Password is not valid"; // Trigger error if password is invalid
  
    return null; // Return null if both email and password are valid
  };
  