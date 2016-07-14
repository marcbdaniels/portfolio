$(document).ready(function(){	



$("img.a").hover(
function() {
$(this).stop().animate({"opacity": "0"}, "fast");
},
function() {
$(this).stop().animate({"opacity": "1"}, "fast");
});

$('li').hover(function() {
    var myText = $(this).text();
    var myImg  = $("#featureImage");
	var myPitch = $("#featurePitch");
	
	
    switch (myText) {
        case 'CATALOGUE DISPLAY MANAGER':
			document.getElementById("featurePitch").innerHTML = "<p>CATALOGUE DISPLAY MANAGER<br/><br/>Create your own custom gift catalogue within a few clicks.<br/><br/>Filter by brand, category, pricing or other to create a unique and targeted product offer to your reward program members. With thousands of products and hundreds of brands constantly being updated, your marketplace can be as wide or as refined as you wish it to be.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Woman-Using-Multiple-Devices-P-92115281.jpg")');			
        break;
        case 'CUSTOMIZATION WIZARD':
			document.getElementById("featurePitch").innerHTML = "<p>CUSTOMIZATION WIZARD<br/><br/>Design a reward catalogue according to your requirements.<br/><br/>With full control over color, images, wording, communications and even URL, you are able to create a reward shopping experience that looks and feels like your company's image. The customization wizard was built for ease of use, so anyone in your company can setup your marketplace and keep the messages and communications updated.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Audience-in-the-lecture-hall--90637598.jpg")');			
        break;
        case 'PAYMENT MODULE':
			document.getElementById("featurePitch").innerHTML = "<p>PAYMENT MODULE<br/><br/>Select your points-to-dollar conversion ratio and much more.<br/><br/>Decide the points-to-dollar conversion ratio and if you allow your members to ''top-off'' using their own credit card to access higher priced gifts. More options like free shipping, no tax and currency rates are all one-click away!</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Car-Engine--Modern-powerful-c-58973120.jpg")');			
		break;
        case 'PRICING PLATEAU':
			document.getElementById("featurePitch").innerHTML = "<p>PRICING PLATEAU<br/><br/>Set price levels for your giveaways or years of service awards.<br/><br/>Build as many price levels (ex: 50$ to 75$, 100 to 120$, etc.) as you wish and only display products available within the set price level for each employee/member. Decide if you wish to offer hundreds of gifts per pricing plateau or refine it down to a select few that better represent the event.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Diverse-Architect-People-Group-98046365.jpg")');			
		break;
        case 'SPECIAL HANDLING':
			document.getElementById("featurePitch").innerHTML = "<p>SPECIAL HANDLING<br/><br/>Should you require special handling, we have you covered.<br/><br/>Need us to package your members gifts using a special box color, insert a personalised thank you letter, gift wrap or any other custom handling? We can do it! These options can all be selected within your admin panel or ask your account manager to assist.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Group-of-People-Audience-Semin-104273879.jpg")');			
		break;
        case 'ADD YOUR OWN REWARDS':
			document.getElementById("featurePitch").innerHTML = "<p>ADD YOUR OWN REWARDS<br/><br/>We can add your personalised gifts or source for you.<br/><br/>We can add any brand or product to your marketplace gift feed. If you wish to offer personalised gifts and deliver them yourself, we can add these to your online reward marketplace. Moreover, if there is a product or brand we don't off but you would like us to, we can source it for you.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-closeup-of-catalog-texture-52780363.jpg")');			
		break;
        case 'EASY INTEGRATION':
			document.getElementById("featurePitch").innerHTML = "<p>EASY INTEGRATION<br/><br/>No need to change recognition practices, we integrate to what you have in place.<br/><br/>No matter the software or internal practices you use to recognize your employees or customers, we can integrate with that. Engentive integration team can be as high tech or as high touch as you need them to be. Let our team do the heavy lifting and most of all, don't change a thing with your internal recognition practices!</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Luxury-Goods-Shopping-86006948.jpg")');			
		break;
		case 'DATA ANALYTICS MODULE':
			document.getElementById("featurePitch").innerHTML = "<p>DATA ANALYTICS MODULE<br/><br/>View redemptions habits, engagement levels and trends.<br/><br/>The only way to track if your reward & recognition program is achieving its objectives is with data. Let us present you the data you need in a simple and effective way to facilitate your decision taking.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Superhero-Business-People-Corp-82324079.jpg")');			
		break;	
		case 'INCREASE COMMUNICATION':
			document.getElementById("featurePitch").innerHTML = "<p>INCREASE COMMUNICATION<br/><br/>Add targeted messages to increase engagement.<br/><br/>Use your reward marketplace as a communication platform to increase engagement. Through your admin panel, you can easily add targeted messages to your employees/members to enhance their shopping experience.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Website-Wireframe-Sketch-And-P-82889510.jpg")');			
		break;	
		case 'ADD STATIC PAGES':
			document.getElementById("featurePitch").innerHTML = "<p>ADD STATIC PAGES<br/><br/>Add static pages with your own content to increase the personalised touch.<br/><br/>Using the easy-to-use customization wizard, any administrator can create and add new content pages to your rewards marketplace. With a few clicks, you can promote your company culture or other reward practice such as travel, special events or charitable donations.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Woman-Multi-Tasking-Working-Wi-84109988.jpg")');			
		break;	
		case 'ALERTS AND NOTIFICATIONS':
			document.getElementById("featurePitch").innerHTML = "<p>ALERTS AND NOTIFICATIONS<br/><br/>We are your eyes and ears on the ground.<br/><br/>To minimize errors in data transmission, you can receive alerts of any abnormal activity and put holds on any account. You and your members can also view real status reports on order processing as well as shipping notifications with tracking numbers.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Woman-Using-Multiple-Devices-P-92115281.jpg")');			
		break;	
		case 'ACCOUNT AND CUSTOMER SUPPORT':
			document.getElementById("featurePitch").innerHTML = "<p>ACCOUNT AND CUSTOMER SUPPORT<br/><br/>Your account manager is always available.<br/><br/>Your dedicated account manager can be reached over the phone, email or live chat to assist you with any of your account questions. If you want us to, we can also offer customer support to your employees/members for their shopping or order questions.</p>";
			$(myImg).css('background-image', 'url("../img/bigstock-Woman-With-Digital-Tablet-Shop-97288265.jpg")');			
		}
		    
});

	$('.demoButton').click(function(){
		$('html, body').animate({scrollTop : ($('#demoForm').offset().top-70)},800);
		return false;
	});

  autoPlayYouTubeModal();

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
          $('.modal').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }
  
/*
  $(function () {
  $('#btnSendRequest').on('click', function (event) {
      event.preventDefault();
//    alert("Thank you. An account executive will contact you soon.");
    var email = 'marc@klfmedia.com';
    var subject = 'Engentive Demo Request';
    var emailBody = 'Name: {FullName}';
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });

});
*/

/*
(function () {

myHTMLInclude();

function myHTMLInclude() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("w3-include-html");
          a.innerHTML = xhttp.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          myHTMLInclude();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

})();
*/

//validates a 10-digit phone number and hyphens for easy record keeping
$('#phonenum').blur( function(){
	var integers = $("#phonenum").val();
	integers = integers.replace(/[^a-zA-Z 0-9]+/g,'');
	integers = integers.replace(/\s/g,'');
	var first10 = integers.substring(0,10);
	var all10 = first10.length;
	var finalfon;
	if (all10 >= 1 && all10 < 10) {
		alert('Please enter a 10-digit phone number, starting with the area code');
		$('#phonenum').focus();
	}
	else if (all10 >= 10) {
		finalfon = first10.substr(0,3)+"-"+first10.substr(3,3)+"-"+first10.substr(6,4)+" "+integers.substr(10);
//		alert(finalfon);
		$("#phonenum").val(finalfon);
	}
});

	
	//validate form data
	 $('#btnSendRequest').click( function(){
		if($('#FullName').val()==''){
			alert('a Name is Required');
			$('#FullName').focus();
			return false;
		}
	if($('#eMail').val()==''){
			alert('Email is Required');
			$('#eMail').focus();
			return false;
		}
	if($('#phonenum').val()==''){
			alert('Please enter a 10-digit phone number, starting with the area code');
			$('#phonenum').focus();
			return false;
		}
	$('#frmSendReq').submit();
	});


// STICKY HEADER

$(window).scroll(function() {
if ($(this).scrollTop() > 160){  
//if ($(this).scrollTop() + $(this).innerHieght()>=$(this)[0].scrollHeight) {
    $('.pageHeader').addClass("sticky");
  }
  else{
    $('.pageHeader').removeClass("sticky");
  }
});

//  BRAND TABLE ON CATALOGUE PAGE
		//randomize brand tables on catalogue page
    	(function($){
    	   $.fn.shuffle = function() {
    	      var allElems = this.get(),
    	           getRandom = function(max) {
    	               return Math.floor(Math.random() * max);
    	           },
    	           shuffled = $.map(allElems, function(){
    	               var random = getRandom(allElems.length),
    	                   randEl = $(allElems[random]).clone(true)[0];
    	               allElems.splice(random, 1);
    	               return randEl;
    	          });
    	       this.each(function(i){
    	           $(this).replaceWith($(shuffled[i]));
    	       });
    	       return $(shuffled);
    	   };
    	 
    	})(jQuery);
    	$('ul#brandrow_1 li').shuffle();
			var list11 = $("ul#brandrow_1 li"); 
    	$('ul#brandrow_2 li').shuffle();
			var list12 = $("ul#brandrow_2 li"); 
    	$('ul#brandrow_3 li').shuffle();
			var list13 = $("ul#brandrow_3 li"); 
    	$('ul#brandrow_4 li').shuffle();
			var list14 = $("ul#brandrow_4 li"); 
    	$('ul#brandrow_5 li').shuffle();
			var list15 = $("ul#brandrow_5 li"); 
    	$('ul#brandrow_6 li').shuffle();
			var list16 = $("ul#brandrow_6 li"); 
    	$('ul#brandrow_7 li').shuffle();
			var list17 = $("ul#brandrow_7 li"); 
    	$('ul#brandrow_8 li').shuffle();
			var list18 = $("ul#brandrow_8 li"); 
    	$('ul#brandrow_9 li').shuffle();
			var list19 = $("ul#brandrow_9 li"); 

		//right and left controls on brand tables
            //move the last list item before the first item. The purpose of this is if the user clicks previous he will be able to see the last item.  
            $('.brandsplat_ul li:first').before($('.brandsplat_ul li:last'));  
      
      
            //when user clicks the image for sliding right  
            $('#slide_right img').click(function(){ 
                var item_width = $('ul#brandrow_1 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_1').css('left')) - item_width;  
                $('ul#brandrow_1').animate({'left' : left_indent},200,function(){  
                    $('ul#brandrow_1 li:last').after($('ul#brandrow_1 li:first'));  
                    $('ul#brandrow_1').css({'left' : '-150px'});  
					});  

				var item_width = $('ul#brandrow_2 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_2').css('left')) - item_width;  
                $('ul#brandrow_2').animate({'left' : left_indent},600,function(){  
                    $('ul#brandrow_2 li:last').after($('ul#brandrow_2 li:first'));  
                    $('ul#brandrow_2').css({'left' : '-150px'});  
					});  

				var item_width = $('ul#brandrow_3 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_3').css('left')) - item_width;  
                $('ul#brandrow_3').animate({'left' : left_indent},400,function(){  
                    $('ul#brandrow_3 li:last').after($('ul#brandrow_3 li:first'));  
                    $('ul#brandrow_3').css({'left' : '-150px'});  
					});  

                var item_width = $('ul#brandrow_4 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_4').css('left')) - item_width;  
                $('ul#brandrow_4').animate({'left' : left_indent},200,function(){  
                    $('ul#brandrow_4 li:last').after($('ul#brandrow_4 li:first'));  
                    $('ul#brandrow_4').css({'left' : '-150px'});  
					});  

                var item_width = $('ul#brandrow_5 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_5').css('left')) - item_width;  
                $('ul#brandrow_5').animate({'left' : left_indent},400,function(){  
                    $('ul#brandrow_5 li:last').after($('ul#brandrow_5 li:first'));  
                    $('ul#brandrow_5').css({'left' : '-150px'});  
					});  

                var item_width = $('ul#brandrow_6 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_6').css('left')) - item_width;  
                $('ul#brandrow_6').animate({'left' : left_indent},600,function(){  
                    $('ul#brandrow_6 li:last').after($('ul#brandrow_6 li:first'));  
                    $('ul#brandrow_6').css({'left' : '-150px'});  
					});  
					
                var item_width = $('ul#brandrow_7 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_7').css('left')) - item_width;  
                $('ul#brandrow_7').animate({'left' : left_indent},200,function(){  
                    $('ul#brandrow_7 li:last').after($('ul#brandrow_7 li:first'));  
                    $('ul#brandrow_7').css({'left' : '-150px'});  
					});  
                var item_width = $('ul#brandrow_8 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_8').css('left')) - item_width;  
                $('ul#brandrow_8').animate({'left' : left_indent},400,function(){  
                    $('ul#brandrow_8 li:last').after($('ul#brandrow_8 li:first'));  
                    $('ul#brandrow_8').css({'left' : '-150px'});  
					});  
                var item_width = $('ul#brandrow_9 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_9').css('left')) - item_width;  
                $('ul#brandrow_9').animate({'left' : left_indent},600,function(){  
                    $('ul#brandrow_9 li:last').after($('ul#brandrow_9 li:first'));  
                    $('ul#brandrow_9').css({'left' : '-150px'});  
					});  

			});  
      
            //when user clicks the image for sliding left  
            $('#slide_left img').click(function(){  
      
                var item_width = $('ul#brandrow_1 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_1').css('left')) + item_width;  
                $('ul#brandrow_1').animate({'left' : left_indent},200,function(){  
					$('ul#brandrow_1 li:first').before($('ul#brandrow_1 li:last'));  
					$('ul#brandrow_1').css({'left' : '-150px'});  
                });  
      
                var item_width = $('ul#brandrow_2 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_2').css('left')) + item_width;  
                $('ul#brandrow_2').animate({'left' : left_indent},600,function(){  
					$('ul#brandrow_2 li:first').before($('ul#brandrow_2 li:last'));  
					$('ul#brandrow_2').css({'left' : '-150px'});  
                });  

                var item_width = $('ul#brandrow_3 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_3').css('left')) + item_width;  
                $('ul#brandrow_3').animate({'left' : left_indent},400,function(){  
					$('ul#brandrow_3 li:first').before($('ul#brandrow_3 li:last'));  
					$('ul#brandrow_3').css({'left' : '-150px'});  
                });  
                var item_width = $('ul#brandrow_4 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_4').css('left')) + item_width;  
                $('ul#brandrow_4').animate({'left' : left_indent},200,function(){  
					$('ul#brandrow_4 li:first').before($('ul#brandrow_4 li:last'));  
					$('ul#brandrow_4').css({'left' : '-150px'});  
                });  
      
                var item_width = $('ul#brandrow_5 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_5').css('left')) + item_width;  
                $('ul#brandrow_5').animate({'left' : left_indent},600,function(){  
					$('ul#brandrow_5 li:first').before($('ul#brandrow_5 li:last'));  
					$('ul#brandrow_5').css({'left' : '-150px'});  
                });  

                var item_width = $('ul#brandrow_6 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_6').css('left')) + item_width;  
                $('ul#brandrow_6').animate({'left' : left_indent},400,function(){  
					$('ul#brandrow_6 li:first').before($('ul#brandrow_6 li:last'));  
					$('ul#brandrow_6').css({'left' : '-150px'});  
                });  
                var item_width = $('ul#brandrow_7 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_7').css('left')) + item_width;  
                $('ul#brandrow_7').animate({'left' : left_indent},200,function(){  
					$('ul#brandrow_7 li:first').before($('ul#brandrow_7 li:last'));  
					$('ul#brandrow_7').css({'left' : '-150px'});  
                });  
      
                var item_width = $('ul#brandrow_8 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_8').css('left')) + item_width;  
                $('ul#brandrow_8').animate({'left' : left_indent},600,function(){  
					$('ul#brandrow_8 li:first').before($('ul#brandrow_8 li:last'));  
					$('ul#brandrow_8').css({'left' : '-150px'});  
                });  

                var item_width = $('ul#brandrow_9 li').outerWidth() + 10;  
                var left_indent = parseInt($('ul#brandrow_9').css('left')) + item_width;  
                $('ul#brandrow_9').animate({'left' : left_indent},400,function(){  
					$('ul#brandrow_9 li:first').before($('ul#brandrow_9 li:last'));  
					$('ul#brandrow_9').css({'left' : '-150px'});  
                });  
				
            });  

    $(".hp-category").hover(function(){
		$(this).stop().animate({"opacity": "0.5"}, "fast");
		},
		function() {
			$(this).stop().animate({"opacity": "1"}, "fast");
		});
		

	//when the user selects a category	
    $(".hp-category").click(function(){

		$(".brandTables").addClass("fuzzed");
		setTimeout(function(){
			$("#apparel").addClass("sneaky");
			$("#children").addClass("sneaky");
			$("#electronics").addClass("sneaky");
			$("#giftcards").addClass("sneaky");
			$("#homeworks").addClass("sneaky");
			$("#kitchen").addClass("sneaky");
			$("#outdoors").addClass("sneaky");
			$("#sports").addClass("sneaky");
			$("#videogames").addClass("sneaky");
		}, 200);
    });
	$("#giftcardButton").click(function(){
		setTimeout(function(){
			$("#giftcards").removeClass("sneaky");
				$("#row4icon").removeClass("sneaky");
				$("#row4caption").removeClass("sneaky");
				$("#row4link").removeClass("sneaky");
				$("#row4text").removeClass("sneaky");
		var uls = $("ul");
		uls.eq(3).html(list14);
			$(".brandTables").removeClass("fuzzed");
		}, 201);
	});

    $("#sportsButton").click(function(){
		setTimeout(function(){
			$("#sports").removeClass("sneaky");
				$("#row8icon").removeClass("sneaky");
				$("#row8caption").removeClass("sneaky");
				$("#row8link").removeClass("sneaky");
				$("#row8text").removeClass("sneaky");
		var uls = $("ul");
		uls.eq(7).html(list18);
			$(".brandTables").removeClass("fuzzed");
		}, 201);
	});
    $("#videogamesButton").click(function(){
		setTimeout(function(){
			$("#videogames").removeClass("sneaky");
				$("#row9icon").removeClass("sneaky");
				$("#row9caption").removeClass("sneaky");
				$("#row9link").removeClass("sneaky");
				$("#row9text").removeClass("sneaky");
		var uls = $("ul");
		uls.eq(8).html(list19);
			$(".brandTables").removeClass("fuzzed");
		}, 201);
	});

	//these will be a bit more complicated
    $("#apparelButton").click(function(){
		setTimeout(function(){
			$("#apparel").removeClass("sneaky");
			$("#children").removeClass("sneaky");
				$("#row2icon").addClass("sneaky");
				$("#row2caption").addClass("sneaky");
				$("#row2link").addClass("sneaky");
				$("#row2text").addClass("sneaky");
		var uls = $("ul");
		uls.eq(0).html(list11);
		uls.eq(1).html(uls.eq(0).html());
		uls.eq(2).html(uls.eq(0).html());

	$('ul#brandrow_1').animate({'left' : '170'},1,function(){  $('ul#brandrow_1 li:first').before($('ul#brandrow_1 li:last'));  $('ul#brandrow_1').css({'left' : '-170px'}); });  
	$('ul#brandrow_1').animate({'left' : '170'},1,function(){  $('ul#brandrow_1 li:first').before($('ul#brandrow_1 li:last'));  $('ul#brandrow_1').css({'left' : '-170px'}); });  
	$('ul#brandrow_1').animate({'left' : '170'},1,function(){  $('ul#brandrow_1 li:first').before($('ul#brandrow_1 li:last'));  $('ul#brandrow_1').css({'left' : '-170px'}); });  
	$('ul#brandrow_1').animate({'left' : '170'},1,function(){  $('ul#brandrow_1 li:first').before($('ul#brandrow_1 li:last'));  $('ul#brandrow_1').css({'left' : '-170px'}); });  
	$('ul#brandrow_1').animate({'left' : '170'},1,function(){  $('ul#brandrow_1 li:first').before($('ul#brandrow_1 li:last'));  $('ul#brandrow_1').css({'left' : '-170px'}); });  
	$('ul#brandrow_1').animate({'left' : '170'},1,function(){  $('ul#brandrow_1 li:first').before($('ul#brandrow_1 li:last'));  $('ul#brandrow_1').css({'left' : '-170px'}); });  
	$('ul#brandrow_1').animate({'left' : '170'},1,function(){  $('ul#brandrow_1 li:first').before($('ul#brandrow_1 li:last'));  $('ul#brandrow_1').css({'left' : '-170px'}); });  

		}, 202);

	setTimeout(function(){$(".brandTables").removeClass("fuzzed");},250);
	});

    $("#childrenButton").click(function(){
		setTimeout(function(){
			$("#children").removeClass("sneaky");
				$("#row2icon").removeClass("sneaky");
				$("#row2caption").removeClass("sneaky");
				$("#row2link").removeClass("sneaky");
				$("#row2text").removeClass("sneaky");
			$("#electronics").removeClass("sneaky");
				$("#row3icon").addClass("sneaky");
				$("#row3caption").addClass("sneaky");
				$("#row3link").addClass("sneaky");
				$("#row3text").addClass("sneaky");
		var uls = $("ul");
		uls.eq(1).html(list12);
		uls.eq(2).html(uls.eq(1).html());
		uls.eq(3).html(uls.eq(1).html());

	
	$('ul#brandrow_2').animate({'left' : '170'},1,function(){  $('ul#brandrow_2 li:first').before($('ul#brandrow_2 li:last'));  $('ul#brandrow_2').css({'left' : '-170px'}); });  
	$('ul#brandrow_2').animate({'left' : '170'},1,function(){  $('ul#brandrow_2 li:first').before($('ul#brandrow_2 li:last'));  $('ul#brandrow_2').css({'left' : '-170px'}); });  
	$('ul#brandrow_2').animate({'left' : '170'},1,function(){  $('ul#brandrow_2 li:first').before($('ul#brandrow_2 li:last'));  $('ul#brandrow_2').css({'left' : '-170px'}); });  
	$('ul#brandrow_2').animate({'left' : '170'},1,function(){  $('ul#brandrow_2 li:first').before($('ul#brandrow_2 li:last'));  $('ul#brandrow_2').css({'left' : '-170px'}); });  
	$('ul#brandrow_2').animate({'left' : '170'},1,function(){  $('ul#brandrow_2 li:first').before($('ul#brandrow_2 li:last'));  $('ul#brandrow_2').css({'left' : '-170px'}); });  
	$('ul#brandrow_2').animate({'left' : '170'},1,function(){  $('ul#brandrow_2 li:first').before($('ul#brandrow_2 li:last'));  $('ul#brandrow_2').css({'left' : '-170px'}); });  
	$('ul#brandrow_2').animate({'left' : '170'},1,function(){  $('ul#brandrow_2 li:first').before($('ul#brandrow_2 li:last'));  $('ul#brandrow_2').css({'left' : '-170px'}); });  
		

		}, 202);

	setTimeout(function(){$(".brandTables").removeClass("fuzzed");},250);	});

    $("#electronicsButton").click(function(){
		setTimeout(function(){
			$("#electronics").removeClass("sneaky");
				$("#row3icon").removeClass("sneaky");
				$("#row3caption").removeClass("sneaky");
				$("#row3link").removeClass("sneaky");
				$("#row3text").removeClass("sneaky");
			$("#giftcards").removeClass("sneaky");
				$("#row4icon").addClass("sneaky");
				$("#row4caption").addClass("sneaky");
				$("#row4link").addClass("sneaky");
				$("#row4text").addClass("sneaky");
		var uls = $("ul");
		uls.eq(2).html(list13);
		uls.eq(3).html(uls.eq(2).html());
		uls.eq(4).html(uls.eq(2).html());

	$('ul#brandrow_3').animate({'left' : '170'},1,function(){  $('ul#brandrow_3 li:first').before($('ul#brandrow_3 li:last'));  $('ul#brandrow_3').css({'left' : '-170px'}); });  
	$('ul#brandrow_3').animate({'left' : '170'},1,function(){  $('ul#brandrow_3 li:first').before($('ul#brandrow_3 li:last'));  $('ul#brandrow_3').css({'left' : '-170px'}); });  
	$('ul#brandrow_3').animate({'left' : '170'},1,function(){  $('ul#brandrow_3 li:first').before($('ul#brandrow_3 li:last'));  $('ul#brandrow_3').css({'left' : '-170px'}); });  
	$('ul#brandrow_3').animate({'left' : '170'},1,function(){  $('ul#brandrow_3 li:first').before($('ul#brandrow_3 li:last'));  $('ul#brandrow_3').css({'left' : '-170px'}); });  
	$('ul#brandrow_3').animate({'left' : '170'},1,function(){  $('ul#brandrow_3 li:first').before($('ul#brandrow_3 li:last'));  $('ul#brandrow_3').css({'left' : '-170px'}); });  
	$('ul#brandrow_3').animate({'left' : '170'},1,function(){  $('ul#brandrow_3 li:first').before($('ul#brandrow_3 li:last'));  $('ul#brandrow_3').css({'left' : '-170px'}); });  
	$('ul#brandrow_3').animate({'left' : '170'},1,function(){  $('ul#brandrow_3 li:first').before($('ul#brandrow_3 li:last'));  $('ul#brandrow_3').css({'left' : '-170px'}); });  
		

		}, 202);

	setTimeout(function(){$(".brandTables").removeClass("fuzzed");},250);
	});

    $("#homeworksButton").click(function(){
		setTimeout(function(){
			$("#homeworks").removeClass("sneaky");
				$("#row5icon").removeClass("sneaky");
				$("#row5caption").removeClass("sneaky");
				$("#row5link").removeClass("sneaky");
				$("#row5text").removeClass("sneaky");
			$("#kitchen").removeClass("sneaky");
				$("#row6icon").addClass("sneaky");
				$("#row6caption").addClass("sneaky");
				$("#row6link").addClass("sneaky");
				$("#row6text").addClass("sneaky");
		var uls = $("ul");
		uls.eq(4).html(list15);
		uls.eq(5).html(uls.eq(4).html());
		uls.eq(6).html(uls.eq(4).html());

	$('ul#brandrow_5').animate({'left' : '170'},1,function(){  $('ul#brandrow_5 li:first').before($('ul#brandrow_5 li:last'));  $('ul#brandrow_5').css({'left' : '-170px'}); });  
	$('ul#brandrow_5').animate({'left' : '170'},1,function(){  $('ul#brandrow_5 li:first').before($('ul#brandrow_5 li:last'));  $('ul#brandrow_5').css({'left' : '-170px'}); });  
	$('ul#brandrow_5').animate({'left' : '170'},1,function(){  $('ul#brandrow_5 li:first').before($('ul#brandrow_5 li:last'));  $('ul#brandrow_5').css({'left' : '-170px'}); });  
	$('ul#brandrow_5').animate({'left' : '170'},1,function(){  $('ul#brandrow_5 li:first').before($('ul#brandrow_5 li:last'));  $('ul#brandrow_5').css({'left' : '-170px'}); });  
	$('ul#brandrow_5').animate({'left' : '170'},1,function(){  $('ul#brandrow_5 li:first').before($('ul#brandrow_5 li:last'));  $('ul#brandrow_5').css({'left' : '-170px'}); });  
	$('ul#brandrow_5').animate({'left' : '170'},1,function(){  $('ul#brandrow_5 li:first').before($('ul#brandrow_5 li:last'));  $('ul#brandrow_5').css({'left' : '-170px'}); });  
	$('ul#brandrow_5').animate({'left' : '170'},1,function(){  $('ul#brandrow_5 li:first').before($('ul#brandrow_5 li:last'));  $('ul#brandrow_5').css({'left' : '-170px'}); });  
		
		}, 202);

	setTimeout(function(){$(".brandTables").removeClass("fuzzed");},250);
	});

	$("#kitchenButton").click(function(){
		setTimeout(function(){
			$("#kitchen").removeClass("sneaky");
				$("#row6icon").removeClass("sneaky");
				$("#row6caption").removeClass("sneaky");
				$("#row6link").removeClass("sneaky");
				$("#row6text").removeClass("sneaky");
			$("#outdoors").removeClass("sneaky");
				$("#row7icon").addClass("sneaky");
				$("#row7caption").addClass("sneaky");
				$("#row7link").addClass("sneaky");
				$("#row7text").addClass("sneaky");
		var uls = $("ul");
		uls.eq(5).html(list16);
		uls.eq(6).html(uls.eq(5).html());
		uls.eq(7).html(uls.eq(5).html());

	$('ul#brandrow_6').animate({'left' : '170'},1,function(){  $('ul#brandrow_6 li:first').before($('ul#brandrow_6 li:last'));  $('ul#brandrow_6').css({'left' : '-170px'}); });  
	$('ul#brandrow_6').animate({'left' : '170'},1,function(){  $('ul#brandrow_6 li:first').before($('ul#brandrow_6 li:last'));  $('ul#brandrow_6').css({'left' : '-170px'}); });  
	$('ul#brandrow_6').animate({'left' : '170'},1,function(){  $('ul#brandrow_6 li:first').before($('ul#brandrow_6 li:last'));  $('ul#brandrow_6').css({'left' : '-170px'}); });  
	$('ul#brandrow_6').animate({'left' : '170'},1,function(){  $('ul#brandrow_6 li:first').before($('ul#brandrow_6 li:last'));  $('ul#brandrow_6').css({'left' : '-170px'}); });  
	$('ul#brandrow_6').animate({'left' : '170'},1,function(){  $('ul#brandrow_6 li:first').before($('ul#brandrow_6 li:last'));  $('ul#brandrow_6').css({'left' : '-170px'}); });  
	$('ul#brandrow_6').animate({'left' : '170'},1,function(){  $('ul#brandrow_6 li:first').before($('ul#brandrow_6 li:last'));  $('ul#brandrow_6').css({'left' : '-170px'}); });  
	$('ul#brandrow_6').animate({'left' : '170'},1,function(){  $('ul#brandrow_6 li:first').before($('ul#brandrow_6 li:last'));  $('ul#brandrow_6').css({'left' : '-170px'}); });  

		}, 202);

	setTimeout(function(){$(".brandTables").removeClass("fuzzed");},250);
	});

	$("#outdoorsButton").click(function(){
		setTimeout(function(){
			$("#outdoors").removeClass("sneaky");
				$("#row7icon").removeClass("sneaky");
				$("#row7caption").removeClass("sneaky");
				$("#row7link").removeClass("sneaky");
				$("#row7text").removeClass("sneaky");
			$("#sports").removeClass("sneaky");
				$("#row8icon").addClass("sneaky");
				$("#row8caption").addClass("sneaky");
				$("#row8link").addClass("sneaky");
				$("#row8text").addClass("sneaky");
		var uls = $("ul");
		uls.eq(6).html(list17);
		uls.eq(7).html(uls.eq(6).html());
		uls.eq(8).html(uls.eq(6).html());

	$('ul#brandrow_7').animate({'left' : '170'},1,function(){  $('ul#brandrow_7 li:first').before($('ul#brandrow_7 li:last'));  $('ul#brandrow_7').css({'left' : '-170px'}); });  
	$('ul#brandrow_7').animate({'left' : '170'},1,function(){  $('ul#brandrow_7 li:first').before($('ul#brandrow_7 li:last'));  $('ul#brandrow_7').css({'left' : '-170px'}); });  
	$('ul#brandrow_7').animate({'left' : '170'},1,function(){  $('ul#brandrow_7 li:first').before($('ul#brandrow_7 li:last'));  $('ul#brandrow_7').css({'left' : '-170px'}); });  
	$('ul#brandrow_7').animate({'left' : '170'},1,function(){  $('ul#brandrow_7 li:first').before($('ul#brandrow_7 li:last'));  $('ul#brandrow_7').css({'left' : '-170px'}); });  
	$('ul#brandrow_7').animate({'left' : '170'},1,function(){  $('ul#brandrow_7 li:first').before($('ul#brandrow_7 li:last'));  $('ul#brandrow_7').css({'left' : '-170px'}); });  
	$('ul#brandrow_7').animate({'left' : '170'},1,function(){  $('ul#brandrow_7 li:first').before($('ul#brandrow_7 li:last'));  $('ul#brandrow_7').css({'left' : '-170px'}); });  
	$('ul#brandrow_7').animate({'left' : '170'},1,function(){  $('ul#brandrow_7 li:first').before($('ul#brandrow_7 li:last'));  $('ul#brandrow_7').css({'left' : '-170px'}); });  
		
		}, 202);
	setTimeout(function(){$(".brandTables").removeClass("fuzzed");},250);
	});


//SAFARI DOES NOT SUPPORT HTML5 DOWNLOAD ATTRIBUTE. IF SAFARI USER CLICKS PDFBUTTON, DOCUMENT OPENS IN A NEW TAB
		$(".pdfButton a").click(function() {
			var browser = getBrowserInfo(); 
			var d_loader = browser.substr(0,6);
			console.log(d_loader);
				if (d_loader == "Safari") {
				$(".pdfButton a").attr('target', '_blank');
				$(".pdfButton a").removeAttr('download');
				console.log($(".pdfButton a").attr('href'));
			}
		});	
});

function getBrowserInfo()
{
	var ua = navigator.userAgent, tem,
	M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1]))
	{
		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+(tem[1] || '');
	}
	if(M[1]=== 'Chrome')
	{
		tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
		if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	}
	M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) 
		M.splice(1, 1, tem[1]);
	return M.join(' ');
	
}
