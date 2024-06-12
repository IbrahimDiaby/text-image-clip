const init = () => {
  const wrapper = document.querySelector(".wrapper");
  const overlay = document.querySelector(".wrapper .overlay");
  let i = 0;

  setInterval(() => {
    overlay.style.background = `url('./assets/videos/gif${i}.webp')`;
    overlay.style.backgroundSize = 'cover';
    overlay.style.backgroundClip = 'text';
    ++i;
    i %= 3;
  }, 1500);

  
};
