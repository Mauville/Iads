$('.configuracion').on('click', function(){
  var parent = $(this).parent().parent().parent();
  var id = $(parent).attr('id');
  let logged = JSON.parse(localStorage.getItem('logged_user'));
  
  logged.knocki_used = id
  localStorage.setItem('logged_user', JSON.stringify(logged));

  $('#popup').css('display', 'block');
});

$('#lastconfirm').on('click', function(){
  let name = $('#place1').val();
  let logged = JSON.parse(localStorage.getItem('logged_user'));
  let knocki = JSON.parse(localStorage.getItem(logged.knocki_used));

  knocki.place = name;

  localStorage.setItem(logged.knocki_used, JSON.stringify(knocki));
  window.location.href = 'home.html';
});


function changename(id){

}

