window.onload = function () {
  // 이메일 조건검사
  var emailInput = document.getElementById("email");
  var emailErrorDiv = document.getElementById("emailError");

  function handleEmailBlur() {
    var emailValue = emailInput.value;

    // 간단한 이메일 형식을 검사하는 정규표현식
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log("Email value:", emailValue);
    if (emailValue.trim() === "") {
      emailInput.classList.add("invalid");
      emailErrorDiv.textContent = "이메일 주소는 반드시 입력하셔야 합니다.";
      emailErrorDiv.classList.add("inputError");
    } else if (!emailRegex.test(emailValue)) {
      emailInput.classList.add("invalid");
      emailErrorDiv.textContent = "올바른 이메일 주소를 입력하세요.";
      emailErrorDiv.classList.add("inputError");
    } else {
      emailErrorDiv.textContent = "";
      emailErrorDiv.classList.remove("inputError");
    }
  }

  emailInput.addEventListener("blur", handleEmailBlur);

  // 비밀번호 조건검사
  var passwordInput = document.getElementById("password");
  var passwordErrorDiv = document.getElementById("passwordError");

  passwordInput.addEventListener("blur", handlePasswordBlur);

  function handlePasswordBlur() {
    var passwordValue = passwordInput.value;

    if (passwordValue.trim() === "") {
      // 빈 칸인 경우
      passwordInput.classList.add("invalid");
      passwordErrorDiv.textContent = "비밀번호는 반드시 입력하셔야 합니다.";
    } else if (passwordValue.length < 6 || passwordValue.length > 60) {
      // 글자 수가 6자 미만 또는 60자 초과인 경우
      passwordInput.classList.add("invalid");
      passwordErrorDiv.textContent = "비밀번호는 6~60자 사이여야 합니다.";
    } else {
      // 유효한 경우 에러 메시지 숨김
      if (passwordErrorDiv) {
        passwordErrorDiv.textContent = "";
      }
    }
  }

  var select = document.querySelector(".language-picker");
  var options = [
    { text: "한국어", value: "korean" },
    { text: "English", value: "english" },
  ];

  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt.text;
    el.value = opt.value;
    select.appendChild(el);
  }
};
