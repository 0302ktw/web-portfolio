$(function(){
    //Click scroll to anchor
    var scrollToAnchor = function () {
        function scrollToAnchor(item, itemCt) {
            if ($('.navbar_ct').length > 0) {
                var ctPosition = $(itemCt).offset().top;
                var ctHeight = $(itemCt).outerHeight();
            }
            $(win).on('scroll', function() {
                var initPositon = $(this).scrollTop();
                // Auto add .is_active when scroll to content
                if (initPositon > ctPosition - $(win).outerHeight() / 2 && initPositon < ctPosition + ctHeight - $(win).outerHeight() / 2) {
                    $(item).addClass('is_active');
                } else {
                    $(item).removeClass('is_active');
                }
                
                if ($('.fp_nav .go_section_keyvisual').hasClass('is_active')) {
                    $('.fp_nav').addClass('fp_nav_white');
                    $('.fp_nav').removeClass('fp_nav_gray');
                } 
                else if (
                $('.fp_nav .go_section_program, .fp_nav .go_section_assignment, .fp_nav .go_section_benefit, .fp_nav .go_section_schedule').hasClass('is_active')) {
                    $('.fp_nav').removeClass('fp_nav_white');
                    $('.fp_nav').removeClass('fp_nav_gray');
                } 
                else if ($('.fp_nav .go_section_apply').hasClass('is_active')) {
                    $('.fp_nav').addClass('fp_nav_gray');
                }
            }).scroll();
        }

        scrollToAnchor('.fp_nav .go_section_keyvisual', '.navbar_ct .section_keyvisual');
        scrollToAnchor('.fp_nav .go_section_program', '.navbar_ct .section_program');
        scrollToAnchor('.fp_nav .go_section_assignment', '.navbar_ct .section_assignment');
        scrollToAnchor('.fp_nav .go_section_benefit', '.navbar_ct .section_benefit');
        scrollToAnchor('.fp_nav .go_section_schedule', '.navbar_ct .section_schedule');
        scrollToAnchor('.fp_nav .go_section_apply', '.navbar_ct .section_apply');
});		