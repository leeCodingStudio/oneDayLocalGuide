let $category_list = $(".category_list");
let $category = $(".category_list li");

$category.on("click",function() {
    $(this).siblings(".list_select").removeClass("list_select");
    $(this).addClass("list_select");
});