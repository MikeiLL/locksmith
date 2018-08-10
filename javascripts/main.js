'use strict';

var $ = require('jquery');
var fullpage = require('fullpage.js');

var executeAnimationOfSection1 = require('./animations/section-1');
var executeAnimationOfSection2 = require('./animations/section-2');
var executeAnimationOfSection3 = require('./animations/section-3');
var executeAnimationOfSection4 = require('./animations/section-4');
var executeAnimationOfSection5 = require('./animations/section-5');

$(document).ready(function () {  
    // disable velocity mobileHA because it overrides the transform values we defined in stylesheets.
    $.Velocity.defaults.mobileHA = false;
    
    $('#fullpage').fullpage({
        menu: '#menu',
        paddingTop: $('.header').outerHeight(),     // paddingTop should be the same as the header's height.
        afterLoad: function (anchorLink, index) { 
            hideAnimatedItems();                   // reset all animated-items to their default styles.
            switch (index) {
                case 1: 
                    $('#btn-next').show();
                    executeAnimationOfSection1();
                    break;
                case 2:
                    $('#btn-next').show();
                    executeAnimationOfSection2();
                    break;
                case 3:
                    $('#btn-next').show();
                    executeAnimationOfSection3();
                    break;
                case 4:
                    $('#btn-next').show();
                    executeAnimationOfSection4();
                    break;
                case 5:
                    $('#btn-next').hide();          // hide btn-next when reaching the last section.
                    executeAnimationOfSection5();
                    break;
            }
        }
    });
    
    // move to next section when btn-next is clicked.
    $('#btn-next').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
    // move to next section when btn-next is clicked.
    $('#about_us').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
    // move to next section when btn-next is clicked.
    $('#gunsmith_site').on('click', function () {
        window.location.href='https://www.gunsmithongarden.com';
        return false;
    });

});

function hideAnimatedItems() {
    $('.animated-item').css({
        opacity: 0
    });
}