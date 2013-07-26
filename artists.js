global.mArtistTwitters = 
{
  'Mike Jones': {handle: '@Mr_Mike_Jones', autotweet: true},
  'Ludacris': {handle: '@Ludacris', autotweet: true},
  'Chase & Status': {handle: '@chaseandstatus', autotweet: false},
  'Mac Miller': {handle: '@MacMiller', autotweet: false},
  'Sexy Carrots': {handle: '@geekzap', autotweet: true},
  'Steely Dan': {handle: '@SteelyDanSays', autotweet: true},
  'DJ FlannAL': {handle: '@DJFlannAL', autotweet: true},
  'Kelis': {handle: '@iamkelis', autotweet: true},
  'Outkast': {handle: '@BigBoi', autotweet: false},
  'R. Kelly': {handle: '@rkelly', autotweet: true},
  'Earth, Wind & Fire': {handle: '@earthwindfire', autotweet: true},
  'Macklemore & Ryan Lewis': {handle: '@macklemore', autotweet: true},
  'Phil Collins': {handle: '@PhilCollinsFeed', autotweet: false}
};
global.mArtists = [
{
        artist: 'Skrillex',
        message: ['Hit the mute button @jaydubs'],
        callback: function(pUser, pCurrentSong){
                mBot.speak(mRandomItem(this.message));
        }
},
{
	artist: 'Phil Collins',
	callback: function(pUser, pCurrentSong){
		var d = new Date();
		d.setTime(d.getTime() - (1000 * 60 * 60 * 4));
		if(d.getDay() == 5)
		{
			HandleCommand(pUser, "/tweet {currentdj} is playing {artist} - {song} #PhilPhriday", false);
		}
	}
},
{
        artist: 'LMFAO',
        callback: function(pUser, pCurrentSong){
          HandleCommand(pUser, '/lmfao' ,false);
          if('Shots (Feat. Lil\' Jon)' == pCurrentSong.song)
          {
            /*var keys = Object.keys(mUsers);
            for(var i = 0; i < keys.length; ++i) {
              if(mUsers[keys[i]].name != undefined)
              {
                HandleMenu(mUsers[keys[i]], "shot");
              }
            }*/
            HandleMenu(pUser, "shots");
          }
        }
},
{
        artist: 'LMFAO (feat. Lil Jon)',
        callback: function(pUser, pCurrentSong){
          HandleCommand(pUser, '/lmfao' ,false);
          if(pCurrentSong.song.indexOf("Shots") == 0)
          {
            HandleMenu(pUser, "shots");
          }
        }
},
{
        artist: 'Mike Jones',
        message: ['WHO?!', 'MIKE JONES!'],
        callback: function(pUser, pCurrentSong){
                mBot.speak(mRandomItem(this.message));
        }
},
{
        artist: 'DJ FlannAL',
        callback: function(pUser, pCurrentSong){
          HandleCommand(pUser, '/whistle' ,false);
        }
},
{
        artist: 'Kanye West',
        callback: function(pUser, pCurrentSong){
            if('H.A.M.' == pCurrentSong.song)
            {
              mBot.speak('@motorboater - This is your jam. Crank it!!');
            }
        }
},
{
        artist: 'Scatman John',
        message: ['ski-ba-bop-ba-dop-bop'],
        callback: function(pUser, pCurrentSong){
                if(pCurrentSong.song.indexOf('Ski') > -1)
                {
                  HandleCommand(pUser, '/react scatdance', false);
                }
                mBot.speak(mRandomItem(this.message));
        }
},
{
        artist: 'System Of A Down',
        message: ['Crank it up @Nibbs!!'],
        callback: function(pUser, pCurrentSong){
                mBot.speak(mRandomItem(this.message));
        }
},
{
        artist: 'R. Kelly',
        callback: function(pUser, pCurrentSong){
                HandleCommand(pUser, '/rkelly' ,false);            
        } 
},
{
        artist: 'Boston',
        message: ['I\'m jealous of future timers.', 'So soon?'],
        callback: function(pUser, pCurrentSong){
            if(pUser.userid == '4e0de3ffa3f7517dbd0115ce')
            {
              mBot.speak(mRandomItem(this.message));
            }
        }
},
{
        artist: 'Ludacris',
        message: ["They just ain't DOIN it right!", "Back again....LUDA!"],
        callback: function(pUser, pCurrentSong){
                mBot.speak(mRandomItem(this.message));
        }
},
{
        artist: 'AWOLNATION',
        callback: function(pUser, pCurrentSong){
                //mBot.speak('I know this artist!');
                //mBot.speak('I think this song is called ' + pCurrentSong.song);
                if('Sail' == pCurrentSong.song)
                {
                  mBot.speak('BZZZZZZZZZZZZZZ');
                }
        }
},
{
        artist: 'Dashboard Confessional',
		message: ['@Dr.Zupps time to slit your wrists!'],
        callback: function(pUser, pCurrentSong){
              mBot.speak(mRandomItem(this.message));
        }
},
{
        artist: 'The Lonely Island',
        callback: function(pUser, pCurrentSong){
                if('Jack Sparrow' == pCurrentSong.song)
                {
                  HandleCommand(pUser, '/sparrow' ,false);
                }
        }
},
{
        artist: 'Kenny Loggins',
        callback: function(pUser, pCurrentSong){
                //mBot.speak('I know this artist!');
                //mBot.speak('I think this song is called ' + pCurrentSong.song);
                if('Danger Zone' == pCurrentSong.song)
                {
                  HandleCommand(pUser, '/topgun' ,false);
                }
                if('Playing With The Boys' == pCurrentSong.song)
                {
                  mBot.speak('http://j.mp/top-gun2012');
                }
        }
},
{
        artist: 'The Doobie Brothers',
        callback: function(pUser, pCurrentSong){
                mBot.speak('https://www.youtube.com/watch?feature=player_embedded&v=Y7Et4pVEczY');
        }
},
{
        artist: 'Reggie And The Full Effect',
        callback: function(pUser, pCurrentSong){
                if('Boot To The Moon' == pCurrentSong.song)
                {
                  HandleCommand(pUser, '/react jazzhands' ,false);
                }
        }
},
{
	artist: 'Rick Astley',
	callback: function(pUser, pCurrentSong){
                FindByName('Rip Hammershorts', function (sUser)
                                  {
                                    if(sUser.length > 0) {
                                      sUser = sUser[0];
                                      HandleCommand(pUser, '/quietstair @' + pUser.name ,false);
                                      mBot.remDj(sUser.userid);
                                    }
                                  });
	}
}

];