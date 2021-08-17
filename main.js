/* Create the popover with Header Content and Footer */
$('.popover-markup>[data-toggle="popover"]').popover({
    html: true,
    title: function() {
      return $(this).parent().find('.head').html();
    },
    /********** 
      In the content method, return a class 'popover-content1' wrapping the actual 'contents', 
      concatenated with a class 'popover-footer' wrapping the footer.
    ************/
    content: function() {
        return '<div class="popover-content1">' + $(this).parent().find('.content').html() +
          '</div><div class="popover-footer">' + $(this).parent().find('.footer').html() +
          '</div>';
      }    
  });
  
  /**
    Allow the popover to be closed by clicking anywhere outside it.
  **/
  $('body').on('click', function(e) {
    $('.popover-markup>[data-toggle="popover"]').each(function() {
      //the 'is' for buttons that trigger popups
      //the 'has' for icons within a button that triggers a 
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
      }
    });
  });

  
  /****************TIMELINE**************/

  $(function () {
    // Smooth Scroll
    $('.navbar a[href*=#]').bind('click', function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });
  });
  
  jQuery(document).ready(function() {
      // code from: https://www.sitepoint.com/community/t/collapsible-bootstrap-panels-not-collapsing-after-another-panel-is-selected/225826/2
      jQuery(".panel-heading").click(function() {
          jQuery('#accordion .panel-heading').not(this).removeClass('isOpen');
          jQuery(this).toggleClass('isOpen');
          jQuery(this).next(".panel-collapse").addClass('thePanel');
          jQuery('#accordion .panel-collapse').not('.thePanel').slideUp(300);
          jQuery(".thePanel").slideToggle(800).removeClass('thePanel');
      });
  });



  // DATE PICKER

 //CART ITEM QUANTITY INCREMENT

 function incrementValue()
 {
     var value = parseInt(document.getElementById('number').value, 10);
     value = isNaN(value) ? 0 : value;
     if(value<10){
         value++;
             document.getElementById('number').value = value;
     }
 }
 function decrementValue()
 {
     var value = parseInt(document.getElementById('number').value, 10);
     value = isNaN(value) ? 0 : value;
     if(value>1){
         value--;
             document.getElementById('number').value = value;
     }
 
 }



 //////////////// CART ????????????///////////////////

// var taxRate = 0.05;
// var shipping = 15.0;
// $(function() {
//   var jsonData = [
//     {
//       title: "Tshirt",
//       price: 38,
//       quantity: 1,
//       total: 38
//     },
//     {
//       title: "商品2",
//       price: 23.5,
//       quantity: 1,
//       total: 23.5
//     },
//     {
//       title: "商品3",
//       price: 100,
//       quantity: 1,
//       total: 100
//     },
//     {
//       title: "商品4",
//       price: 45,
//       quantity: 1,
//       total: 45
//     },
//     {
//       title: "商品5",
//       price: 66,
//       quantity: 1,
//       total: 66
//     },
//     {
//       title: "商品6",
//       price: 199,
//       quantity: 1,
//       total: 199
//     }
//   ];
//   var html = "<tbody>";
//   $.each(jsonData, function() {
//     html +=
//       '<tr class="cart-item">' +
//       "        <td>" +
//       '          <input type="checkbox" class="cart-item-check" checked />' +
//       "        </td>" +
//       "        <td>" +
//       "          " +
//       this.title +
//       "        </td>" +
//       "        <td>￥" +
//       this.price +
//       "</td>" +
//       "        <td>" +
//       '          <input class="input is-primary cart-item-qty" style="width:100px" type="number" min="1" value="' +
//       this.quantity +
//       '" data-price="' +
//       this.price +
//       '">' +
//       "        </td>" +
//       '        <td class="cart-item-total">￥' +
//       this.total +
//       "</td>" +
//       "        <td>" +
//       '          <a class="button is-small">删除</a>' +
//       "        </td>" +
//       "      </tr>";
//   });
//   html += "</tbody>";
//   $(".shopping-cart").append(html);
  
//   recalculateCart();

//   $(".cart-item-check").change(function() {
//     recalculateCart();
//   });

//   $(".cart-item-qty").change(function() {
//     var $this = $(this);
//     var parent = $this.parent().parent();
//     parent.find(".cart-item-check").prop("checked", "checked");
//     var price = $this.attr("data-price");
//     var quantity = $this.val();
//     var total = price * quantity;
//     parent.find(".cart-item-total").html(total.toFixed(2));
//     recalculateCart();
//   });

//   $(".button").click(function() {
//     var parent = $(this)
//       .parent()
//       .parent();
//     parent.remove();
//     recalculateCart();
//   });
// });
// function recalculateCart() {
//   var subTotal = 0;
//   var grandTotal = 0;
//   var tax = 0;
//   var items = $(".cart-item");
//   $.each(items, function() {
//     var itemCheck = $(this).find(".cart-item-check");
//     var itemQuantity = $(this).find(".cart-item-qty");
//     if (itemCheck.prop("checked")) {
//       var itemTotal = itemQuantity.val() * itemQuantity.attr("data-price");
//       subTotal += itemTotal;
//     }
//   });
//   if (subTotal > 0) {
//     tax = subTotal * taxRate;
//     grandTotal = subTotal + tax + shipping;
//     $(".totals,.checkout").show();
//   } else {
//     $(".totals,.checkout").hide();
//   }
//   $("#cart-subtotal").html(subTotal.toFixed(2));
//   $("#cart-total").html(grandTotal.toFixed(2));
//   $("#cart-tax").html(tax.toFixed(2));
//   $("#cart-shipping").html(shipping.toFixed(2));
// }










































