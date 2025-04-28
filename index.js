// Menu ochish uchun
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu-mobile');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });
  
  // Menu yopish uchun
  document.getElementById('close-btn').addEventListener('click', function() {
    const menu = document.getElementById('menu-mobile');
    menu.style.display = 'none';
  });