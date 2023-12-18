jSound
======

jQuery Plugin for Background Sound in Web Page
I have modified the jQuery.sound.js by adding few functions like mute,unmute and volume 
API Documentation
 
#### play a sound from the url
``$.sound.play(url)``
 
#### play a sound from the url, on a track, stopping any sound already running on that track
 ``$.sound.play(url, {
   track: "track1"
  });``
 
#### mute a sound 
`` $.sound.mute(); ``
 
#### unmute a sound
 `` $.sound.unmute();``
 
#### disable playing sounds
``$.sound.enabled = false;``
 
 
#### enable playing sounds
``$.sound.enabled = true``
