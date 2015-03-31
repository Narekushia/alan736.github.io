/**
 * 
 * @description FeedEk jQuery RSS/ATOM Feed Plugin v2.0
 * http://jquery-plugins.net/FeedEk/FeedEk.html  
 * https://github.com/enginkizil/FeedEk
 * @author Engin KIZIL http://www.enginkizil.com
 *
 * @description Modified Version for Semantic UI
 * @author Alan Montavon http://alan736.ch
 * 
 */


(function ($) {
    $.fn.FeedEk = function (opt) {
        var def = $.extend({
            FeedUrl: "http://rss.cnn.com/rss/edition.rss",
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            CharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang: "en",
            label : '<i class="circular code icon"></i>',
            github : false,
            githubname : 'default'
        }, opt);
        var id = $(this).attr("id"),
            i, s = "",
            dt;
        $("#" + id).empty().append('<img src="loader.gif" />');
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def.MaxCount + "&output=json&q=" + encodeURIComponent(def.FeedUrl) + "&hl=en&callback=?",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
                $.each(data.responseData.feed.entries, function (e, item) {
                    s += '<div class="event">'

                    if (def.label) {
                    	s += '<div class="label">' + def.label + "</div>"
                    }

                    s+= '<div class="content"><div class="summary">';

                    if (def.github) {
                        s+= '<a href="https://github.com/' + def.githubname + '">' + def.githubname + '</a> commited : ';
                    }

                    s+= '<a style="" href="' + item.link + '" target="' + def.TitleLinkTarget + '" >' + item.title + "</a></div>";

                    if (def.ShowPubDate) {
                        dt = new Date(item.publishedDate);
                        if ($.trim(def.DateFormat).length > 0) {
                            try {
                                moment.lang(def.DateFormatLang);
                                s += '<div class="date">' + moment(dt).format(def.DateFormat) + "</div>"
                            } catch (e) {
                                s += '<div class="date">' + dt.toLocaleDateString() + "</div>"
                            }
                        } else {
                            s += '<div class="date">' + dt.toLocaleDateString() + "</div>"
                        }
                    }
                    if (def.ShowDesc) {
                        if (def.DescCharacterLimit > 0 && item.content.length > def.DescCharacterLimit) {
                            s += '<div class="extra text">' + item.content.substr(0, def.DescCharacterLimit) + "...</div>"
                        } else {
                            s += '<div class="extra text">' + item.content + "</div>"
                        }
                    }
                    s+= "</div></div>";
                });
                $("#" + id).append('<div class="ui small feed segment">' + s + "</div>")
            }
        })
    }
})(jQuery);