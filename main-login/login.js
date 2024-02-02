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

//자세히 알아보기 구현
document.addEventListener("DOMContentLoaded", function () {
  var detailsContentDiv = document.getElementById("detailsContent");
  var detailButton = document.querySelector(".detailButton");

  // 초기에는 detailsContentDiv를 숨김
  detailsContentDiv.style.display = "none";

  // 버튼 클릭 시 동작
  detailButton.addEventListener("click", function () {
    // detailsContentDiv의 현재 표시 여부 확인
    var isVisible =
      window.getComputedStyle(detailsContentDiv).display !== "none";

    // 토글 (현재 보이면 숨기고, 현재 숨겨져 있으면 보이게)
    detailsContentDiv.style.display = isVisible ? "none" : "block";

    // 버튼 숨기기
    detailButton.style.display = "none";
  });
});
