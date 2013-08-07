/*
    Copyright 2012 yayramen && Inumedia.
    This is the config file, where the variables for the bot are stored.
    You can have multiple config files, and run multiple bots with the 
    same source files.
*/
//Bring in the responses
require("./enums.js"); //ignore this


//Main Authorization Information
global.mAuthId                  			= "auth+live+119dc3fc5e91acda964989aa3af177a6f8bbf37e";//"auth+live+716958a18856d0f3616376e085164e9e13776661";//authid of bot
global.mUserId                  			= "4fbd0676eb35c170ec0000b1";//"4fc6c990eb35c14adc000064";//userid of bot
global.mRoomId                  			= "4e136e4114169c12830102da"; //"4e136e4114169c12830102da";//roomid of room to be hosted in

//General Information
global.mName                    			= "Rip 2.0";//name of bot [if bot's name is different, this will change it.]
global.mLaptop                  			= "mac";//Laptop the bot will use if the bot decides to DJ (lonely dj, /song)
global.mTheme                   			= "Rock/Alt";//default theme/genre for the room

//User Arrays [ignore mModerators]
global.mOwners                              = ['4e225d714fe7d01dbc00ae50','4e4d05b1a3f7510459174bc5','4e0ce113a3f751466f1591ad', '4eca7df9a3f751459f000b35'];//array of userids for who's an owner of the room.
global.mVIPs                                = ['4e225d714fe7d01dbc00ae50','4e4d05b1a3f7510459174bc5','4e0ce113a3f751466f1591ad'];//array of userids for who's a VIP.
global.mWhiteList                           = [];//array of userids for whitelist.
global.mModerators                          = [];//array of userids identified as moderators [dynamically generated, leave blank]


//Song Limits
global.mLimitOn                 			= false;    //If songs limits are on by default
global.mMaxSongs                			= 100;      //How many songs you can play
global.mWaitSongs               			= 1;        //How many songs you must wait after hitting limit to dj again
global.mMinSongLimitOperator    			= null;     //Whether song limits are dynamically generated null by default
global.mMinUsersForSongLimit    			= null;     //How many users have to be in the room to auto turn on song limits
global.mMinDJsForSongLimit     				= null;     //How many DJs have to be on deck to auto turn on song limits
global.mSongLimitUserProportion 			= 250;      //5 songs per 50 people in the room.

//Lotto System
global.mLottoOn                 			= false;    //Whether or not the next DJ is selected via a lottery
global.mLottoTime               			= 15;       //How long (in seconds) that users can /spin after a DJ drops
global.mLottoHoldTime           			= 15;       //How long (in seconds) the bot will hold the dj spot for the lotto winner

//Room Queue
global.mQueueOn                 			=true;      //If room queue is on by default
global.mMinQueueOperator        			=true;      //Whether queue is turned on dynamically
global.mMinUsersForQueue        			= null;     //How many users must be in the room to auto turn on the queue
global.mMinDJsForQueue          			= 5;        //How many DJs must be on deck to turn on queue automatically
global.mQueueGrabSpotTimeout        		= 30;       //How many seconds we should hold a spot for someone when they are next in the queue and there is an open spot.

//AFK Settings
global.mAFK                    				= 15;       //How many minutes of AFK before you get booted
global.mWarn                    			= true;     //Should the bot warn users who are going afk?
global.mMinAFKLimitOperator                	= "&&";     //Whether or not the AFK Limit is generated dynamically
global.mMinUsersForAFKLimit                	= 6;        //Minimum users in the room before the AFK limit is turned on dynamically
global.mMinDJsForAFKLimit               	= 5;        //Minimum DJs on deck before AFK limit is turned on dynamically
global.mAfkBop                       		= true;     //Should bopping for a song reset that person's afk time?

//Lonely DJ
global.mLonelyDJ                			= false;    //If true, bot will hop up to DJ if there is only one DJ [to prevent music cutoff]
global.mCheckAFKWithLonely                	= false;    //Should we check to see if people are afk when they're using Lonely DJ?
global.mCheckSongCountWithLonely			= false;    //Should we check the song count when they're using Lonely DJ?

//General Toggles
global.mWhiteListEnabled                	= false;    //Whitelist is on ( true ) or off ( false )
global.mPMSpeak                 			= true;     //Whether the bot will PM users so as to not spam
global.mModBop                  			= false;    //True, only mods can use the /bop command, false, anyone can.
global.mWaiter                         		= true;     //Whether waiter (/order) is enabled by default
global.mBotDJ                       		= true;     //Whether the bot can dj on commandglobal.mAutoBopForMods                        = true;                                //If we should automatically bop for mods and above.
global.mAutoBanBoots                        = false;    //Instead of banning people, we simply boot them from the room.
global.mAutoBanOnTTLink                     = true;     //Autobans someone from the room if they give a link to another room and joined < 1 minute ago
global.mAutoBanOnTTLinkTime                	= 60000;    // If they post a link to a room on turntable within 60 seconds after joining the room, they will be banned. (60000=60 seconds.)
global.mDownVotesForOffGenre    			= 3;
global.mHoldSpotForRefreshTime        		= 120;       //The bot will hold a spot for 2 minutes per request if someone needs to refresh.
global.mMaxElapsedTimeForDJSpot        		= 30000;
global.mIgnoreSongCountOpenSpot 			= true;      //If the time that the spot was open for is longer than mMaxElapsedTimeForDJSpot, that person will be allowed up if this is true.
global.mIgnoreSongCountOnLonely 			= true;      //If LonelyDJ is currently being used, the person will be able to get up if this is true.
global.mAutoBopForMods                      = true;      //If we should automatically bop for mods and above.

//Twitter
global.mTwitOn                              = true;      //Whether or not twitter functions are enabled
global.mModTwit                             = true;      //If true, mods can tweet, if false, only owners can tweet
global.mTwitTimeout                         = 5;         //How often [in minutes] the bot can tweet
/*global.mTwitKey                             = "sN4k8GBoiSfTUQxlZMMdA";                //Consumer Key for Twitter
global.mTwitSecret                          = "Qp4sDYTa5ST5ZeSWnqBDcjIIq9lrO1HKQKRSv02E4E";                //Consumer Secret for Twitter
global.mTwitToken                           = "593994717-YROpJYXbjpv37B7fnEa1DbojFnBnEXqhDfHpTLEu";                //Access Token for Twitter
global.mTwitTokenSecret                     = "6yQuMOHqcJAmWLhec418bzCTzgruVkt1xR3aLosAo";                //Access Secret for Twitter*/
global.mTwitKey                             = "9efZgFx3xctv7Tieusjphg";                //Consumer Key for Twitter
global.mTwitSecret                          = "xTF7HGaLdsyzDIwcwlJRcRgB5qj1B8fVmtPPYBEB9kA";                //Consumer Secret for Twitter
global.mTwitToken                           = "593994717-lP0AunQ96nPESIpAPLMyf2y6w1u0ax6pvVTDcMwN";                //Access Token for Twitter
global.mTwitTokenSecret                     = "W26M55xTxNlFMij7CgD2IzAw45nuL770WKSDVKyCdWs";                //Access Secret for Twitter

//Lastfm
global.mUseLastfm                           = false;        //Whether or not we connect to lastfm
global.mLastfmKey                           = "2a62c1146348b0dbd3197c95cf393996";                //Api Key for Lastfm
global.mLastfmSecret                        = "d95127cb62919837591fb602697819a9";                //Secret for Lastfm

//Advanced
global.mSpeakingLevel           			= Speaking.Debug;        //whether or not the bot talks without being prompted (greetings, dj announcements, etc.)
global.mNoSpamTimeout          				= 3;                       //3 seconds before the bot can say the same thing again.
global.mLoopTimeout             			= 5;                       //Does the main loop every 5 seconds.
global.mSaveTimeout                         = 30;                                //Saves everyone after 30 seconds.
global.mTimeForCacheFlush                	= 15000;                        //Time that the user stays in the cache after they leave.

//Let's start the bot then.
require("./botmain.js");