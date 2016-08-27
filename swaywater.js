





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

if (scroll < 450)
{$("#pocetnaTekst").addClass('nevidljiv');}

$(window).scroll(function (event) {
 scroll = Number($(window).scrollTop());
 console.log(scroll);

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

if (scroll > 5214 && scroll < 10365)
{

	var con=Math.floor(scroll/5214);
	console.log("con ="+con);
}




/*------------------------------------*/

});

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
}
else 

{
	$('#nav_mobile').addClass('displayNone');
	$('#navUl').removeClass('displayNone');
	$('.nav_bar').removeClass('widthFull');
}


};

$('#navUl > li').click(navClick);
$('#nav_mobile_menu_icon').click(navMobileMenuClick);

function navMobileMenuClick(e)
{
	var ncl = $('#navUl_mobile');
	ncl.toggleClass('displayNone');

}



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

var p0 = ["p0",30.3095, -97.93937, "Bee Cave Coffee Co.", "<strong>Bee Cave Coffee Co.</strong><br><a href='http://beecavecoffee.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/cBdxQXPvk1R2' target='_blank'>Directions</a>"],
	p1 = ["p1",30.38707, -97.70366, "Bee Cave Coffee Co. Domain", "<strong>Bee Cave Coffee Co. Domain</strong><br><a href='http://beecavecoffee.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/V2fBw8iUu4G2' target='_blank'>Directions</a>"],
    p2 = ["p2",30.307743, -97.739877, "Central Market Austin North Lamar", "<strong>Central Market Austin North Lamar</strong><br><a href='http://centralmarket.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/3Wdp74k23Nv' target='_blank'>Directions</a>"],
    p3 = ["p3",30.231948, -97.796914, "Central Market Austin Westgate", "<strong>Central Market Austin Westgate</strong><br><a href='http://centralmarket.com' target='_blank'>Website</a> <span class='map-bull'>&bull;</span> <a href='https://goo.gl/maps/VspTG1Atvmy' target='_blank'>Directions</a>"];


  var iniTacka=new google.maps.LatLng(30.3595, -97.98937);
  var mapInit = {
  center:iniTacka,
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("mapa"),mapInit);

  function markerInfo (param)
		{ 	console.log(param);
  			var infos={};
  			var markeri={};
  			var LLng = new google.maps.LatLng(param[1],param[2]);
  			markeri["marker"+param[0]] = new google.maps.Marker
  				({
  					position: LLng,
  					title: param[3
  					],
  					map: map
 				});
  
  			markeri["marker"+param[0]].setMap(map);

  			infos["infow"+param[0]] = new google.maps.InfoWindow
  				({
    				content: param[4]
  				});

  			infos["infow"+param[0]].open(map, markeri["marker"+param[0]]);

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

