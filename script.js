// Create a floating animation for the post grid items
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
  post.addEventListener('mouseover', () => {
    post.classList.add('float');
  });

  post.addEventListener('mouseleave', () => {
    post.classList.remove('float');
  });
});

// Optional: You can add more fun interactions like floating bananas!
