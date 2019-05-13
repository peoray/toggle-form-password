const togglePassword = document.getElementById("togglePassword");

const showOrHidePassword = () => {
  const password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

togglePassword.addEventListener("change", showOrHidePassword);
