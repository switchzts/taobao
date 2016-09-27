$(function(){
	//头部
	$('header li:not(.no-bg)').hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})

	$('.top-left>ul>li:first').hover(function(){
		$('#top-bg-1').show();
	},function(){
		$('#top-bg-1').hide();
	});
	$('#top-bg-1').hover(function(){
		$('#top-bg-1').show();
	},function(){
		$('#top-bg-1').hide();
	})

	$('#top-bg-1-bottom a:first').click(function(){
		$('#bg-1-contain>ul').animate({"marginLeft":"-275px"});
		return false;
	})
	$('#top-bg-1-bottom a:last').click(function(){
		$('#bg-1-contain>ul').animate({"marginLeft":"0px"});
		return false;
	})

	$('.top-left>ul>li:eq(1)').hover(function(){
		$('#top-bg-2').show();
	},function(){
		$('#top-bg-2').hide();
	});
	$('#top-bg-2').hover(function(){
		$('#top-bg-2').show();
	},function(){
		$('#top-bg-2').hide();
	})

	$('.top-right>ul>li:eq(0)').hover(function(){
		$('#top-bg-3').show();
	},function(){
		$('#top-bg-3').hide();
	});
	$('#top-bg-3').hover(function(){
		$('#top-bg-3').show();
	},function(){
		$('#top-bg-3').hide();
	})

	$('.top-right>ul>li:eq(1)').hover(function(){
		$('#top-bg-4').show();
	},function(){
		$('#top-bg-4').hide();
	});
	$('#top-bg-4').hover(function(){
		$('#top-bg-4').show();
	},function(){
		$('#top-bg-4').hide();
	})

	$('.top-right>ul>li:eq(2)').hover(function(){
		$('#top-bg-5').show();
	},function(){
		$('#top-bg-5').hide();
	});
	$('#top-bg-5').hover(function(){
		$('#top-bg-5').show();
	},function(){
		$('#top-bg-5').hide();
	})

	$('.top-right>ul>li:eq(4)').hover(function(){
		$('#top-bg-6').show();
	},function(){
		$('#top-bg-6').hide();
	});
	$('#top-bg-6').hover(function(){
		$('#top-bg-6').show();
	},function(){
		$('#top-bg-6').hide();
	})

	$('.top-right>ul>li:eq(5)').hover(function(){
		$('#top-bg-7').show();
	},function(){
		$('#top-bg-7').hide();
	});
	$('#top-bg-7').hover(function(){
		$('#top-bg-7').show();
	},function(){
		$('#top-bg-7').hide();
	})

	$('.top-right>ul>li:eq(6)').hover(function(){
		$('#top-bg-8').show();
	},function(){
		$('#top-bg-8').hide();
	});
	$('#top-bg-8').hover(function(){
		$('#top-bg-8').show();
	},function(){
		$('#top-bg-8').hide();
	})

	//输入框上方按钮
	$('#search>p>span:eq(0)').addClass('content-focus');
	$('#search>p>span:not(#tianmao)').click(function(){
		$('#search>p>span').removeClass('content-focus');
		$('#tianmao').removeClass('content-focus-2');
		$('#tianmao').css("background-color","#FFF");
		$('#tianmao').parent().next().css("border-color","#FF5400");
		$('#tianmao').parent().parent().find("button").css("background-color","#FF5400");
		$(this).addClass('content-focus');
	});
	$('#tianmao').click(function(){
		$('#search>p>span').removeClass('content-focus');
		$('#tianmao').addClass("content-focus-2");
		$(this).css("background-color","#C60000");
		$(this).parent().next().css("border-color","#C60000");
		$(this).parent().parent().find("button").css("background-color","#C60000");
	});

    //left-bar-bg绑定
    $('#main-left-bar>ul>li').each(function(index,element){
    	$(this).hover(function(){
			$(this).css("background-color","#F94A14");
			$('div.main-bg:eq('+index+')').fadeIn();
			$(this).find("img").attr('src','images/main-left-bar-icon-hover.png')
		},function(){
			$(this).css("background-color","#FF6537");
			$('div.main-bg:eq('+index+')').hide();
			$(this).find("img").attr('src','images/main-left-bar-icon.png')
		});
		$('div.main-bg').hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})
    })
    //轮播图1
    var i = 0;
    var flag = false;
    $('#prev').click(function(){
    	if(flag) return;
    	flag = true;
    	if(parseInt($('#imgs-1').css("left"))<-2600){
    		$('#imgs-1').css('left','-520px');
    	}
    	$('#imgs-1').animate({"left":"-=520px"},250,function(){
    		flag = false;
    		$('#focusImg-1 .buttons span').removeClass('on');
    		i--;if(i<0) i=4;
    	    $('#focusImg-1 .buttons span:eq('+i+')').addClass('on');
    	    
    	});
    	
    })
    $('#next').click(function(){
    	if(flag) return;
    	flag = true;
    	if(parseInt($('#imgs-1').css("left"))>-520){
    		$('#imgs-1').css('left','-2600px');
    	}
    	$('#imgs-1').animate({"left":"+=520px"},250,function(){
    		flag = false;
    		$('#focusImg-1 .buttons span').removeClass('on');
    		i++;if(i>4) i=0;
    		$('#focusImg-1 .buttons span:eq('+i+')').addClass('on');
    		
    	});
    })
    //按钮
    $('#focusImg-1 .buttons span').each(function(index,element){
    	$(this).click(function(){
    		$('#focusImg-1 .buttons span').removeClass('on');
    		$(this).addClass('on');
    		$('#imgs-1').animate({"left":index*(-520)-520},250)
    		i=index;
    	});
    })
    //自动播放
    var timer = null;
    function play() {
        timer = setTimeout(function () {
            $('#next').click();
            play();
        }, 4000);
    }
    function stop() {
        clearTimeout(timer);
    }
    $("#focusImg-1 .left")[0].onmouseover = stop;
    $("#focusImg-1 .left")[0].onmouseout = play;
    play();



    //轮播图2
    var j = 0;
    var flag2 = false;
    $('#prev2').click(function(){
    	if(flag2) return;
    	flag2 = true;
    	$("#focusImg-2>").find('strong').html(j+1);
    	if(parseInt($('#imgs-2').css("left"))<-2590){
    		$('#imgs-2').css('left','-518px');
    	}
    	$('#imgs-2').animate({"left":"-=518px"},250,function(){
    		flag2 = false;
    		$('#focusImg-2 .buttons span').removeClass('on');
    		j--;if(j<0) j=4;
    	    $('#focusImg-2 .buttons span:eq('+j+')').addClass('on');
    	    
    	});
    	
    })
    $('#next2').click(function(){
    	if(flag2) return;
    	flag2 = true;
    	$("#focusImg-2>").find('strong').html(j+1);
    	if(parseInt($('#imgs-2').css("left"))>-518){
    		$('#imgs-2').css('left','-2600px');
    	}
    	$('#imgs-2').animate({"left":"+=520px"},250,function(){
    		flag2 = false;
    		$('#focusImg-2 .buttons span').removeClass('on');
    		j++;if(j>4) j=0;
    		$('#focusImg-2 .buttons span:eq('+j+')').addClass('on');
    		
    	});
    })
    //按钮
    $('#focusImg-2 .buttons span').each(function(index,element){
    	$(this).click(function(){
    		$('#focusImg-2 .buttons span').removeClass('on');
    		$(this).addClass('on');
    		$('#imgs-2').animate({"left":index*(-518)-518},250)
    		j=index;
    	});
    })
    //自动播放
    var timer2 = null;
    function play2() {
        timer2 = setTimeout(function () {
            $('#next2').click();
            play2();
        }, 4000);
    }
    function stop2() {
        clearTimeout(timer2);
    }
    $("#focusImg-2 .left")[0].onmouseover = stop2;
    $("#focusImg-2 .left")[0].onmouseout = play2;
    play2();

    //右侧标签
    $("#main-right>.Rtag>ul>li").each(function(index,element){
    	$(this).mouseover(function(){
    		$("#main-right>.Rtag").find('div').hide();
    		$('#main-right>.Rtag>div:eq('+index+')').show();
    		$(this).css({"border-bottom":"2px solid #FF4400","font-weight":"bold"})
    		       .siblings().css({"border-bottom":"none","font-weight":"normal"});
    	})
    })
    $("#main-right>.Rtag>div").find('.hot').css("color","#FF4400");
    //右侧标签2
	$("#Rtag-2-bg1>ul>li>a").each(function(index,element){
		var $tag2 = $("#Rtag-2-bg1").find('.container-2');
		$(this).mouseover(function(){
			$tag2.animate({'left': index*-290},150);
			$(this).css('color','#FF4400')
			       .parent().siblings().find('a').css('color','#000');
		});
		$("#Rtag-2-bg1>ul>li>a:first").mouseover();
	})
	$("#Rtag-2-bg1>.cancle").click(function(){
		$(".Rtag-2-bg").hide();
	})


    $("#Rtag-2-bg2>ul>li>a").each(function(index,element){
		var $tag2 = $("#Rtag-2-bg2").find('.container-2');
		$(this).mouseover(function(){
			$tag2.animate({'left': index*-290},150);
			$(this).css('color','#FF4400')
			       .parent().siblings().find('a').css('color','#000');
		});
		$("#Rtag-2-bg2>ul>li>a:first").mouseover();
	})
	$("#Rtag-2-bg2>.cancle").click(function(){
		$(".Rtag-2-bg").hide();
	})

	$("#Rtag-2-bg3>ul>li>a").each(function(index,element){
		var $tag2 = $("#Rtag-2-bg3").find('.container-2');
		$(this).mouseover(function(){
			$tag2.animate({'left': index*-290},150);
			$(this).css('color','#FF4400')
			       .parent().siblings().find('a').css('color','#000');
		});
		$("#Rtag-2-bg3>ul>li>a:first").mouseover();
	})
	$("#Rtag-2-bg3>.cancle").click(function(){
		$(".Rtag-2-bg").hide();
	})

	$("#Rtag-2-bg4>ul>li>a").each(function(index,element){
		var $tag2 = $("#Rtag-2-bg4").find('.container-2');
		$(this).mouseover(function(){
			$tag2.animate({'left': index*-290},150);
			$(this).css('color','#FF4400')
			       .parent().siblings().find('a').css('color','#000');
		});
		$("#Rtag-2-bg4>ul>li>a:first").mouseover();
	})
	$("#Rtag-2-bg4>.cancle").click(function(){
		$(".Rtag-2-bg").hide();
	})

    $("#main-right>.Rtag-2>dl:lt(4)").each(function(index,element){
	  	var $tag2 = $("#Rtag-2-bg"+(index+1));
	  	$(this).mouseover(function(){
	  		$(".Rtag-2-bg").hide();
	  		$tag2.show();
	  	})
	})
    
    //右侧APP二维码
    $('#main-right .app').find('.app-img').each(function(index,element){
    	var $erweima = $('<div class="app-erweima" style="left:-30px;top:-120px"><img src="images/app-erweima-'+index+'.png"</div>');
    	$(this).hover(function(){
    		$('#app-'+(index+1)).append($erweima);
    	},function(){
    		$('#main-right .app').find('.app-erweima').remove();
    	})
    })

})