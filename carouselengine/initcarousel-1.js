jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:64,
            showtitle:true,
            showdescription:false,
            shownavigation:false,
            thumbwidth:80,
            thumbheight:60,
            thumbtopmargin:12,
            thumbbottommargin:8,
            titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
            descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:270,
        height:220,
        skinsfoldername:"",
        interval:3000,
        itembottomshadowimagetop:99,
        donotcrop:true,
        random:false,
        showhoveroverlay:true,
        rownumber:1,
        height:220,
        arrowheight:32,
        showbottomshadow:false,
        itembackgroundimagewidth:100,
        imageheight:220,
        skin:"Gallery",
        responsive:true,
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        enabletouchswipe:true,
        navstyle:"bullets",
        backgroundimagetop:-40,
        arrowstyle:"always",
        bottomshadowimagetop:100,
        hidehoveroverlayontouch:false,
        continuous:false,
        itembackgroundimagetop:0,
        hoveroverlayimage:"./ImagesWeb/hoveroverlay-64-64-3.png",
        itembottomshadowimage:"./ImagesWeb/itembottomshadow-100-98-3.png",
        lightboxshowdescription:false,
        width:270,
        navswitchonmouseover:false,
        showhoveroverlayalways:false,
        transitioneasing:"easeOutExpo",
        lightboxshownavigation:false,
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"./ImagesWeb/arrows-32-32-2.png",
        scrollitems:1,
        direction:"horizontal",
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        supportiframe:false,
        navimage:"./ImagesWeb/bullet-16-16-1.png",
        backgroundimagewidth:110,
        showbackgroundimage:false,
        lightboxbarheight:64,
        showplayvideo:true,
        spacing:4,
        lightboxthumbwidth:80,
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        lightboxthumbtopmargin:12,
        autoplay:true,
        lightboxnogroup:false,
        arrowwidth:32,
        transparent:false,
        continuousduration:2500,
        bottomshadowimage:"./ImagesWeb/bottomshadow-110-100-5.png",
        scrollmode:"page",
        navmode:"page",
        lightboxshowtitle:true,
        lightboxthumbbottommargin:8,
        arrowhideonmouseleave:1000,
        showitembottomshadow:false,
        lightboxthumbheight:60,
        navspacing:8,
        pauseonmouseover:true,
        imagefillcolor:"FFFFFF",
        playvideoimage:"./ImagesWeb/playvideo-64-64-0.png",
        transitionduration:1000,
        visibleitems:3,
        imagewidth:270,
        usescreenquery:false,
        bottomshadowimagewidth:110,
        screenquery:{
	tablet: {
		screenwidth: 900,
		visibleitems: 2
	},
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navwidth:16,
        loop:0,
        navheight:16
    });
});