$(()=>{

    ////////////////
    // Scroll Header Buttons
    const HeaderButtons = $('header nav li');

    HeaderButtons.each((_, button)=>{
        $(button).click(()=>{

            scroll({'top': $(`.${$(button).attr('scroll-target')}`).position().top, 'behavior': 'smooth'});

        });
    });

});
