(function(b) {
	(function(a) {
		"__CF" in b && "DJS" in b.__CF ? b.__CF.DJS.push(a) : "addEventListener" in b ? b.addEventListener("load", a, !1) : b.attachEvent("onload", a)
	})(function() {
		"FB" in b && "Event" in FB && "subscribe" in FB.Event && (FB.Event.subscribe("edge.create", function(a) {
			_gaq.push(["_trackSocial", "facebook", "like", a])
		}), FB.Event.subscribe("edge.remove", function(a) {
			_gaq.push(["_trackSocial", "facebook", "unlike", a])
		}), FB.Event.subscribe("message.send", function(a) {
			_gaq.push(["_trackSocial", "facebook", "send", a])
		}));
		"twttr" in b && "events" in twttr && "bind" in twttr.events && twttr.events.bind("tweet", function(a) {
			if (a) {
				var b;
				if (a.target && a.target.nodeName == "IFRAME") a: {
					if (a = a.target.src) {
						a = a.split("#")[0].match(/[^?=&]+=([^&]*)?/g);
						b = 0;
						for (var c; c = a[b]; ++b)
							if (c.indexOf("url") === 0) {
								b = unescape(c.split("=")[1]);
								break a
							}
					}
					b = void 0
				}
				_gaq.push(["_trackSocial", "twitter", "tweet", b])
			}
		})
	})
})(window);
/* ]]> */

function myFunction() {
	document.getElementById("options").style.display = "block";
}

(function() {
	var po = document.createElement('script');
	po.type = 'text/javascript';
	po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(po, s);
})();


window.addEventListener('keydown', function(e) { 
	if (e.keyCode == 67) myFunction() ;
}); 

window.addEventListener('keydown', function(e) { 
	if (e.keyCode == 70) { 
		document.getElementById('fullscreenBtn').click();
	} 
});

window.addEventListener('keydown', function(e) { 
	if (e.keyCode == 27) { 
		document.getElementById("options").style.display = "none";
		document.getElementById("help_id").style.display = "none";
	} 
});

window.addEventListener('keydown', function(e) { 
	if (e.keyCode == 71) { 
		document.getElementById("get_weather").click();
	} 
}); 

window.addEventListener('keydown', function(e) { 
	if (e.keyCode == 72) { 
		document.getElementById("hide_weather").click();
	} 
});

window.addEventListener('keydown', function(e) { 
	if (e.keyCode == 75) { 
		document.getElementById("help_id").style.display = "block";
	} 
});

document.onkeydown = KeyPress;
function KeyPress(e) {
      var evtobj = window.event? event : e
      if (evtobj.keyCode == 49 && evtobj.ctrlKey && evtobj.shiftKey) {
      	document.getElementById("clear").click();
      }
      else if (evtobj.keyCode == 50 && evtobj.ctrlKey && evtobj.shiftKey) {
      	document.getElementById("cloudsPreset").click();
      }
      else if (evtobj.keyCode == 51 && evtobj.ctrlKey && evtobj.shiftKey) {
      	document.getElementById("stormPreset").click();
      }
      else if (evtobj.keyCode == 52 && evtobj.ctrlKey && evtobj.shiftKey) {
      	document.getElementById("boomPreset").click();
      }
      else if (evtobj.keyCode == 53 && evtobj.ctrlKey && evtobj.shiftKey) {
      	document.getElementById("bayPreset").click();
      }
}


function FuntionHelp() {
	document.getElementById("help_id").style.display = "block";
}

function HideOnClick() {
	document.getElementById("help_id").style.display = "none";
}