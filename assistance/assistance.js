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
