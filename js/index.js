/**
 * Created by Vera on 9/30/2016.
 */
$(function () {

    var $template = $(".good-template").clone();
    var $notBought = $(".not-bought");
    var node2	= $notBought.children().first().clone()	;

    $(document).on('click', '.button-delete', function () {
        var val = "";
        val = $(this).parent().parent().siblings().first();
        $(this).parent().parent().parent().fadeOut("slow", function () {
            var $notBought = $(".not-bought");
            var i = 0;
            var clone = val.clone();
            var select = clone.find("span").remove().text().replace(/\s+/, "");
            $notBought.children().each(function (value) {
                var goodInList = $notBought.children().eq(i).children().first().text().replace(/\s+/, "");
                console.log(goodInList);
                console.log(select);

                if(goodInList==select) {

                    $notBought.children().eq(i).children().fadeOut("slow", function () {
                        $notBought.children().eq(i).css('padding', '0');
                    });

                return false;
                }
                i++;
            });
        });
    });

    $(document).on('click', '.button-bought',function() {
        $(this).parent().parent().siblings().eq(1).children().eq(0).fadeOut("fast", function () {

        });
        $(this).parent().parent().siblings().eq(1).children().eq(2).fadeOut("fast", function () {

        });
        $(this).parent().parent().siblings().eq(0).children().first().css('text-decoration', 'line-through');
        $(this).parent().children().eq(2).fadeOut("fast", function () {

        });
        $(this).css('display', 'none');

        $(this).parent().children().eq(1).css('display', 'inline-block');
        val = $(this).parent().parent().siblings().first();
        var $notBought = $(".not-bought");
        var i = 0;
        var clone = val.clone();
        var select = clone.find("span").remove().text().replace(/\s+/, "");
        $notBought.children().each(function (value) {
            var goodInList = $notBought.children().eq(i).children().first().text().replace(/\s+/, "");
            console.log(goodInList);
            console.log(select);

            if(goodInList==select) {
                $notBought.children().eq(i).children().eq(0).css('text-decoration', 'line-through');
                $notBought.children().eq(i).eq(0).css('margin-right', '5px');
                $notBought.children().eq(i).appendTo("#goods-bought");

                return false;
            }
            i++;
        });
    });

    $(document).on('click', '.button-not-bought',function() {
        $(this).parent().parent().siblings().eq(0).children().first().css('text-decoration', 'none');
        $(this).parent().parent().siblings().eq(0).css('width', '33%');
        $(this).parent().parent().css('width', '33%');
        $(this).parent().parent().siblings().eq(1).children().eq(0).fadeIn("fast", function () {

        });
        $(this).parent().parent().siblings().eq(1).children().eq(2).fadeIn("fast", function () {

        });

        $(this).parent().children().eq(2).fadeIn("fast", function () {

        });

        $(this).css('float', 'none');
        $(this).css('display', 'none');
        $(this).parent().children().eq(0).css('display', 'inline-block');
        $(this).parent().children().eq(0).css('float', 'none');
        var val = $(this).parent().parent().siblings().first();
        var $bought = $("#goods-bought");
        var i = 0;
        var clone = val.clone();
        var select = clone.find("span").remove().text().replace(/\s+/, "");
        $bought.children().each(function (value) {
            var goodInList = $bought.children().eq(i).children().first().text().replace(/\s+/, "");
            console.log(goodInList);
            console.log(select);

            if(goodInList==select) {
                $bought.children().eq(i).children().eq(0).css('text-decoration', 'none');
                $bought.children().eq(i).eq(0).css('margin-right', '5px');
                $bought.children().eq(i).appendTo("#goods-not-bought");

                return false;
            }
            i++;
        });
    });

    $(document).on('click', '.button-minus',function() {
        var count = $(this).parent().children().eq(1).text();
        if(count>1){
            count--;
        }
        $(this).parent().children().eq(1).text(count);
        val = $(this).parent().siblings().first();
        var $notBought = $(".not-bought");
        var i = 0;
        var clone = val.clone();
        var select = clone.find("span").remove().text().replace(/\s+/, "");
        $notBought.children().each(function (value) {
            var goodInList = $notBought.children().eq(i).children().first().text().replace(/\s+/, "");
            console.log(goodInList);
            console.log(select);

            if(goodInList==select) {
                $notBought.children().eq(i).children().eq(1).text(count);
                return false;
            }
            i++;
        });

    });

    $(document).on('click', '.button-plus',function() {
        var count = $(this).parent().children().eq(1).text();
            count++;
        $(this).parent().children().eq(1).text(count);
        var val = $(this).parent().siblings().first();
        console.log(val.text());
        var $notBought = $(".not-bought");
        var i = 0;
        var clone = val.clone();
        var select = clone.find("span").remove().text().replace(/\s+/, "");
        $notBought.children().each(function (value) {
            var goodInList = $notBought.children().eq(i).children().first().text().replace(/\s+/, "");
            console.log(goodInList);
            console.log(select);

            if(goodInList==select) {
                $notBought.children().eq(i).children().eq(1).text(count);
                return false;
            }
            i++;
        });

    });

    $(document).on('click', '.button', function() {

        var title = $(".add input").val();
        if(title != "") {
            var $node = $($template.html());
            $node.find(".good-title").find("span").text(title);
            $node.appendTo(".list");


            node2.css('margin-right', '5px');
            node2.css('text-decoration', 'none');
            node2.find(".good-not-bought-title").text(title);
            node2.appendTo("#goods-not-bought");

            $(".add input").val('').focus();
        }else{
            alert("Can't add a good without title");
        }
    });

    $(document).on('dblclick', '.good-title', function () {
        original = $(this).find("span").remove().text().replace(/\s+/, "");
        $(this).text("");
        $("<input type='text' style='width: 100%'>").appendTo(this).focus();
    });

    $(document).on('focusout', '.good-title > input', function () {
        var $this = $(this);
        var name = $this.val();
        $this.parent().html("<span>"+name+"</span>");

        var $notBought = $(".not-bought");
        var i = 0;
       // var select = original.find("span").remove().text().replace(/\s+/, "");

        $notBought.children().each(function (value) {
            var goodInList = $notBought.children().eq(i).children().first().text().replace(/\s+/, "");
            console.log(goodInList);
            console.log(original);

            if(goodInList==original) {
                $notBought.children().eq(i).children().eq(0).text(name);
                return false;
            }
            i++;
        });
        $this.remove();
    });

});