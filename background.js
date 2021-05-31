

//tbs=simg:CAES2wEJRxnPsX_1QBoQazwELELCMpwgaOQo3CAQSE7oNoS-NCEqaPcYy5w6sO5k1iwoaGpqgVWqtbjKwZmA3aMJ6K4rikcJjHNAzDJvJIAUwBAwLEI6u_1ggaCgoICAESBAhhzgMMCxCd7cEJGnEKHQoKaG9yaXpvbnRhbNqliPYDCwoJL2EvMm1xdnpjChsKCHZlcnRpY2Fs2qWI9gMLCgkvYS80aGgzcDAKGwoIbGFuZ3VhZ2XapYj2AwsKCS9qLzJzaF95NAoWCgNkb3TapYj2AwsKCS9tLzAyN2N0Zww&sxsrf=ALeKk01S_HiS8rar80D8nwUpFLwOTfNG0A:1622263264400&q=stack+exchange&tbm=isch&ved=2ahUKEwjW5-zMie7wAhUSXM0KHW61C0wQjJkEegQIAhAB&biw=1920&bih=979

chrome.contextMenus.create({
	"title": "Yandex",
	"contexts": ["image"],
	"onclick": function (info, tab) {
		chrome.tabs.getSelected(null, function (tab) {
			let index = tab.index + 1,
				zone = chrome.i18n.getUILanguage() == "ru" ? "ru" : "com",
				url = "https://yandex." + zone + "/images/search?rpt=imageview&url=" +
					encodeURIComponent(info.srcUrl);
			chrome.tabs.create({ url: url, index: index });
		});
	}
});

chrome.contextMenus.create({
	"title": "Baidu",
	"contexts": ["image"],
	"onclick": function (info, tab) {
		chrome.tabs.getSelected(null, function (tab) {
			let index = tab.index + 1,
				zone = chrome.i18n.getUILanguage() == "ru" ? "ru" : "com",
				url = "https://yandex." + zone + "/images/search?rpt=imageview&url=" +
					encodeURIComponent(info.srcUrl);
			chrome.tabs.create({ url: url, index: index });
		});
	}
});

// needs to figure out how to switch to visually similar tab
chrome.contextMenus.create({
	"title": "Google",
	"contexts": ["image"],
	"onclick": function (info, tab) {
		chrome.tabs.getSelected(null, function (tab) {
			let index = tab.index + 1,
				url = "https://image.google.com/searchbyimage?site=search&sa=X&image_url=" +
					encodeURIComponent(info.srcUrl);
			chrome.tabs.create({ url: url, index: index });
		});
	}
})

// function genericOnClick(info, tab) {
// 	console.log("item " + info.menuItemId + " was clicked");
// 	console.log("info: " + JSON.stringify(info));
// 	console.log("tab: " + JSON.stringify(tab));
// }

// // Create one test item for each context type.
// var contexts = ["image"];
// for (var i = 0; i < contexts.length; i++) {
// 	var context = contexts[i];
// 	var title = "Test '" + context + "' menu item";
// 	var id = chrome.contextMenus.create(
// 		{ "title": title, "contexts": [context], "onclick": genericOnClick });
// 	console.log("'" + context + "' item:" + id);
// }
