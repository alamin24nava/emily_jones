// nav bar show & hidden
$('#toggler').click(function () {
    $(".theme-sidenav-wrap").toggleClass("aside-hide");
    $(".theme-page-content, .theme-header-template").toggleClass("theme-full-screen-expanded");
})
// nav Link active
const activeLink = document.querySelectorAll('.sidenav-link')

function navActiveLink() {
    if (activeLink) {
        activeLink.forEach(i => i.classList.remove('sidenav-link-active'))
        this.classList.add('sidenav-link-active')
    }
}
activeLink.forEach(i => i.addEventListener('click', navActiveLink));


// theme input select options
$(document).on("click", ".select-value", function (e) {
    let t = $(this);
    $(".select-value").not(this).parent().removeClass("show"), t.parent().toggleClass("show"), t.parent().find(".dropdown-menu span").each((e, n) => {
        t.text() === $(n).text() ? $(n).addClass("active") : $(n).removeClass("active")
    })
}),
    $(document).on("click", ".dropdown-menu span", function () {
        let e = $(this), t = e.text();
        e.parent().parent().find(".select-value").text(t), e.parent().parent().removeClass("show")
    }),
    $(".dropdown-menu span.active").each(function (e) {
        let t = $(this);
        t.parent().parent().find(".select-value").text(t.text())
    });

// checkbox Disabled
$(function () {
    $("#flexCheckDisabled").click(function () {
        if ($(this).is(":checked")) {
            $(".form-check-disabled .form-floating").show();
        } else {
            $(".form-check-disabled .form-floating").hide();
        }
    });
});
// checkbox Enabled
// $(function() {
//     $("#flexCheckEnabled").click(function() {
//         let enableMaster = $(".form-check");
//         if ($(this).is(":checked")) {
//             $(".form-floating").show();
//             enableMaster.addClass('form-check-enabled');
//             enableMaster.removeClass('form-check-disabled');
//         } else {
//             $(".form-floating").hide();
//             enableMaster.addClass('form-check-disabled');
//             enableMaster.removeClass('form-check-enabled');
//         }
//     });
// });

// add more field
$('.add-more-field').click(function () {
    $('.add-another-field-wrap').clone().appendTo('.dynamic-another-field');
    $('.dynamic-another-field .add-another-field-wrap').addClass('single remove');
    $('.single .add-more-field').remove();
    $('.single').append('<span class="remove-field btn-remove-customer">Remove Item</span>');
    $('.dynamic-another-field > .single').attr("class", "remove");

    $('.dynamic-another-field input').each(function () {
        var count = 0;
        var fieldname = $(this).attr("name");
        $(this).attr('name', fieldname + count);
        count++;
    });

});

$(document).on('click', '.remove-field', function (e) {
    $(this).parent('.remove').remove();
    e.preventDefault();
});



