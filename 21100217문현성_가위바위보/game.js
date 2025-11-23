/**
 * 가위바위보 게임 로직
 * 1: 가위, 2: 바위, 3: 보
 */

// 1. 컴퓨터의 선택을 무작위로 결정하는 함수
function getComputerChoice() {
    // 1, 2, 3 중 하나의 난수를 생성합니다.
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

// 2. 숫자를 실제 가위/바위/보 문자열로 변환하는 함수
function choiceToString(choice) {
    switch (choice) {
        case 1:
            return "가위";
        case 2:
            return "바위";
        case 3:
            return "보";
        default:
            return "오류";
    }
}

// 3. 게임을 실행하고 결과를 판단하는 함수
function playGame() {
    // 사용자로부터 입력을 받습니다.
    // 'prompt'는 브라우저 환경에서 사용자 입력을 받는 표준 함수입니다.
    let userInput = prompt("가위(1), 바위(2), 보(3) 중 하나를 입력하세요:");

    // 입력값을 정수로 변환합니다.
    const userChoice = parseInt(userInput);

    // 입력값 유효성 검사
    if (isNaN(userChoice) || userChoice < 1 || userChoice > 3) {
        console.log("❌ 잘못된 입력입니다. 1, 2, 3 중 하나를 입력해야 합니다.");
        return; // 함수 종료
    }

    const computerChoice = getComputerChoice();

    const userString = choiceToString(userChoice);
    const computerString = choiceToString(computerChoice);

    console.log(`\n👨‍💻 당신의 선택: **${userString}**`);
    console.log(`🤖 컴퓨터의 선택: **${computerString}**`);
    
    console.log("--- 결과 ---");

    // 승패 판단 로직
    if (userChoice === computerChoice) {
        console.log("🤝 **비겼습니다!**");
    } else if (
        (userChoice === 1 && computerChoice === 3) || // 가위(1) vs 보(3)
        (userChoice === 2 && computerChoice === 1) || // 바위(2) vs 가위(1)
        (userChoice === 3 && computerChoice === 2)    // 보(3) vs 바위(2)
    ) {
        console.log("🎉 **당신이 이겼습니다!**");
    } else {
        console.log("😭 **컴퓨터가 이겼습니다!**");
    }
}

// 게임 실행
console.log("==========================================");
console.log("      ✨ 가위바위보 게임 시작! ✨");
console.log("==========================================");

playGame(); // 함수를 호출하여 게임을 시작합니다.