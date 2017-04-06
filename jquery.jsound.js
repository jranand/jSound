/**
 * jQuery extended sound plugin (no flash)
 * 
 * jQuery JSound Version 1.10
 *
 * based on jquery.sound.js by J�rn Zaefferer
 * Ramakrishna Anand.J
 * Licensed under the GNU GENERAL PUBLIC LICENSE:
 * http://opensource.org/licenses/GPL-3.0
 *   
 * $Id$
 */
/**
 * API Documentation
 * 
 * // play a sound from the url
 * $.sound.play(url)
 * 
 * // play a sound from the url, on a track, stopping any sound already running on that track
 * $.sound.play(url, {
 *   track: "track1"
 * });
 * 
 * // mute a sound 
 * $.sound.mute();
 * 
 * // unmute a sound
 * $.sound.unmute();
 * 
 * // disable playing sounds
 * $.sound.enabled = false;
 * 
 * // enable playing sounds
 * $.sound.enabled = true
 */

(function($) {
var volume;
var bgSound;
$.sound = {
        tracks: {},
        enabled: true,
        template: function(src) {
			      return '<audio id="bgsoundplayer" style="height:0" loop="false" autoplay="true"><source src="'+ src +'"  ></audio>';
        },
		mute: function(level){
		if($.browser.msie){ level=-10000; }else{ level=0.0; }
		bgSound = document.getElementById("bgsoundplayer");
        bgSound.volume=level;
		},
		unmute: function(){
		if($.browser.msie){ level=0; }else{ level=1.0; }
		bgSound = document.getElementById("bgsoundplayer");
        bgSound.volume=level;
		},
		volume:function(level){
		bgSound = document.getElementById("bgsoundplayer");
        bgSound.volume=level;
		},
        play: function(url, options,volume){
                if (!this.enabled)
                        return;
                var settings = $.extend({
                        url: url
                }, options);
                
                if (settings.track) {
                        if (this.tracks[settings.track]) {
                                var current = this.tracks[settings.track];
                                // TODO check when Stop is avaiable, certainly not on a jQuery object
                                current.Stop && current.Stop();
                                current.remove();  
                        }
                }
                
                var element = $.browser.msie
                        ? $('<bgsound id="bgsoundplayer"  volume="'+volume+'" />').attr({
                        src: settings.url,
                        loop: 1,
						autostart: true
                      })
                        : $(this.template(settings.url));
                        
                element.appendTo("body");
                
                if (settings.track) {
                        this.tracks[settings.track] = element;
                }               
                return element;
        }
};
})(jQuery);
