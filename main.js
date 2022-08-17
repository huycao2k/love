jQuery(function($) {
    st();
});
function st(){
    $('.button').click(function(){        
        $('.button').hide();
        $(' p').show();             
        setInterval(function(){
            $('p').clone().appendTo('.text');
        }, 1000)   
    });
}