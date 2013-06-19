/*
    Copyright 2012 yayramen && Inumedia.
    This is the enums file, where the speaking variables are stored.
    Change the value in the config files, controls how much the bot 
    spits out.

    Common Variables: 
    {usernames} - to spit out user's name in greeting
    {username} - to spit out user's name everywhere else
    {room} - to spit out room's name
*/

//Response Values

//Greetings
global.mDefaultGreeting         = "/me hugs @{usernames}, welcome to {room}!  The theme is {theme}"; 
global.mVIPGreeting             = "Welcome @{usernames}, we have a VIP in the room!";
global.mSuperGreeting           = "Hold the music! There's a Super User in the house! Welcome, @{usernames}!";
global.mModeratorGreeting       = "Sup @{usernames}!";
global.mInfoOnRoom              = "Hi {username}! Welcome to {roomname}! The theme is {theme}, the song limit is {songlimit}, and if you're on deck you can only be afk for {afk} minutes.";
//The mInfoOnRoom variable is the PM sent to first time visitors

//Events
global.mAddDJ                   = null;
global.mRemDJ                   = null;
global.mAddMod                  = null;
global.mRemMod                  = null;
global.mSnagMSg                 = null;
global.mEndSong                 = null;

//Song Limit
global.mOverMaxSongsQueueOn     = "Hey, @{username}, you're over your max songs!  You've got to wait {songwait} song(s) to get back up.";
global.mOverMaxSongsQueueOff    = null;
global.mOverMaxSongsWarn        = "Hey, @{username}, you've played your limit. Let someone else have a go.";
global.mHaveToWait              = "I'm sorry but you have to wait {user.mWaitingSongLimit} song(s) to get back up.";

//Lotto
global.mNoLotto                 = "Sorry, Lotto is currently disabled.";
global.mNoLottoWithQueue        = "I can't turn Lotto on if the queue is on!";
global.mNotLottoTime            = "Sorry, you can't spin yet.";
global.mTimeToLotto             = "Okay, it's time to type /spin if you want to DJ! You got {spintimeleft} seconds to spin!";
global.mCantLottoTwice          = "Sorry, {username}, you've already spun!";
global.mLottoThanks             = "Thanks for spinning, {username}!";
global.mLottoWinner             = "@{username} won the spin! Hop on deck, you got {holdtimeleft} seconds to claim your spot!";
global.mNobodySpin              = "Nobody spun for the DJ spot! This one's FFA!";
global.mNoQueueWithLotto        = "I can't turn the queue on if lotto is on!";

//AFK
global.mWarnMsg                 = "Excuse me, @{username}, if it is not too much to ask....could you please participate in this lovely community ";  //the default warning message   
global.mRemDJMsg                = "/tableflip {username}, You ain't there...aint nobody got time for that...woooo WHOOOOOOOO";

//Queue
global.mAdvanceQueue            = "Hey @{username}, move it or lose it!  Please take your spot before {queuetimeout} seconds has passed.'";
global.mWarnDJNotNextInQueue    = "Sorry, {username}, you have to wait your turn.  It's currently {nextinqueue}'s turn to get on deck.";
global.mOpenSpotNoQueueing      = "Sorry, {username}, there's already an open spot.  Feel free to just hop up.";
global.mQueueOff                = "I'm sorry but the queue is currently off.";
global.mQueueStatus             = "There is currently {queueamount} people standing in line to get on deck.";
global.mQueueEmpty              = "The queue is currently empty!";
global.mQueueUsers              = "The queue is currently: {queueusers}, in that order.";
global.mQueueAdded              = "Alright, {username}, you've been added to the queue!";
global.mQueueAlreadyDJ          = "I'm sorry, {username}, but you're already a DJ."
global.mAlreadyInQueue          = "Sorry, {username}, but you're already in the queue."
global.mRemoveFromQueue         = "You've been removed from the queue.";
global.mNotInQueue              = "You're not in the queue.";
global.mModRemoveFromQueue      = "Removed {username} from the queue.";
global.mClearQueue              = "Queue Cleared";

//VIP
global.mIsNowVIP                = "{username} is now a VIP.  Yeaaayah";
global.mIsNoLongerVIP           = "{username} is no longer a VIP."
global.mVIPList                 = "VIPs: {vip_list}";

//Bans
global.mUnbanned                = "{username} is now unbanned.";
global.mBanReason               = "You're banned.  Gtfo.";
global.mBanned                  = "{username} is now banned.";

//Whitelist
global.mNotOnWhiteList          = "I'm sorry, but you're not on the whitelist."; /// PMed to User.
global.mAddedToWhiteList        = "{username} has been added to the whitelist.";
global.mRemovedFromWhiteList    = "{username} has been removed from the whitelist.";
global.mWhiteListed             = "Whitelisted: {whitelisted}";

//Song
global.mLonelyStillOn           = "Sorry, I can't DJ with LonelyDJ enabled D:";
global.mBotDJTurnedOff          = "Sorry, I don't know how to DJ";
global.mSongSkip                = "Skipped '{skippedsong}'. Next Song: '{nextsong}' Type /song requeue to undo.";
global.mSongRequeue             = "Moved {bottomsong} to the top of the queue.";
global.mSongSuffle              = "Shuffled Queue.";
global.mSongAdd                 = "Added {currentsong} to queue!";
global.mSongRemove              = "Removing {lastsong}";
global.mSongRemoveNotDJ         = "You can only remove a song when I'm playing a song.";
global.mSongNext                = "Next song: {next} by {artist}";
global.mSongTotal               = "Total Songs In My Queue: {songtotal}";
global.mSongSearchEmpty         = "No results found for {query}";
global.mSongSearchLong          = "Returned {numsongs} results, displaying first 5.";

//Twitter
global.mDefaultTweet            = "{currentdj} is playing {artist} - {song} right now! http://t.co/W1WHu2Cw";
global.mConfirmTweet            = "Tweet sent!";
global.mTweetLimit              = "Your tweet is {charlimit} characters over the limit!";
global.mTweetSpam               = "Don't spam! You can only tweet once every {twitime} minutes! Wait for a bit :P";

//Last.fm
global.mNoLastfm                = "You need to enable lastfm to use this feature!";
global.mNoInfoLastfm            = "This stuff is too underground for me to find any information!";
global.mLastfmNoArgs            = "Sorry, what am I looking up? Genre or Artist?";
global.mLastfmGenre             = "This song is {lastfmgenre}.";

//General
global.mHelpMsg                 = "Hey, {username}, the theme is {theme}, the song limit is {songlimit}, The queue is currently {queuecurrentlyon}, and {afk} minutes for afk.";  //the default help message.      
global.mCommandsList            = "The list of commands are as follows: /{commands}";
global.mThemeIs                 = "The current theme is {theme}.";
global.mCurrentDJSongCount      = "The current song count is: {djsandsongcount}";
global.mCurrentDJAfkCount       = "The current afk timer is: {djsandafkcount}";
global.mNotDJ                   = "I'm sorry {username}, but you're not a dj.";
global.mTheirUserId             = "{username}'s userid is: {user.userid}";
global.mYourUserId              = "Your userid is: {user.userid}";
global.mOffGenre                = "I'm sorry, but your song seems to be off genre, and we have to remove you from the deck."; // PMed to User.
global.mPMWillBootOffDeck       = "Alright, I'll boot you off the deck at the end of your song.";
global.mReadyRefresh            = "Okay, you can go ahead and refresh and I'll make sure you get your spot back.";
global.mSpotOpenFor             = null;
global.mNotMod                  = "I'm not a mod, so I can't boot anyone.";
global.mAlbum                   = "{title} is on {album}";
global.mGreetChange             = "{username}'s greeting set to: {greeting}";
global.mGreetDJChange           = "{username}'s DJ greeting set to: {djgreeting}";
global.mUserInfo                = "{username}'s hearts: {heart_count}, hearts given: {given_count}, total songs: {total_songs}, Heart Percentage: {heart_percentage}%";


//Speaking Values [advanced use only]
global.SpeakingLevel = {
    Misc: {val: 1, status: "Misc"},
    Greeting:{val: 2, status: "Greeting"},
    SongChange:{val: 3, status: "SongChange"},
    DJChange:{val: 4, status: "DJChange"},
    MODChange:{val: 5, status: "MODChange"},
    Errors: {val: 6, status: "Errors"},
    Debug: { val: 7, status: "Debug"},
    Verbose: {val: 8, status: "Verbose"}
}

global.Speaking = {
    Default: { flags: [SpeakingLevel.Greeting, SpeakingLevel.Misc] },
    Shy: { flags: [SpeakingLevel.Misc] },
    Silent: { flags: [] },
    Debug: { flags: [SpeakingLevel.Verbose] }
};

global.Requires = {
    User:       { val: 0, status: "User", check: function(pUser){ return true; } },
    VIP:        { val: 1, status: "VIP", check: function(pUser){ return pUser.GetLevel() > 1; }},
    Moderator:  { val: 2, status: "Moderator", check: function(pUser){ return pUser.GetLevel() > 2; } },
    SuperUser:  { val: 3, status: "SuperUser", check: function(pUser){ return pUser.GetLevel() > 3; } },
    Owner:      { val: 4, status: "Owner", check: function(pUser){ return pUser.isOwner; } }
}

global.DJImages = {
   "4e4d05b1a3f7510459174bc5" : {img : "http://i.imgur.com/WImHut6.jpg"},//jaydubs
   "4e225d714fe7d01dbc00ae50" : {img: "http://i.imgur.com/htHYquS.jpg"},//Nibbs
   "4e0ce113a3f751466f1591ad" : {img: "http://i.imgur.com/17yFUr3.jpg"},//Blades
   "4e0de3ffa3f7517dbd0115ce" : {img: "http://i.imgur.com/8CRaEyj.png"},//Geek
   "4f3564cca3f7517206007112" : {img: "http://i.imgur.com/zEwMURP.gif"},//Zupps
   "4e4d3f084fe7d02a3217fa37" : {img: "http://i.imgur.com/GCJrZmF.jpg"},//Boone
   "4eca7df9a3f751459f000b35" : {img: "http://i.imgur.com/1bGHT8i.jpg"},//smarty
   "4e3aaee54fe7d05c3204719a" : {img: "http://i.imgur.com/9c5zqgr.jpg"}//raychie
}