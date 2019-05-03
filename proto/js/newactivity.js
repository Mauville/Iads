//TODO add more functionality
if (!(localStorage.getItem('logged_user'))) {
   window.location.href = 'index.html';    
}

$('#iconwrapper a').on('click', function(){
   let acname = $(this).find('.text').text();
   let acimg = $(this).find('.outbutton').text();

   let new_activity_data = JSON.parse(localStorage.getItem('new-activity'));

      new_activity_data.name = acname;
      new_activity_data.image = acimg;

   localStorage.setItem('new-activity', JSON.stringify(new_activity_data));
});