window.onload = function(){
	chrome.tabs.query(
		{
			currentWindow: true,    // currently focused window
		        active: true            // selected tab
		},
		function (tab){
			var title = tab[0].title
			var url = tab[0].url;
			window.open("http://kamabokonet.com/pageshare/main.php?url="+url+"&title="+title,null,"width=480,height=280");
		}
	);
};