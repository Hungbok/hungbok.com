// 서버 시간을 가져오는 함수
function getServerTime() {
    // 서버에서 현재 시간을 가져오는 방법에 따라 변경
    // 예: 서버에서 JSON 형식으로 시간을 반환하는 API 호출
    // 아래는 간단한 예제로 현재 클라이언트의 로컬 시간을 사용
    return new Date();
}

// 서버 시간을 업데이트하는 함수
function updateServerTime() {
    var serverTimeElement = document.getElementById("serverTime");
    var serverTime = getServerTime();

    // 시간을 원하는 형식으로 포맷팅 (예: HH:mm:ss)
    var formattedTime = serverTime.toLocaleTimeString();

    // HTML 요소에 서버 시간 표시
    serverTimeElement.textContent = "서버 시간: " + formattedTime;
}

// 초기에 한 번 호출하고 일정 간격으로 업데이트
updateServerTime();
setInterval(updateServerTime, 1000); // 1000ms마다 업데이트 (1초)
