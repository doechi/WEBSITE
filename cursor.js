const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor.style.opacity = '1';
});
document.documentElement.addEventListener('mouseleave', () => cursor.style.opacity = '0');
document.documentElement.addEventListener('mouseenter', () => cursor.style.opacity = '1');
