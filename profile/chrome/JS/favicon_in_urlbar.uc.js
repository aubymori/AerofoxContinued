// 'Favicon in urlbars identity box' script for Firefox 92+ by Aris
//
// This script restores current pages favicon inside urlbar (aka location bar, address bar or awesome bar).
// [!] If a page does not offer a favicon, browser branches default icon is shown.
// [!] In a multi-window environment pages without favicons might show wrong icons.
// option: set icon for pages without favicon

var i_icon = 'chrome://global/skin/icons/info.svg';
var sheet = 'chrome://global/skin/icons/Portrait.png';
var brand = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAANbY1E9YMgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGTSURBVHjapFMxS8NAFH6XOyhNY2xEoegiqGARJxE6OLj4Q8RBf0IH/4IOTjp0UHHxByiik4OLi5tIhyoItlWrTdKYWJvz7kjSSxOw4MHjXe7e972X791DlFL4zyLhZv+gQh3HiS4QQmCaNui6Jr4NI//kut7S1ubGe4yBV8BtZ3ePDi7b7ghvWjY9O7+kh0cnz+XydkHGkcGSXuoNUBRFWL3RhMWFIoxoOSiVlqFWe5zyPK/KwsaYdXm8MkgQgrkhpX9t5Edhdm4GbNvh/zQdxfeh6E/BdE0TxLJ20abV7iQA2UwGKsenQAgRoqrZLNzc3qV34cN0EgTedxdWV0oiK2Gm5lS4uLpOJ3hrf8UufN+HycIEYEyYcU2Q2FtuL53g9dNOiIkQFxIFomJGgKHZstIJGpYbe0SEBWOCmScCyKvg500pLkbQo350iIM2YpZVeKyE6sOPFJfaRp6FmxKULoPT2p14iTlVDUA4elBDDdO4ocP82rrIDGJAaehAnlce9yDXI48zK7047Bgz3D33vwIMAHI7j6I9is82AAAAAElFTkSuQmCC';
var globe = 'chrome://global/skin/icons/defaultFavicon.svg';

var icon_for_pages_without_favicon = brand; // i_icon, sheet, globe or brand (colorized Fx channel icon)

var favicon_click_opens_page_info_window = false;

var FaviconInUrlbar = {
 init: function() {
   try {
	   
	var favimginurlbar = document.createXULElement("image");
	favimginurlbar.setAttribute("id","favimginurlbar");
	  
	if(favicon_click_opens_page_info_window)
	  favimginurlbar.setAttribute("onclick","gIdentityHandler.handleMoreInfoClick(event);");	  
	  
	favimginurlbar.style.width = "16px";
	favimginurlbar.style.height = "16px";
	favimginurlbar.style.marginLeft = "3px";
	favimginurlbar.style.marginRight = "3px";
	favimginurlbar.style.marginTop = "3px";
	favimginurlbar.style.marginBottom = "3px";
	
	//document.getElementById('identity-box').insertBefore(favimginurlbar,document.getElementById('identity-box').firstChild);
	document.getElementById('identity-box').appendChild(favimginurlbar);

	// update script every time tab attributes get modified (switch/open tabs/windows)
	document.addEventListener("TabAttrModified", updateIcon, false);
	document.addEventListener('TabSelect', updateIcon, false);
	document.addEventListener('TabOpen', updateIcon, false);
	document.addEventListener('TabClose', updateIcon, false);
	document.addEventListener('load', updateIcon, false);
	document.addEventListener("DOMContentLoaded", updateIcon, false);


	function updateIcon() {
		
	 setTimeout(function(){ // timeout fixes wrong icon detection in some cases
	  
	  // get current tabs favicon
	  var favicon_in_urlbar = gBrowser.selectedTab.image;
	  
	  // if current tab offers no icon, use selected icon (icon_for_pages_without_favicon)
	  if(!gBrowser.selectedTab.image || gBrowser.selectedTab.image == null)
		if(!icon_for_pages_without_favicon) favicon_in_urlbar = brand;
		  else favicon_in_urlbar = icon_for_pages_without_favicon;
		  
	  document.querySelector('#favimginurlbar').style.listStyleImage = "url("+favicon_in_urlbar+")";
	  
	 },1);

	}

  } catch(e) {}
 }
};

// initiate script after DOM/browser content is loaded
document.addEventListener("DOMContentLoaded", FaviconInUrlbar.init(), false);
