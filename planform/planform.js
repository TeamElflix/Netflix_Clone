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

window.onload = function () {
  const plans = document.querySelectorAll(".plan-container"); // 모든 .plan 요소를 선택합니다.

  plans.forEach((plan) => {
    // 각 .plan 요소에 대해
    plan.addEventListener("click", function () {
      // 클릭 이벤트 리스너를 추가합니다.
      const container = this.closest(".plan-container"); // 가장 가까운 .plan-container 요소를 찾습니다.

      // 클릭된 요소 외의 모든 .plan-container 요소의 스타일을 초기 상태로 되돌립니다.
      document.querySelectorAll(".plan-container").forEach((otherContainer) => {
        if (otherContainer !== container) {
          // 클릭된 요소의 .plan-container가 아닌 경우
          otherContainer.style.transition = "";
          otherContainer.style.boxShadow = "";
        }
      });

      // 클릭된 요소의 .plan-container에 효과를 적용합니다.
      container.style.transition =
        "margin 250ms ease-in-out 0s, box-shadow 250ms ease-in-out 0s, border-color 250ms ease-in-out 0s";
      container.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 4px 10px 0px";
    });
  });
};
