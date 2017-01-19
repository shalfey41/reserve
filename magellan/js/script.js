$(document).ready(function() {
  // Переключение табов в услугах
  $('#js-service-sort a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
  

  // Раскрытие описания услуги
  $('#js-tab-content').find('.service-description-item').on('click', function(e) {
    e.preventDefault();
    var item = $(this);
    var itemAria = item.attr('aria-expanded');
    
    if (itemAria == "false") {
        item.addClass("item-marked");
        } else {
          item.removeClass("item-marked");
        };
  });
  

  // Отправка данных
  var formOrder = $(".form-send"),
      formBtn = formOrder.find("button[type='submit']");
  
  formBtn.on("click", function(e) {
    var modalRecall = $("#modal-recall"),
        modalThanks = $("#modal-thanks"),
        formPhone = $(this).closest(formOrder).find("input[type='tel']"),
        formPhoneVal = formPhone.val();
        
    if (formPhoneVal !== "") {
      $.ajax({
      url: "ok.php",
      type: "POST",
      data: "phone="+formPhoneVal,
      dataType: "html",
      beforeSend: function(data) {
        formBtn.attr('disabled', 'disabled');
      },
      success: function () {
        yaCounter36074950.reachGoal('order');
        modalRecall.modal('hide');
        setTimeout(function() {
            modalThanks.modal('show');
        }, 444);
      },
      complete: function(data) { // сoбытиe пoслe любoгo исхoдa
        formBtn.prop('disabled', false);
        formPhone.removeClass("modal-form-error");
      }
    });
    } else {
      formPhone.addClass("modal-form-error");
    }
  });
  
  
    // Маска для телефона
  $('input[type="tel"]').mask('+7 (000) 000-00-00');
  

  // Плавный скролл до блока услуг
  $("#js-scroll-btn").on("click", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1200);
  });

  
//  // Параллакс
//  if (window.matchMedia('(min-width: 992px)').matches) {
//    
//      $(window).scroll(function() {
//        var bo = $("body").scrollTop() || $('html').scrollTop(),
//            cosmPosition = $('#js-cosmetics-img').offset().top,
//            screenHeight = $(window).height()/2;
//        
//        $('#js-cosmetics-img').toggleClass( 'fadeInUp', 'animated', bo > cosmPosition-screenHeight);
//      });
//    };
  
});