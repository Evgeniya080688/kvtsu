$(document).ready(function(){
    "use strict";

    // Sticky menu
    $(window).scroll(function () {
        var mainmenu = jQuery("#header_main.sticky", "#header");
        if (parseInt(mainmenu.attr("rel"),10) <= Math.abs(parseInt(jQuery(window).scrollTop()),10)) {
            mainmenu.addClass("fixed");
        } else {
            mainmenu.removeClass("fixed");
        }
    });

    // Sticky menu
    $("#header_main.sticky", "#header").wrap("<div class='header_main-parent'></div>").attr("rel", $("#header_main.sticky", "#header").offset().top).parent().height($("#header_main.sticky", "#header").height());

    // Responsive top navigation
    $(".top_navigation_toggle", "#header").on( "click", function() {
        $(".top_navigation .menu", "#header").toggle();
        $(this).toggleClass("active");
        return false;
    });
    $(".top_sub_menu_toggle", "#header").on( "click", function() {
        $(this).next(".sub-menu").toggle();
        return false;
    });


    // Accordions

    $(".accordion_title").on("click",function(){ 

        if (this.classList.contains("active")){

            $(this).removeClass("active");
            $(this).next(".accordion_content").removeClass("active_accordion");
        }
        else {
            $(this).addClass("active");
            $(this).next(".accordion_content").addClass("active_accordion");

        }

    });


    $(".faq_title").on("click",function(){ 
        $(".faq_title").removeClass("active");
        $(".accordion_content").removeClass("active_accordion");
        $(this).addClass("active");
        $(this).next(".accordion_content").addClass("active_accordion");
        return false;

    });

    //resize icons of shop
    
    var view = JSON.parse(localStorage.getItem("myKey"));
    localStorage.setItem("myKey",JSON.stringify(view));
    CheckView();

    function CheckView() {
        if (view == "big-icon") {
            $(".big-icon").prop("checked");
            $(".big-icon").css('background-color', '#ffc107');
            $(".small-icon").css('background-color', '#eeeeee');
            $(".list-view").css('background-color', '#eeeeee');
            $(".product").removeClass("small");            
            $(".product").removeClass("list");
            
        }
        else if (view == "small-icon") {
            $(".small-icon").prop("checked");
            $(".big-icon").css('background-color', '#eeeeee');
            $(".small-icon").css('background-color', '#ffc107');
            $(".list-view").css('background-color', '#eeeeee');
            $(".product").addClass("small");           
            $(".product").removeClass("list");
            
        }
        else if (view == "list-view") {
            $(".list-view").prop("checked");
            $(".big-icon").css('background-color', '#eeeeee');
            $(".small-icon").css('background-color', '#eeeeee');
            $(".list-view").css('background-color', '#ffc107');
            $(".product").removeClass("small");
            $(".product").addClass("list");
        }
    }

    $(".view-icon").on("click", function(){
        $(this).prop("checked");
        if ($(".big-icon").prop("checked")) {
            view = "big-icon";        
        }
        else if ($(".small-icon").prop("checked")) {
            view = "small-icon";
        }
        else if ($(".list-view").prop("checked")) {
            view = "list-view";
        }
        localStorage.setItem("myKey",JSON.stringify(view));
        CheckView();
    });    

    //filters on the shop page
    $(".btn-filter").on("click", function(){
        var filterName = $(this).prop('value').toLowerCase().replace(/\s/g, '');   

        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            let each=$('.product').each(function(index, el) {
                let val = $(el).text().toLowerCase().replace(/\s/g, '');
                
                if (val.indexOf(""+filterName) == -1) {
                    $(el).addClass('visually-hidden');                
                }
           
            });
        }
        else {
            let each=$('.product').each(function(index, el) {
                let val = $(el).text().toLowerCase().replace(/\s/g, '');
                
                if (val.indexOf(""+filterName) == -1) {
                    $(el).removeClass('visually-hidden');                
                }
           
            });
        }
    });

    $(".btn-reset").on("click", function(){
        $('.product').removeClass('visually-hidden');
        //$(".btn-filter").css('background-color','#999999');
        $(".btn-filter").removeClass('active');
    });    

    //фильтры с массивом

    var arrFiltres = $('.filters-buttons').children();
    var arrFiltresLenght = $(arrFiltres).lenght;
    //console.log(arrFiltres);
    $('.btn-filter').on("click", function(){
        arrFiltres.forEach(function(entry) {
            console.log(entry);
        });
    });   

    //show more info at the shop page
    $('.page_showmore__button').on("click", function() {
       $('.page_extrainfo').toggleClass('active');
       $('.page_showmore__button').toggleClass('active');
    }); 

    if ($("div").is(".page_extrainfo")) {
        if (document.getElementById('page_extrainfo').scrollHeight <=90) {
            $('.page_extrainfo').toggleClass('active');
            $('.page_showmore ').toggleClass('visually-hidden');
        }
    }    

    //link for download
    $(".download_link").on("click",function(e){
        var href = $(this).attr('href');
        $(this).attr('target','_blank');
        e.preventDefault();
        //window.location.href=href;
        window.open(href,'_blank');
    });

    //required
    $(".required").children('input').attr({
        required: true           
    });
        
    // Tabs     
    $(".tabs__caption li:first-child").addClass('active');
    $(".tabs__content:first-child").addClass('active');
    
     
    $(".tabs__caption li").on("click",function(){

        $(".tabs__caption li").removeClass("active");
        $(".tabs__content").removeClass("active");

        $(this).addClass("active");
        $(".tabs__content").eq($(this).index()).addClass("active");
        return false;

    });

    //Присвоить всем таблицам раздела продукция класс card-table для адаптивности
    $(".tabs__content table").addClass('card-table');

    $(document).on('click', '#run', function(e) {
        e.preventDefault();
        $('#simple-example-table').stacktable();
        $(this).replaceWith('<span>ran - resize your window to see the effect</span>');
      });
      $('#responsive-example-table').stacktable({myClass:'your-custom-class'});
      $('.card-table').cardtable();
      $('#agenda-example').stackcolumns();
    

    // Review animated
    // $('.review_footer span').viewportChecker({
    //     classToAdd: 'visible animated',
    //     classToRemove: 'hidden',
    //     offset: 0
    // });

    // Images animated
    // $("img:not(.content_slider img, .post .entry_media img)").viewportChecker({
    //     classToAdd: 'visible animated',
    //     classToRemove: 'hidden',
    //     offset: 0
    // });

    // Wide slider
    $(".wide_slider ul").bxSlider({
        adaptiveHeight: true,
        mode: "fade",
        auto: true,
        controls: true,
        captions: false,
        prevText: "&#xf053;",
        nextText: "&#xf054;",
        pagerCustom: "#wide_slider_pager"
    });    

    // Popup images
    $(".popup_link").magnificPopup({
        type: "image",
        mainClass: "mfp-with-zoom",
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is("img") ? openerElement : openerElement.find("img");
            }
        }
    });

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>Э/т завод КВТ</small>';
          }
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.tip').tipTip ({ 
        maxWidth: 'auto',
        keepAlive: false
    });

    $('.image-icon-item').on("mouseenter", function () {
        var t = $('#'+ this.dataset.id + '>g>title')[0].innerHTML;              
        console.log(t);
    });
    
});





