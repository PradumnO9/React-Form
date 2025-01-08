const useValidation = () => {
  let email_regx = /^\S+@\S+\.\S+$/;
  // To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
  let password_regx =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

  const validateEmail = (email) => {
    if (!email_regx.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = (password) => {
    if (!password_regx.test(password)) {
      return false;
    } else {
      return true;
    }
  };

  const validateAddress = (address) => {
    if (address.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const validatePinCode = (pinCode) => {
    if (pinCode.length !== 6) {
      return false;
    } else {
      return true;
    }
  };

  return { validateEmail, validatePassword, validateAddress, validatePinCode };
};

export default useValidation;
