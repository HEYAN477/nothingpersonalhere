Game.registerMod("100Heralds", {
  init:function(){
    Game.heralds = 100;
    Game.playCookieClickSound=function(){
	  if (Game.prefs.cookiesound) PlaySound('snd/clickb'+(Game.cookieClickSound)+'.mp3',0.5);
	  else {return};
	  Game.cookieClickSound+=Math.floor(Math.random()*4)+1;
	  if (Game.cookieClickSound>7) Game.cookieClickSound-=7;
	}
    AddEvent(window,'keydown',function(e){
      //ctrl-r reloads the game
      if (!Game.OnAscend && Game.AscendTimer==0 && e.ctrlKey && e.keyCode==82){
        Game.toReload=true;
        e.preventDefault();
      }
    });
  }
});
