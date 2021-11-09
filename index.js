// top-section imgのscript
$('#top-image img').hide();
$('#top-image img:first-child').fadeIn(2000);
setInterval(function() {
  $('#top-image img:first-child').fadeOut(1000).next("img").fadeIn(1000).end().appendTo("#top-image");
}, 5000);

// h1のscript\\
$('h1').hide();
$('h1').slideDown(1500);

// subtitleのscript
$('#subtitle').hide();
$('#subtitle').slideDown(3000);

//tab-menu script
const menuItems = document.querySelectorAll('.tab-menu li a');
const contents = document.querySelectorAll('.tab-content');

menuItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();

    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');

    contents.forEach(content => {
      content.classList.remove('active');
    });

    document.getElementById(item.dataset.id).classList.add('active');
  });
});