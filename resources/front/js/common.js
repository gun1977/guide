$(document).ready(function(){

	$("input.form-elem[type=text]").focus(function() {
		$(this).parent().addClass("focus");
		//$(this).parent().find('.form-util').css("display", "block");
	});
	$("input.form-elem[type=text]").focusout(function() {
		$(this).parent().removeClass("focus");
		//$(".form .form-util").css("display", "none");
	});

	/*$("input.form-elem").mouseover(function() {
		$(this).parent().addClass("hover");
		//$(this).parent().find('.form-util').css("display", "block");
	});
	$("input.form-elem").mouseout(function() {
		$(this).parent().removeClass("hover");
		//$(".form .form-util").css("display", "none");
	});

	$(".form-util").mouseover(function() {
		$(this).parent().addClass("hover");
		//$(this).parent().find('.form-util').css("display", "block");
	});*/
	$(".input .form-util").click(function() {
		$(this).css("display", "none");
		//$(this).parent().find('.form-util').css("display", "block");
	});

	/* tab 
	$('.tab-text').click(function(){
		var tab_id = $(this).attr('data-type');
		$('.tab-item').removeClass('current');
		$('.tab-content').removeClass('on');
		$(this).parent().addClass('current');
		$("#"+tab_id).addClass('on');
	})
	*/

	
	// 탭 컨텐츠 숨기기
	//$(".tab-content").hide();

	/*// 첫번째 탭콘텐츠 보이기
	$(".tab_container").each(function () {
		$(this).children(".tab-display li.tab-item:first").addClass("current"); //Activate first tab
		$(this).children(".tab-content").first().show();
	});*/
	//탭메뉴 클릭 이벤트
	$(".tab-display li.tab-item a.tab-text").click(function () {
		$(this).parent().siblings("li").removeClass("current");
		$(this).parent().addClass("current"); 
		$(this).parent().parent().parent().parent().find(".tab-content").removeClass('on');
		//$(this).parent().parent().parent().parent().find(".tab-content").hide();
		var activeTab = $(this).attr("data-type");
		$("#" + activeTab).addClass('on');
		//$("#" + activeTab).fadeIn();
	});


	/* popup */
	$(".pop_open").click(function() {
		var activePopOpen = $(this).attr("data-type");
		$("#" + activePopOpen).addClass('active');
	});
	$(".pop_close").click(function() {
		var activePopClose = $(this).attr("data-type");
		$("#" + activePopClose).removeClass('active');
	});


	/* file */
	var fileTarget = $('.filebox .upload-hidden');
	fileTarget.on('change', function(){
		if(window.FileReader){
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}

		$(this).siblings('.upload-name').val(filename);
	});


	/* select
	$('.select_layer').click(function(){
		$(this).toggleClass('active');
	});
	$('.select_layer.disable').click(function(){
		if($(this).hasClass("disable")) {
			$(this).removeClass("active");
			$('.select_layer .option').hide();
		} else {
			$(this).removeClass("active");
			$('.select_layer .option').hide();
		}
	});*/

});



$(window).on('load', function() {
    select_layer();
})

function select_layer() {
	$('.select_layer').each(function() {
		const $select = $(this);
		const $selectTrigger = $select.find('.selected');
		const $options = $select.find('.option');
		const $hiddenInput = $select.find('.opt_val');

		//select option 열기
		$selectTrigger.click(function() {
			$options.toggle();
			$select.toggleClass('active');
			$('.select_layer').not($select).find('.option').hide();
			$('.select_layer').not($select).removeClass('active');
			$('.select_layer.disable').click(function(){
				if($(this).hasClass("disable")) {
					$(this).removeClass("active");
					$('.select_layer .option').hide();
				} else {
					$(this).removeClass("active");
					$('.select_layer .option').hide();
				}
			});
		});

		//option 선택
		$options.find('li').click(function() {
			const value = $(this).data('value');
			const text = $(this).text();
			$select.find('.selected-value').text(text);
			$options.hide();
			$select.removeClass('active');
			//옵션 선택했을 때 클래스 추가
			if (value != '') {
				$select.addClass('select')
			} else {
				$select.removeClass('select')
			}
			// hidden 필드에 선택한 값을 설정
			$hiddenInput.val(value);
		});
	});

	//select 영역 외 다른곳을 누르면 select 닫힘
	$(document).click(function(e) {
		if (!$(e.target).closest('.select_layer').length) {
			$('.select_layer .option').hide();
			$('.select_layer').removeClass('active');
		}
	});
	
}

var Project = (function (global, $) {
	var checkEl = function (el) {
	  return el.length > 0;
	};
	//var scrollbarWidth = window.innerWidth - $('html').width();
  
	// 초기화
	global.init = function () {
		//global.front.headerFunc();
		//global.front.quickMenu();
		//global.front.scrollTop();
		//global.front.familySite();
		global.front.selection();
		//global.front.allChecked();
		//global.front.passwordShowHide();
		//global.front.qtyUpDown();
		//global.front.btnBottomFixed();
		//global.front.addAttachedFile();
		//global.front.scheduleCard();
		//global.front.scheduleCardChecked();
		//global.front.exAccor();
		//global.front.programAccor();
		//global.front.faqList();
		//global.front.tooltip.func();
		//global.front.modal.closeBtn();
		//global.front.reservePage();
		// global.front.setHeight();
	};
  
	/*$(window).ready(function () {
		$.datepicker.setDefaults(global.front.datapicker);
	});*/
  
	// 스크립트 작성
	global.front = {
		// select box
		selection: function () {
		if (!checkEl($('.selectbox'))) return;
		$('.selectbox:not(.large) select').selectmenu({
			position: { my: 'left top', at: 'left bottom', collision: 'flipfit' },
		});
		$('.selectbox.large select').selectmenu({
			position: { my: 'left top', at: 'left bottom', collision: 'flipfit' },
			classes: {
			'ui-selectmenu-menu': 'large',
			},
		});
		},
	};
  
	global.addEventListener('load', function () {
		global.init();
	});
	return global;
})(window, jQuery);



