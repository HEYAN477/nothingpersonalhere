Game.registerMod("100Heralds",
{
	init:function()
	{
		Game.heralds = 100;
		Game.lumpRipeAge = Game.lumpMatureAge;
		Game.lumpOverripeAge = Game.lumpMatureAge;
		
		let MOD = this;
		MOD.OriginalTickerDraw = Game.TickerDraw
		Game.TickerDraw = function()
		{
			var str='';
			if (Game.Ticker!='') str=Game.Ticker;
			if (str.startsWith("News : ")) Game.Ticker = "News: " + str.charAt(7).toUpperCase() + str.slice(8);
			MOD.OriginalTickerDraw();
		}
		Game.playCookieClickSound=function()
		{
			if (!Game.prefs.cookiesound) return;
			
			PlaySound('snd/clickb'+(Game.cookieClickSound)+'.mp3',0.5);
			Game.cookieClickSound+=Math.floor(Math.random()*4)+1;
			if (Game.cookieClickSound>7) Game.cookieClickSound-=7;
		}
		AddEvent(window,'keydown',function(e)
		{
			//ctrl-r reloads the game
			if (!Game.OnAscend && Game.AscendTimer==0 && e.ctrlKey && e.keyCode==82)
			{
				Game.toReload=true;
				e.preventDefault();
			}
		});
	}
});
