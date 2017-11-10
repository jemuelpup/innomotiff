$(document).ready(function(){
  
  var smallestHeightElementInSlider = 0;
	var sliderSmallestSizeX = 0;
	var sliderSmallestSizeY = 0;
	var containerHeight = 0;
	init();


  $('.header-slider').slick({
  	dots: true,
  	speed: 800,
  	autoplay: false,
	  autoplaySpeed: 5000
	});

  


  $('.cards').slick({
  	slidesToShow: 4,
  	slidesToScroll: 4,
  	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });

  $(".menu").click(function(){
  	$('body>aside').addClass("active");	
  });
  $(".close").click(function(){
  	$('body>aside').removeClass("active");	
  });
  

  var colWidth = ($('.grid').width()/6)-(6*4);
  console.log(colWidth," ito yung width")
  $('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});


  
  

  


	function init(){
		smallestHeightElementInSlider = getSmallestHeightInImgArray($('.header-slider li img'));
		sliderSmallestSizeX = $(smallestHeightElementInSlider.naturalWidth)[0];
		sliderSmallestSizeY = $(smallestHeightElementInSlider.naturalHeight)[0];
  	setSliderHeight(smallestHeightElementInSlider);
  	autoHeight($(".products .card .card-content p"),3);
  }
	function setSliderHeight(imgElement){
		console.log(sliderSmallestSizeY,sliderSmallestSizeX,$(imgElement).width())
		containerHeight = sliderSmallestSizeY/sliderSmallestSizeX*$(imgElement).width();
		containerHeight = containerHeight > $(window).height() ? $(window).height() : containerHeight;
		// console.log(containerHeight+" win="+$(window).height(),"ito yung height")
		$('.header-slider').height(containerHeight);
	}
	function autoHeight(elementArr,numRows){
		console.log(elementArr,"nandito");
  	var height = -Infinity;
  	elementArr.each(function( i, e ){
  		console.log($(e).height(),"height");
  		height = height<$(e).height() ? $(e).height():height;
  	});
  	console.log(height,"ito yung height");
  	elementArr.height(height);
  }
	$(window).resize(function(){
  	setSliderHeight(smallestHeightElementInSlider);
  });

  // this returns the element
	function getSmallestHeightInImgArray(a){
		console.log(a);
		var smallestHeightElement = null;
		var smallestHeight = Infinity;
		a.each(function(){
			if($(this)[0].naturalHeight<smallestHeight){
				smallestHeightElement = this;
			}
  	});
  	return smallestHeightElement;
	}  
});