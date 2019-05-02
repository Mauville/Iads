//TODO add more functionality
   localStorage.setItem('new-activity', 'null');

$('#iconwrapper a').on('click', function(){
   let acname = $(this).find('.text').text();
   localStorage.setItem('new-activity', acname);
});