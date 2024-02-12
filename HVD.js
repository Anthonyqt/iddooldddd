


const bubble = document.querySelector('#bubble');
    const message = document.querySelector('#message');
    const heartsContainer = document.querySelector('#hearts');
    bubble.addEventListener('click', function() {
      bubble.style.display = 'none';
      message.style.display = 'block';
      generateHearts();
    });
    function generateHearts() {
      for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤❤❤';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() + 's';
        heartsContainer.appendChild(heart);
      }
    }