window.onload = function () {
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

/*라디오 버튼 클릭시 내용 스위치*/

document.addEventListener("DOMContentLoaded", function () {
  // ID로 라디오 버튼 가져오기
  var emailRadio = document.getElementById("select");
  var smsRadio = document.getElementById("select2");

  // 클래스로 div 엘리먼트 가져오기
  var emailDiv = document.querySelector(".email-select");
  var smsDiv = document.querySelector(".sms-select");

  // "이메일 주소" 라디오 버튼을 초기에 선택하도록 설정
  emailRadio.checked = true;

  // 초기에 "이메일 주소" 라디오 버튼에 대한 처리
  emailDiv.style.display = "block";
  smsDiv.style.display = "none";

  // 라디오 버튼에 이벤트 리스너 추가
  emailRadio.addEventListener("click", function () {
    // "이메일 주소" 라디오 버튼이 클릭되면 email-select div를 표시하고 sms-select div를 숨김
    emailDiv.style.display = "block";
    smsDiv.style.display = "none";
  });

  smsRadio.addEventListener("click", function () {
    // "문자 메시지(SMS)" 라디오 버튼이 클릭되면 sms-select div를 표시하고 email-select div를 숨김
    emailDiv.style.display = "none";
    smsDiv.style.display = "block";
  });
});

/*문자로 비번찾기 에러 메시지 처리*/
document.addEventListener("DOMContentLoaded", function () {
  var phoneInput = document.getElementById("phone-input");
  var errorMessage = document.getElementById("error-message");
  var receiveButton = document.getElementById("receive-button");

  // 입력 텍스트 박스 클릭 시 플래그 설정
  var inputAttempted = false;

  phoneInput.addEventListener("focus", function () {
    inputAttempted = true;
    checkErrorMessage();
  });

  // 페이지 어느 곳이든 클릭 시 에러 메시지 표시
  document.addEventListener("click", function (event) {
    if (!phoneInput.contains(event.target) && inputAttempted) {
      checkErrorMessage();
    }
  });

  // 입력 텍스트 박스에 포커스 이동 시 에러 메시지 숨김
  phoneInput.addEventListener("focus", function () {
    errorMessage.style.display = "none";
    receiveButton.classList.remove("error-style");
    phoneInput.classList.remove("error");
  });

  // 페이지 로드 시 에러 메시지 초기 숨김
  errorMessage.style.display = "none";

  // 페이지 로드 시 에러 메시지 체크
  function checkErrorMessage() {
    if (phoneInput.value.trim() === "") {
      errorMessage.style.display = "block";
      receiveButton.classList.add("error-style");
      phoneInput.classList.add("error");
    }
  }
});

//이메일로 비번찾기 에러 메시지
document.addEventListener("DOMContentLoaded", function () {
  var emailInput = document.getElementById("forgot-pw-input");
  var errorMessage = document.querySelector(".email-select .message-error");
  var receiveButton = document.querySelector(".email-select .imail-receive");

  var inputAttempted = false;

  // 입력 텍스트 박스 클릭 시 플래그 설정
  emailInput.addEventListener("focus", function () {
    inputAttempted = true;
    checkErrorMessage();
  });

  emailInput.addEventListener("input", function () {
    checkEmail();
  });

  function checkEmail() {
    var emailValue = emailInput.value.trim();

    // 간단한 이메일 형식 유효성 검사
    if (/^\S+@\S+\.\S+$/.test(emailValue) || emailValue === "") {
      // 올바른 이메일 형식일 때
      errorMessage.style.display = "none";
    } else {
      // 올바르지 않은 이메일 형식일 때
      errorMessage.style.display = "block";
    }
  }

  // 페이지 어느 곳이든 클릭 시 에러 메시지 표시
  document.addEventListener("click", function (event) {
    if (!emailInput.contains(event.target) && inputAttempted) {
      checkErrorMessage();
    }
  });

  // 입력 텍스트 박스에 포커스 이동 시 에러 메시지 숨김
  emailInput.addEventListener("focus", function () {
    errorMessage.style.display = "none";
    receiveButton.classList.remove("error");
    emailInput.classList.remove("error");
  });

  // 페이지 로드 시 에러 메시지 초기 숨김
  errorMessage.style.display = "none";

  // 페이지 로드 시 에러 메시지 체크
  function checkErrorMessage() {
    if (emailInput.value.trim() === "") {
      errorMessage.style.display = "block";
      receiveButton.classList.add("error");
      emailInput.classList.add("error");
    }
  }
});

//자세히 알아보기 버튼
document.addEventListener("DOMContentLoaded", function () {
  var detailButton = document.querySelector(".notRobot-detail");
  var disclosureDiv = document.querySelector(".notRobot-disclosure");

  // 초기에는 disclosureDiv를 숨김
  disclosureDiv.style.display = "none";

  // 버튼 클릭 시 동작
  detailButton.addEventListener("click", function () {
    // disclosureDiv의 현재 표시 여부 확인
    var isVisible = window.getComputedStyle(disclosureDiv).display !== "none";

    // 토글 (현재 보이면 숨기고, 현재 숨겨져 있으면 보이게)
    disclosureDiv.style.display = isVisible ? "none" : "block";

    // 버튼 숨기기
    detailButton.style.display = "none";
  });
});

/*드롭다운 선택시 글씨 없애기*/
/*document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementById("dropdown");
  var phoneInput = document.getElementById("phone-input");
  var selectedOption = null; // 초기에는 선택된 값이 없음

  // 초기 선택 값 설정
  var initialOption = dropdown.options[0];
  dropdown.innerHTML = `<option value="${initialOption.value}">${initialOption.text}</option>`;

  dropdown.addEventListener("change", function () {
    selectedOption = dropdown.options[dropdown.selectedIndex];
    var optionText = selectedOption.text;
    var countryCode = optionText.split(" ")[1];

    // 현재 선택된 옵션을 드롭다운 버튼에 표시
    dropdown.innerHTML = `<option value="${selectedOption.value}">${countryCode}</option>`;
  });

  dropdown.addEventListener("click", function (event) {
    event.stopPropagation(); // 드롭다운을 열 때 문서의 클릭 이벤트 전파 방지
    dropdown.size = dropdown.size > 1 ? 1 : 4; // 드롭다운 목록 크기 조절
  });

  document.addEventListener("click", function () {
    // 문서 어느 곳이든 클릭 시 드롭다운 버튼이 열려있으면 값을 적용
    if (dropdown.size > 1) {
      // 전체 목록을 다시 표시
      dropdown.innerHTML = `
        <option value="미국">미국 +1</option>
        <option value="일본">일본 +81</option>
        <option value="대한민국">대한민국 +82</option>
        <option value="중국">중국 +86</option>
      `;

      // 현재 선택된 옵션을 드롭다운 버튼에 표시
      if (selectedOption) {
        var optionText = selectedOption.text;
        var countryCode = optionText.split(" ")[1];
        dropdown.innerHTML += `<option value="${selectedOption.value}">${countryCode}</option>`;
      }
    }
  });
});*/
