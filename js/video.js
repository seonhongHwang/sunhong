(function(){
  const vA = document.getElementById('vA');
  const vB = document.getElementById('vB');

  let active = vA;   // 현재 화면에 보이는 비디오
  let buffer = vB;   // 다음 재생을 기다리는 비디오
  let swapEdge = 0.25; // 끝나기 0.25초 전에 교차 (영상 길이에 맞춰 조정 가능)

  // 자동재생 보정
  function safePlay(v){
    if (!v) return;
    const p = v.play();
    if (p && typeof p.then === 'function') {
      p.catch(()=>{/* muted라 대부분 자동재생 됩니다. */});
    }
  }

  // 비디오가 준비되면 바로 재생
  [vA,vB].forEach(v => {
    v.addEventListener('loadedmetadata', () => safePlay(v), {once:true});
  });

  // 교차 재생 로직
  function watchAndSwap(){
    if (!active.duration || isNaN(active.duration)) return;

    const remain = active.duration - active.currentTime;

    if (remain <= swapEdge){
      // 다음 영상 준비: 0.05초에서 시작(초기 검은 프레임 회피)
      buffer.currentTime = 0.05;
      safePlay(buffer);

      // 부드럽게 화면 전환
      buffer.classList.add('is-active');     // fade-in
      active.classList.remove('is-active');  // fade-out

      // 역할 교체
      const tmp = active;
      active = buffer;
      buffer = tmp;
    }
    requestAnimationFrame(watchAndSwap);
  }

  // 첫 영상 시작되면 감시 시작
  vA.addEventListener('playing', () => {
    requestAnimationFrame(watchAndSwap);
  }, {once:true});

  // 혹시 ended가 먼저 발생하는 환경 대비
  [vA,vB].forEach(v=>{
    v.addEventListener('ended', () => {
      // ended에 걸려도 곧바로 다시 시작하도록
      v.currentTime = 0.05;
      safePlay(v);
    });
  });
})();

