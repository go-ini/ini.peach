$(document).ready(function () {
	// Emojify
    emojify.setConfig({
        img_dir: '/img/emoji'
    });
    emojify.run();

    // Set anchor.
    var headers = {};
    var skipped_first = false;
    $('.markdown').find('h1, h2, h3, h4, h5, h6').each(function () {
    	if (!skipped_first) {
    		skipped_first = true;
    		return
    	}
    	
        var node = $(this);
        var val = encodeURIComponent(node.text().toLowerCase().replace(/\s+/g, "-"));
        var name = val;
        if (headers[val] > 0) {
            name = val + '-' + headers[val];
        }
        if (headers[val] == undefined) {
            headers[val] = 1;
        } else {
            headers[val] += 1;
        }
        node = node.wrap('<div id="' + name + '" class="anchor-wrap" ></div>');
        node.append('<a class="anchor" href="#' + name + '"><i class="fas fa-hashtag"></i></a>');
    });
})