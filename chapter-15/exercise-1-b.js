const maxSize = 400;

window.addEventListener('load', () => {
  const balloon = document.getElementById('balloon');

  let size = 10;
  balloon.style.fontSize = `${size}px`;

  function handleKeyDown(event) {
    if (event.key === 'ArrowUp') {
      size *= 1.1;

      if (size > maxSize) {
        balloon.textContent = '💥';
        window.removeEventListener('keydown', handleKeyDown);
      } else {
        balloon.style.fontSize = `${size}px`;
      }
    }

    if (event.key === 'ArrowDown') {
      size *= 0.9;
      balloon.style.fontSize = `${size}px`;
    }
  }

  window.addEventListener('keydown', handleKeyDown);
});
