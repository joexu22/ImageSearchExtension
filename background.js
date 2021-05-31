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
