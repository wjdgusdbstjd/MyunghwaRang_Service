if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

gsap.registerPlugin(ScrollTrigger);

gsap.from("#main h4", {
    y: "7vw",
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power1.out",
    stagger: 0.35,
    scrollTrigger: {
        trigger: "#main h4",
        start: "top bottom",
        toggleActions: "play none none reset",
        markers: false
    }
});


gsap.from("#main h1", {
    y: "7vw",
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power1.out",
    stagger: 0.35,
    scrollTrigger: {
        trigger: "#main h1",
        start: "top bottom",
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#main p", {
    x: "7vw",
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "power1.out",
    stagger: 0.35,
    scrollTrigger: {
        trigger: "#main p",
        start: "top bottom",
        toggleActions: "play none none reset",
        markers: false
    }
});



// gsap.from(".tag", {
//     x: "-3vw",
//     opacity: 0,
//     duration: 0.5,
//     delay: 0.3,
//     ease: "power1.out",
//     stagger: 0.35,
//     scrollTrigger: {
//         trigger: ".tag",
//         start: "top bottom",
//         toggleActions: "play reverse play reverse",
//         markers: false
//     }
// });



gsap.from("#planning h1", {
    y: "7vw",
    opacity: 0,
    duration: 0.8,
    delay: 0.35,
    ease: "power1.out",
    stagger: 0.35,
    scrollTrigger: {
        trigger: "#planning h1",
        start: "top bottom",
        toggleActions: "play none none reset",
        markers: false
    }
});


gsap.from("#planning .p-1", {
    x: "7vw",
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "power1.out",
    stagger: 0.35,
    scrollTrigger: {
        trigger: "#planning .p-1",
        start: "top bottom",
        toggleActions: "play none none reset",
        markers: false
    }
});


// ul 안의 li 카드들이 통째로 순차적으로 아래에서 위로 등장
gsap.from("#planning ul li", {
    y: "5vw",          // 아래에서 50px 위치에서 시작
    opacity: 0,         // 투명한 상태로 시작
    duration: 0.7,      // 애니메이션이 지속되는 시간 (0.8초)
    delay: 0.4,
    ease: "power1.out", // 부드럽게 감속하는 타이밍 함수
    stagger: 0.3,       // 각 카드(li)가 0.3초 간격으로 시차를 두고 등장
    scrollTrigger: {
        trigger: "#planning ul", // li들의 부모인 ul이 화면에 보이기 시작할 때 작동
        start: "top bottom",     // ul의 상단이 화면 하단에 걸릴 때 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


// insight 섹션 안의 자식 div들이 순차적으로 아래에서 위로 등장
gsap.from("#insight > div[class^='insight-']", {
    y: "5vw",          // 아래에서 50px 위치에서 시작
    opacity: 0,         // 투명한 상태로 시작
    duration: 0.8,      // 애니메이션 지속 시간 (0.8초)
    delay: 0.5,
    ease: "power1.out", // 부드러운 감속 효과
    stagger: 0.3,       // insight-1, 2, 3, 4가 0.3초 간격으로 차례대로 등장
    scrollTrigger: {
        trigger: "#insight",     // 인사이트 섹션 전체가 화면에 걸릴 때 작동
        start: "top bottom",     // 섹션 상단이 화면 하단에 걸릴 때 시작
        toggleActions: "play none none reset",
        markers: false
    }
});




gsap.from("#service h2", {
    y: "5vw",          // 아래에서 50px 위치에서 시작
    opacity: 0,         // 투명한 상태로 시작
    duration: 0.7,      // 애니메이션이 지속되는 시간 (0.8초)
    delay: 0.3,
    ease: "power1.out", // 부드럽게 감속하는 타이밍 함수
    stagger: 0.3,       // 각 카드(li)가 0.3초 간격으로 시차를 두고 등장
    scrollTrigger: {
        trigger: "#service h2", // li들의 부모인 ul이 화면에 보이기 시작할 때 작동
        start: "top bottom",     // ul의 상단이 화면 하단에 걸릴 때 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#service h1", {
    x: "-6vw",          // 아래에서 50px 위치에서 시작
    opacity: 0,         // 투명한 상태로 시작
    duration: 0.7,      // 애니메이션이 지속되는 시간 (0.8초)
    delay: 0.53,
    ease: "power1.out", // 부드럽게 감속하는 타이밍 함수
    stagger: 0.3,       // 각 카드(li)가 0.3초 간격으로 시차를 두고 등장
    scrollTrigger: {
        trigger: "#service h1", // li들의 부모인 ul이 화면에 보이기 시작할 때 작동
        start: "top bottom",     // ul의 상단이 화면 하단에 걸릴 때 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

// '가치 있는 교육' 글자 색상이 흰색에서 파란색으로 변하는 애니메이션
gsap.from("#service h1 span", {
    color: "#ffffff",   // 시작할 때의 색상 (흰색)
    duration: 0.8,      // 1초 동안 부드럽게 변함
    delay: 0.68,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#service h1", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

// value-1, 2, 3 카드들이 순서대로 아래에서 위로 등장
gsap.from("#service ul.value li", {
    y: "4vw",          // 아래에서 50px 위치에서 시작
    opacity: 0,         // 투명한 상태로 시작
    duration: 0.8,      // 애니메이션이 지속되는 시간 (0.8초)
    delay: 0.38,
    ease: "power1.out", // 부드럽게 감속하는 효과
    stagger: 0.3,       // 각 카드(li)가 0.3초 간격으로 차례대로 등장
    scrollTrigger: {
        trigger: "#service ul.value", // 리스트 전체의 부모인 ul을 기준으로 트리거
        start: "top bottom",          // ul의 상단이 화면 하단에 걸릴 때 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


gsap.from("#IA h2", {
    x: "-4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#IA h2", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


// IA 섹션 안의 이미지들이 순차적으로 아래에서 위로 등장
gsap.from("#IA img", {
    y: "6vw",          // 아래에서 50px 위치에서 시작
    opacity: 0,         // 투명한 상태로 시작
    duration: 0.8,      // 애니메이션 지속 시간 (0.8초)
    delay: 0.35,
    ease: "power1.out", // 부드러운 감속 효과
    stagger: 0.3,       // 첫 번째 이미지 나오고 0.3초 뒤에 두 번째 이미지 등장
    scrollTrigger: {
        trigger: "#IA img",          // IA 섹션 전체를 기준으로 트리거
        start: "top bottom",     // 섹션 상단이 화면 하단에 걸릴 때 시작
        toggleActions: "play none none reset",
        markers: false
    }
});



gsap.from("#design-system .h2-1", {
    x: "-4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#design-system .h2-1", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#design-system #small-tag-1", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#design-system #small-tag-1", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#design-system .h3-1", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.34,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#design-system .h3-1", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


// 디자인 시스템 컬러 칩 순차 등장 타임라인 생성
const colorTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#design-system", // 디자인 시스템 섹션 전체를 기준으로 트리거
        start: "top 80%",          // 섹션이 화면에 넉넉히 들어왔을 때(80% 지점) 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

// 1단계: color-1 안의 li들이 순차적으로 왼쪽 -> 오른쪽 등장
colorTimeline.from(".color-1 li", {
    x: "-5vw",         // 왼쪽으로 50px 간 지점에서 시작
    opacity: 0,
    duration: 0.5,      // 각 컬러 칩이 나타나는 시간
    delay: 0.3,
    stagger: 0.15,      // 0.15초 간격으로 착-착-착 등장
    ease: "power1.out"
})

// 2단계: color-1이 "완전히 끝난 후" color-2 안의 li들이 순차적으로 왼쪽 -> 오른쪽 등장
.from(".color-2 li", {
    x: "-5vw",         // 마찬가지로 왼쪽에서 시작
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.15,      // 0.15초 간격으로 착-착-착 등장
    ease: "power1.out"
}); // 끝에 아무것도 안 붙이면 앞 애니메이션이 끝나자마자 바로 이어져!





gsap.from("#design-system #small-tag-2", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#design-system #small-tag-2", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#design-system .h3-2", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.34,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#design-system .h3-2", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


// typo 안의 li들이 순차적으로 오른쪽 -> 왼쪽 등장
gsap.from("#design-system ul.typo li", {
    x: "5vw",          // 오른쪽 50px 위치에서 시작
    opacity: 0,         // 투명한 상태로 시작
    duration: 0.8,      // 애니메이션 지속 시간 (0.8초)
    delay: 0.34,
    ease: "power1.out", // 부드러운 감속 효과
    stagger: 0.25,      // 위에서부터 0.25초 간격으로 착-착-착 등장
    scrollTrigger: {
        trigger: "#design-system ul.typo",     // 타이포그래피 리스트를 기준으로 트리거
        start: "top 85%",       // 리스트 상단이 화면 하단보다 조금 위(85% 지점)에 걸릴 때 시작
        toggleActions: "play none none reset",
        markers: false
    }
});



gsap.from("#design-system #small-tag-3", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#design-system #small-tag-3", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#design-system .h3-3", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.34,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#design-system .h3-3", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


gsap.from("#design-system .logo img", {
    x: "5vw",          // 오른쪽 50px 위치에서 시작
    opacity: 0,         // 투명한 상태로 시작
    duration: 0.8,      // 애니메이션 지속 시간 (0.8초)
    delay: 0.36,
    ease: "power1.out", // 부드러운 감속 효과
    stagger: 0.25,      // 위에서부터 0.25초 간격으로 착-착-착 등장
    scrollTrigger: {
        trigger: "#design-system .logo img",     // 타이포그래피 리스트를 기준으로 트리거
        start: "top 85%",       // 리스트 상단이 화면 하단보다 조금 위(85% 지점)에 걸릴 때 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


gsap.from("#UIdesign #small-tag-4", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign #small-tag-4", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#UIdesign .h3-4", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.34,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign .h3-4", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#UIdesign #small-tag-5", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign #small-tag-5", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#UIdesign .h3-5", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.34,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign .h3-5", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#UIdesign #small-tag-6", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign #small-tag-6", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#UIdesign .h3-6", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.34,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign .h3-6", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#UIdesign #small-tag-7", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.2,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign #small-tag-7", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#UIdesign .h3-7", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.34,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign .h3-7", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


gsap.from("#UIdesign .web", {
    y: "6vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign .web", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});



gsap.from("#UIdesign .parent", {
    y: "6vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign .parent", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});

gsap.from("#UIdesign .kids", {
    y: "6vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#UIdesign .kids", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});





gsap.from("#Prototype .small-tag", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.15,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#Prototype .small-tag", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


gsap.from("#Prototype .Prototype-area", {
    y: "4vw",     
    duration: 0.8,      // 1초 동안 부드럽게 변함
    opacity: 0,
    delay: 0.5,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#Prototype .Prototype-area", // h1 태그가 화면에 보일 때 타이밍을 잡음
        start: "top 80%",       // 화면 하단보다 조금 더 올라왔을 때(80% 지점) 자연스럽게 시작
        toggleActions: "play none none reset",
        markers: false
    }
});


