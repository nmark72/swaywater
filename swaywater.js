





var 
header = $('<header></header>'),
start = $('<div></div>'),
zavesa = $('<div></div>'),
pocetnaSlika = $('<div></div>'),
pocetnaTekst = $('<h1></h1>'),
nav_bar = $('<nav_bar></nav_bar>'),
opis = $('<selection></selection>'),
naslovOpisa = $('<h2></h2>'),
tekstOpisa = $('<p></p>'),
ukusi= $('<selection></selection>'),
scroll=0,
sirina=Number($(window).width());;
var p0 = ["p0",30.3095, -97.93937, "Bee Cave Coffee Co.", "<strong>Bee Cave Coffee Co.</strong><br><a href='http://beecavecoffee.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/cBdxQXPvk1R2' target='_blank'>Directions</a>"],
	p1 = ["p1",30.38707, -97.70366, "Bee Cave Coffee Co. Domain", "<strong>Bee Cave Coffee Co. Domain</strong><br><a href='http://beecavecoffee.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/V2fBw8iUu4G2' target='_blank'>Directions</a>"],
    p2 = ["p2",30.307743, -97.739877, "Central Market Austin North Lamar", "<strong>Central Market Austin North Lamar</strong><br><a href='http://centralmarket.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/3Wdp74k23Nv' target='_blank'>Directions</a>"],
    p3 = ["p3",30.231948, -97.796914, "Central Market Austin Westgate", "<strong>Central Market Austin Westgate</strong><br><a href='http://centralmarket.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/VspTG1Atvmy' target='_blank'>Directions</a>"];

     var yTop= $("#tekstPosleUkusa").offset().top;
	 var yBot= $("#kontakt").offset().top;
	 var rTop = (yBot + yTop)/2;
	 var gmid =(rTop+yBot)/2;
	 var krajDoc =$('#kraj').offset().bottom;
	 var r=255,g=255,b=255;
	 document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

$(".nav_bar ul li a[href^='#']").on('click', function(e) 
{
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 600,"swing", function(){
       window.location.hash = hash;
     });
});







if (scroll < 450)
{$("#pocetnaTekst").addClass('nevidljiv');}

$(window).scroll(function (event) {
 scroll = Number($(window).scrollTop());
 //console.log(scroll);

 /*---pocetnaSlikaFiksnaRelativna---*/

  if (scroll > 625)
 	{$(".pocetnaSlika").addClass('relative');
//console.log("vece od 450");
}
else
	{$(".pocetnaSlika").removeClass('relative');}
//console.log(scroll);


 /*----------------------------------------*/

 /*---pocetnaTekstVidljivost---*/
 if (scroll > 400)
 	{$("#pocetnaTekst").removeClass('nevidljiv');
//console.log("vece od 450");
}
else
	{$("#pocetnaTekst").addClass('nevidljiv');}
//console.log(scroll);
/*----------------------------------------*/

/*---navFixedRelative---*/

  if (scroll > 1244)
 	{$(".nav_bar").addClass('fixed');
     $(".nav_bar").addClass('nav_top_fixed');
     $(".nav_bar").addClass('nav_top_box');
 	$(".nav_bar").removeClass('nav_top');
//console.log("vece od 450");
}
else
	{$(".nav_bar").removeClass('fixed');
     $(".nav_bar").removeClass('nav_top_fixed');
     $(".nav_bar").removeClass('nav_top_box');
	$(".nav_bar").addClass('nav_top');
}

/*----------------------------------------*/


     yTop= $("#tekstPosleUkusa").offset().top;
	 yBot= $("#kontakt").offset().top;
/*----------------Blue------------------------*/  
    if (scroll > yTop && scroll < yBot)
{

	 b =(bluecolor(scroll));



	//console.log("b= "+b);

	
}
else
{
	b=255;
}
/*--------------------Red---------------------------*/
	rTop = (yBot + yTop)/2

    if (scroll > rTop && scroll < yBot)
{

	 r =(redcolor(scroll));



	//console.log("r= "+r);

	
}
else
{
	r=255;
}
/*--------------------Green--------------------------*/

	rTop = (yBot + yTop)/2
	gmid =(rTop+yBot)/2;

    if ((scroll > yTop && scroll < rTop))
{

	 g =(greencolor1(scroll));



	//console.log("g= "+g);

	
}
else
	if (scroll >gmid && scroll < yBot)
	{
		g =(greencolor2(scroll));
		//console.log("g= "+g);
	}
	else if (scroll >rTop && scroll < gmid)
	{
		g = 245;
		//console.log("g= "+g);
	}


	else

{
	g=255;
}

/*---------------------BojaPozadine----------------------------*/

document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

/*------------------------------------*/

});

 function bluecolor(scrol)
 {	
	var mid =(yTop+yBot)/2;
	var kol =((yBot-yTop)/136)
 	var blue =187+Math.abs((Math.floor((mid-scrol)/kol)));
 	return blue;
 }

 function redcolor(scrol)
 {
 	rTop = (yBot + yTop)/2
 	var mid =(rTop+yBot)/2;
	var kol =((yBot-rTop)/69)
 	var red =220+Math.abs((Math.floor((mid-scrol)/kol)));
 	return red;
 }

 function greencolor1(scrol)
 {
	var mid =(yTop+yBot)/2;
	var kol =((yBot-yTop)/20)
 	var green =245+Math.abs((Math.floor((mid-scrol)/kol)));
 	return green;
 }

 function greencolor2(scrol)
 {
 	rTop = (yBot + yTop)/2
 	var mid =(rTop+yBot)/2;
	var kol =((yBot-rTop)/20)
 	var green =245+Math.abs((Math.floor((mid-scrol)/kol)));
 	return green;
 }



$('#navUl_mobile').addClass('displayNone');

if (sirina > 768)
{   
$('#nav_mobile').addClass('displayNone');

}
else
{
	$('#navUl').addClass('displayNone');
	$('.nav_bar').addClass('widthFull');
}


window.onresize=function(event) {
sirina = Number($(window).width());
//console.log(sirina);

if (sirina < 768)
{   
	$('#navUl').addClass('displayNone');
	$('.nav_bar').addClass('widthFull');
	$('#nav_mobile').removeClass('displayNone');
    $('.nav_bar').addClass('widthFull');
    $('#ukusiLevi').removeClass('levi');
    $('#ukusiDesni').removeClass('desni');
    $('#ukusiArtcl').addClass('flexCentarUspravno');

    $('#procesLevi').removeClass('levi');
    $('#procesDesni').removeClass('desni');
    $('#procesArtikli').addClass('flexCentarUspravno');

    $('#filLevi').removeClass('levi');
    $('#filDesni').removeClass('desni');
    $('.pasusi').addClass('flexCentarUspravno');
    $('#filLevi').removeClass('filozofijaPasus');
    $('#filDesni').removeClass('filozofijaPasus');
    $('#filLevi').addClass('filozofijaPasus_mob');
    $('#filDesni').addClass('filozofijaPasus_mob');
    $('.citat').addClass('filozofijaPasus_mob');
}
else 

{
	$('#nav_mobile').addClass('displayNone');
	$('#navUl_mobile').addClass('displayNone');
	$('#navUl').removeClass('displayNone');
	$('.nav_bar').removeClass('widthFull');
	$('#ukusiLevi').addClass('levi');
    $('#ukusiDesni').addClass('desni');
    $('#ukusiArtcl').removeClass('flexCentarUspravno');

    $('#procesLevi').addClass('levi');
    $('#procesDesni').addClass('desni');
    $('#procesArtikli').removeClass('flexCentarUspravno');

     $('#filLevi').addClass('levi');
    $('#filDesni').addClass('desni');
    $('.pasusi').removeClass('flexCentarUspravno');
     $('#filLevi').addClass('filozofijaPasus');
    $('#filDesni').addClass('filozofijaPasus');
    $('#filLevi').removeClass('filozofijaPasus_mob');
    $('#filDesni').removeClass('filozofijaPasus_mob');
    $('.citat').removeClass('filozofijaPasus_mob');

}


};

$('#navUl > li').click(navClick);
$('#nav_mobile_menu_icon').click(navMobileMenuClick);

function navMobileMenuClick(e)
{
	var ncl = $('#navUl_mobile');
	ncl.toggleClass('displayNone');

}

$('.navLi_mobile').on('click',function(e)
{
	var ncl = $('#navUl_mobile');
	ncl.toggleClass('displayNone');
});



function navClick(e)

{
	$('#navUl  li a').removeClass('aktivan');
	console.log($('#navUl > li'));
	$(e.target).addClass('aktivan');

}

$(document).ready(function(){
 
    $("#storyCarousel").carousel(
{
    interval: 3000
});
    
    $(".item1").click(function(){
        $("#storyCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#storyCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#storyCarousel").carousel(2);
    });
    
});

/*-------------mapa------------------*/




  var iniTacka=new google.maps.LatLng(30.3595, -97.98937);
  var mapInit = {
  center:iniTacka,
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("mapa"),mapInit);

  function markerInfo (param)
		{ 	
			
			var pr=[];
			pr = eval(param);
  			var infos={};
  			var markeri={};
  			var LLng = new google.maps.LatLng(pr[1],pr[2]);
  			markeri["marker"+pr[0]] = new google.maps.Marker
  				({
  					position: LLng,
  					title: pr[3],
  					
  					map: map
 				});
  
  			markeri["marker"+pr[0]].setMap(map);

  			infos["infow"+pr[0]] = new google.maps.InfoWindow
  				({
    				content: pr[4]
  				});

  			infos["infow"+pr[0]].open(map, markeri["marker"+pr[0]]);

		}

		var listaLokacija =$("<ul></ul>");
		var listaLokacijaContainer =$('#listaLokacijaContainer');
		listaLokacija.addClass('listaLokacija');
		listaLokacijaContainer.append(listaLokacija);

		for (var i = 0; i <= 3; i++) 
		{
			var lokacijaIme={};
			var lokacijaLi = $('<li></li>');
			var klasa = ("p"+i);
			lokacijaLi.addClass(klasa);
			listaLokacija.append(lokacijaLi);
			lokacijaLi.text(window['p'+i][3]);
			lokacijaLi.click(lociraj);

		}

		function lociraj(e)
		{
			var klasa = $(e.target).attr('class');
			console.log(klasa);
			markerInfo(klasa);
		}

