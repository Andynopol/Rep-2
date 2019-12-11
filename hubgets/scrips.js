let visible = false;
$(document).ready(function(){
    $('#info-icon').tooltip({
        trigger: 'manual',
        title: 'Invlid email address',
    });
    $('#email').focusout(function(){
        tooltipShow();
    });

    $('#register-btn').click(function(){
        tooltipShow();
    });

    $(document).click(function(){
        if(visible){
            visible=false;
        }
        else{
            tooltipHide();
        }
    });

});

const tooltipShow = ()=>{
    let email = $('#email').val();
        if(email.includes('@') && email.includes('.com')){
            console.log("Good mail");
        }
        else{
            console.log("Invalid mail");
            $('#email').css({
                'border-color': 'red',
                'background': 'rgb(247, 142, 142)',
                'padding-right': '40px',
                'opacity' : '.5',
            });
            $('#info-icon').show();
            $('#info-icon').tooltip('show');
            visible = true;
        }
}

const tooltipHide = ()=>{
    $('#info-icon').hide();
    $('#info-icon').tooltip('hide');
    $('#email').css({
        'border-color': '#ced4da',
        'background': '#fff',
        'opacity' : '1',
        'padding-right': '0.375rem',
    })
}