// Bubble Generator Script
const bubbleCount = 25;

for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 30 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.animationDuration = `${8 + Math.random() * 5}s`;
  bubble.style.animationDelay = `${Math.random() * 5}s`;

  document.body.appendChild(bubble);
}
