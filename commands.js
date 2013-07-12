/**
 * @copyright 2012 yayramen && Inumedia.
 * @author Inumedia
 * @description This is where all the commands are stored and loaded into runtime from.
 * @note All commands must be entirely lower case.
 * 
 * @variables:
 * hidden - whether or not the command shows up in the /command list
 * bare - whether or not the command can be accessed without an idetifier. ( ie / or *)
 * pm - whether or not the command will be processed if it is PM'd to the bot [mPMSpeak must be enabled]
 */
global.mCommands = [
{
    command: 'help',
    callback: function (pUser, pText) {
        Speak(pUser, mHelpMsg, SpeakingLevel.Misc, null, true);
    },
    requires: Requires.User,
    hint: "Gives the users some pretty basic help and advice.",
    bare: true,
    pm: true
},
{
    command: 'visitors',
    message: [
        'Visitor beware, the mods shine their boots.',
                'Go back to summer school!',
                'Your mom still owes me money'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.Moderator,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: true,
        bare: true,
        pm: true
},
{
  command: 'mysql',
  callback: function(pUser, pText) {
              if(global.mMySQLDB)
              {
                try
                {
                  mMySQLDB.connect();
                  mMySQLDB.query("INSERT INTO mUsers SET ?", {'userid': '4e4d05b1a3f7510459174bc', 'userdata': JSON.stringify(mUsers['4e4d05b1a3f7510459174bc'])});
                  /*global.mMySQLDB.query('SELECT userid, userdata FROM mUsers', function(err, rows, fields) {
                          if (err) throw err;
                          Log(JSON.stringify(rows));
                          //Log(JSON.stringify(fields));
                          if(rows)
                          {
                            for(r=0; r < rows.length; r++)
                            {
                              Log("userid: " + rows[r]['userid'] + "\nuserdata: " + JSON.stringify(rows[r]['userdata']));
                            }
                          }
                  });*/
                  mMySQLDB.end();
                }
                catch(err)
                {
                  Log(err);
                  try
                  {
                    global.mMySQLDB.end();
                  }
                  catch(err)
                  {
                    Log("Error closing mMySQLDB");
                    Log(err);
                  }
                }
              }
              mBot.speak("Check log file.");
            },
  requires: Requires.Owner,
  hidden: true,
  bare: true,
  pm: true
},
{
    command: 'liljon',
    message: [
        'AWWW SKEET SKEET SKEET Mother...',
                'OOOOOKAAAYYYYYY',
                'YEEEEEEAAAAAYUUUUHHHHH',
                'WHAT?!',
                'To the window...to the wall...',
                'Til the :sweat_drops: drip down my balls',
                'Make all these :ok_woman: :no_good: :information_desk_person: :massage: :princess: crawl'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.User,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'seeuserprop',
    callback: function (pUser, pText) {
        if(!pText) return;
        var sSplit = pText.split(' ');
        var sVar = sSplit.shift();
        var sVal = sSplit.join(' ');
        if(mUsers[sVar.trim()]) {
            var sUser = mUsers[sVar.trim()];
            if(sUser[sVal])
            {
              Speak(sUser, "{username}." + sVal + " is set to " + sUser[sVal], SpeakingLevel.Misc);
            }
        } else FindByName(sVar, function (sUsers) {
            for(var i = 0; i < sUsers.length; ++i) {
                var sUser = sUsers[i];
                if(sUser[sVal])
                {
                  Speak(sUser, "{username}." + sVal + " is set to " + sUser[sVal], SpeakingLevel.Misc);
                }
            }
        });
    }, 
    requires: Requires.Owner,
    hint: "See properties of a user.",
    hidden: true,
    bare: true,
    pm: true
  
},
{
    command: 'rkelly',
    message: [
        'booo hooo teee!',
                'I\'m gonna piss on you',
                'I\'m stuck in the closet!'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.User,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'nelly',
    message: [
        'I\'m a sucker for corn rows and manicured toes',
                'Give me 2 purrrr',
                'It\'s getting hot in here, take off all your clothes',
                'You ain\'t from Russia so why you rushin?',
                'She only wants me for my pimp juice',
                'Drop down and get your eagle on girl.',
                'Is that your ass or your momma have reindeer?',
                'Shake ya tail feather.',
                'Call me George Foreman cause I\'m selling errbody grillz.'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.User,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'sparrow',
    message: [
				'http://29.media.tumblr.com/tumblr_lkywd2nIIF1qd6k8fo1_500.gif',
                'http://www.quirkbooks.com/sites/default/files/editor_uploads/bolton-back-to-the-good.gif',
				'http://30.media.tumblr.com/tumblr_llb0qqfGBT1qicmwao1_500.gif',
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.User,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'doobie',
    message: [
        'I know that Steeeve likes Oatmeeeeeal'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.User,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'skrillex',
    message: [
        'WUB WUB WUB',
                'PEW PEW PEW',
                'DROP THE BASS!',
                'OH MY GAWD!'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.User,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'whistle',
    message: [
        'Thaz only in the mo\'nin',
        'The whistles go WHOOOOOOO',
        'WHOO WHOOOOOO',
        'It could be a crackhead....Got hold to the wrong stuff.',
        'I want the gold. Give me the gold.'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.User,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},

{
    command: 'topgun',
    message: [
        'Take me to bed, or lose me forever.',
                'I feel the need....the need for speed.',
                'That\'s a negative, Ghostrider. Pattern is full.',
                'Any o\' you boys seen an aircraft carrier around here',
                'Hard deck my a$$.',
                'The plaque for the alternates is down in the ladies room.',
                'You look like you need another shower.',
                'You can be my wingman anytime.',
                'Even {username} could get laid in a place like this.'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        Speak(pUser, mRandomItem(this.message), SpeakingLevel.Misc);
        //mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.User,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},

{
    command: 'rickroll',
    message: [
        'Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.Moderator,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},

{
    command: 'who',
    message: [
        'MIKE JONES!'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.Moderator,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'electric',
    message: [
        'BOOGIE WOOGIE WOOGIE'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.Moderator,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'lmfao',
    message: [
        'I WORK OUT!',
                'wiggle wiggle wiggle wiggle wiggle YEAH!!',
                'I got passion in my pants, and I ain\'t afraid to show it.'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.Moderator,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'scatatme',
    message: [
        'ski-ba-bop-ba-dop-bop'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.Moderator,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'quietstair',
        message: [
                "{username}, take a seat on the Quiet Stair to think about what you have done.",
                "I think you know why you are on the Quiet Stair, {username}.",
                "The Quiet Stair is for bad kids, {username}."
    ],
    callback: function (pUser, pText)
              {
                if (!pText) return;
                var sMessage = mRandomItem(this.message);
                FindByName(pText, function (sUser)
                                  {
                                    if(sUser.length > 0) {
                                      sUser = sUser[0];
                                      Speak(sUser, sMessage, SpeakingLevel.Misc);
                                      mBot.remDj(sUser.userid);
                                    }
                                  });
            },
    requires: Requires.Moderator,
        hint: "Remove a DJ",
        hidden: false,
        bare: true,
    pm:true
},


{
    command: 'boobflash',
    message: [
        '(   .   Y   .   )',
                'I will show you mine if you show me yours',
                '(   :star:   Y   :star:   )',
                 '( :cyclone: Y :cyclone: )'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.Moderator,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false,
        bare: true,
        pm: true
},
{
    command: 'tgif',
    message: [
        'It\'s Friday, Bitches'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
},
    requires: Requires.User,
    hint: "Friday.",
    hidden: false,
        bare: true,
        pm: true
}, 
 
{
    command: 'crash',
    callback: function (pUser, pText) {
        throw new Error('Crashing the bot.');
    },
    requires: Requires.Owner,
    hint: "Crashes the bot. Don't do unless necessary."
}, 
{
    command: 'ban',
    callback: function (pUser, pText) {
        var sSplit = pText.split(' ');
        if(sSplit.length == 1) Ban(sSplit[0]);
        else Ban(sSplit.shift(), sSplit.join(' '));
    },
    requires: Requires.Moderator,
    hint: "Add a user to the ban list and kicks them from the room."
}, 
{
    command: 'unban',
    callback: function (pUser, pText) {
        if(pText) Unban(pText);
    },
    requires: Requires.Moderator,
    hint: "Removes a user from the ban list."
}, 
{
    command: 'say',
    callback: function (pUser, pText) {
        mBot.speak(pText);
    },
    requires: Requires.Owner,
    hint: "Makes the bot say something.",
    pm: true,
    bare: true
}, 
{
    command: 'q+',
    callback: function (pUser, pText) {
        if(!mQueueCurrentlyOn) return Speak(pUser, mQueueOff, SpeakingLevel.Misc);
        if(mDJs.indexOf(pUser.userid) != -1) {
            Speak(pUser, mQueueAlreadyDJ, SpeakingLevel.Misc);
        } else if(mQueue.indexOf(pUser.userid) != -1) {
            Speak(pUser, mAlreadyInQueue, SpeakingLevel.Misc);
        } else if(mDJs.length == mMaxDJs) {
            QueuePush(pUser.userid);
            Speak(pUser, mQueueAdded, SpeakingLevel.Misc);
        } else Speak(pUser, mOpenSpotNoQueueing, SpeakingLevel.Misc);
    },
    requires: Requires.User,
    hint: "Used to join the queue.",
    bare: true,
    hidden: true
}, 
{
    command: 'q-',
    callback: function (pUser, pText) {
        if(mDJs.indexOf(pUser.userid) != -1) {
            Speak(pUser, mQueueAlreadyDJ, SpeakingLevel.Misc);
        } else if(mQueue.indexOf(pUser.userid) != -1) {
            mQueue.splice(mQueue.indexOf(pUser.userid), 1);
            Speak(pUser, mRemoveFromQueue, SpeakingLevel.Misc);
        } else Speak(pUser, mNotInQueue, SpeakingLevel.Misc);
    },
    requires: Requires.User,
    hint: "Used to remove from the queue.",
    bare: true,
    hidden: true
}, 
{
    command: 'q',
    callback: function (pUser, pText) {
        if(!pText) {
            if(!mQueueCurrentlyOn) return Speak(pUser, mQueueOff, SpeakingLevel.Misc);
            else if(mQueue.length > 0) return Speak(pUser, mQueueUsers, SpeakingLevel.Misc);
            else return Speak(pUser, mQueueEmpty, SpeakingLevel.Misc)
        };
        var sSplit = pText.split(' ');
        var sArg = sSplit.shift();
        var sVal = sSplit.join(' ');
        if(sArg == 'remove') {
            if(sVal == 'me') {
                if(mDJs.indexOf(pUser.userid) != -1) {
                    return Speak(pUser, mQueueAlreadyDJ, SpeakingLevel.Misc);
                } else if(mQueue.indexOf(pUser.userid) != -1) {
                    mQueue.splice(mQueue.indexOf(pUser.userid), 1);
                    return Speak(pUser, mRemoveFromQueue, SpeakingLevel.Misc);
                } else return Speak(pUser, mNotInQueue, SpeakingLevel.Misc);
            }
            if(mQueue.length > 0 && (pUser.isMod)) {
                if(!sVal) {
                    var sUser = mUsers[mQueue[0]];
                    Speak(sUser, mModRemoveFromQueue, SpeakingLevel.Misc);
                    mQueue.shift();
                } else {
                    FindByName(sVal, function (sUser) {
                        for(var i = 0; i < sUser.length; ++i) {
                            if(mQueue.indexOf(sUser[i].userid) === -1) return;
                            if(sUser[i] == mUsers[mQueue[0]]) {
                                mQueue.shift();
                                return Speak(sUser[i], mModRemoveFromQueue, SpeakingLevel.Misc);
                            } else {
                                mQueue.splice(mQueue.indexOf(sUser[i].userid), 1);
                                return Speak(sUser[i], mModRemoveFromQueue, SpeakingLevel.Misc);
                            }
                        }
                    });
                };
            };
        };
        if(sArg == 'clear' && (pUser.isMod)){
            mQueue = [];
            mQueueNextUp = null;
            return Speak (pUser, mClearQueue, SpeakingLevel.Misc);
        };
        if(sArg == 'status'){
            if(!mQueueCurrentlyOn) return Speak(pUser, mQueueOff, SpeakingLevel.Misc);
            else if(mQueue.length > 0) return Speak(pUser, mQueueStatus, SpeakingLevel.Misc);
            else return Speak(pUser, mQueueEmpty, SpeakingLevel.Misc)
        };
        if(sArg == 'add'){
            if(!mQueueCurrentlyOn) return Speak(pUser, mQueueOff, SpeakingLevel.Misc);
            if(mDJs.indexOf(pUser.userid) != -1) {
                return Speak(pUser, mQueueAlreadyDJ, SpeakingLevel.Misc);
            } else if(mQueue.indexOf(pUser.userid) != -1) {
                return Speak(pUser, mAlreadyInQueue, SpeakingLevel.Misc);
            } else if(mDJs.length == mMaxDJs) {
                QueuePush(pUser.userid);
                return Speak(pUser, mQueueAdded, SpeakingLevel.Misc);
            } else return Speak(pUser, mOpenSpotNoQueueing, SpeakingLevel.Misc);
        }

    },
    requires: Requires.User,
    hint: "/q add, /q remove, /q status, /q clear",
    bare: true
}, 
{
    command: 'maul',
    callback: function (pUser, pText) {
        if (!pText) return;
        FindByName(pText, function (sUser) {
            for(var i = 0; i < sUser.length; ++i)
            mBot.remDj(sUser[i].userid);
        });
    },
    requires: Requires.Moderator,
    hint: "Remove a DJ"
}, 
{
    command: 'gtfo',
    callback: function (pUser, pText) {
        FindByName(pText, function (sUser) {
            if(sUser.length > 0) sUser = sUser[0];
            mBot.speak("http://i.imgur.com/KgoIF.gif");
            mBot.bootUser(sUser.userid, "Not in my kitchen.");
        });
    },
    requires: Requires.Moderator,
    hint: "Boot a User"
}, 
{
    command: 'slap',
    callback: function (pUser, pText) {
        FindByName(pText, function (sUser) {
            if(sUser.length > 0) {
                sUser = sUser[0];
                Speak(sUser, '/me slaps {username}', SpeakingLevel.Misc);
            }
        });
    },
    requires: Requires.Moderator,
    hint: "Slap a ho",
    pm: true
},
{
    command: 'bitchslap',
    message: [
        //'/me BITCHSLAPS {username}',
        '{username}, I will bitch slap you back to Africa!'
    ],

    callback: function (pUser, pText) {
        if(pText != null && pText.trim() != "")
        {
          var sMessage = mRandomItem(this.message);
          FindByName(pText, function (sUser) {
            if(sUser.length > 0) {
                sUser = sUser[0];
                Speak(sUser, sMessage, SpeakingLevel.Misc);
            }
          });
        }
    },
    requires: Requires.Moderator,
    hint: "Slap a ho",
    bare: true,
    pm: true
}, 
{
    command: 'stagedive',
    message: [
        "{username} is surfing the crowd!", 
        "Oops! {username} lost a shoe sufing the crowd.", 
        "Wooo! {username}'s surfin' the crowd! Now to figure out where the wheelchair came from...", 
        "Well, {username} is surfing the crowd, but where did they get a raft...", 
        "{username} dived off the stage...too bad no one in the audience caught them.", 
        "{username} tried to jump off the stage, but kicked their laptop. Ouch.", 
        "{username} said they were going to do a stagedive, but they just walked off.", 
        "And {username} is surfing the crowd! But why are they shirtless?", 
        "{username} just traumatized us all by squashing that poor kid up front."
    ],
    callback: function (pUser, pText) {
        if(mDJs.indexOf(pUser.userid) == -1) return;
        var sMessage = mRandomItem(this.message);
        Speak(pUser, sMessage, SpeakingLevel.Misc);
        pUser.RemoveDJ();
    },
    requires: Requires.User,
    hint: "Removes if DJ"
}, 
{
    command: 'ragequit',
    callback: function (pUser, pText) {
        mBot.bootUser(pUser.userid, "Lol they mad.");
    },
    requires: Requires.User,
    hint: "Remove self from room"
}, 
{
    command: 'autobopfor',
    callback: function (pUser, pText) {
        FindByName(pText, function (sUser) {
            if(sUser.length > 0) {
                sUser = sUser[0];
                sUser.autoBopFor = true;
                sUser.Save();
                Speak(sUser, "OK.  I'll give {username} some love.", SpeakingLevel.Misc);
            }
        });
    },
    requires: Requires.Moderator,
    hint: "Make Rip autobop for the specified user",
    pm: true
},
{
    command: 'disable',
    callback: function (pUser, pText) {
        eval(pText + " = null");
    },
    requires: Requires.Owner,
    hint: "Used to disable variables.  Handle with care."
}, 
{
    command: 'djs',
    callback: function (pUser, pText) {
        if (!pText) {
            var sDJSongCount = [];
            for(var sDJ in mDJs) {
                var sUser = mUsers[mDJs[sDJ]];
                sDJSongCount.push(sUser.name + ": " + sUser.songCount);
            }
            return Speak(pUser, mCurrentDJSongCount, SpeakingLevel.Misc, [
                ['{djsandsongcount}', sDJSongCount.join(', ')]
            ]);
        };
        var sSplit = pText.split(' ');
        var sVar = sSplit.shift();
        var sVal = sSplit.join(' ');
        if (sVar == 'wait') {
            var sDJWaitCount = [];
            for(var x in mUsers) {
                var sUser = mUsers[x];
                if (sUser.mWaitingSongLimit > 0) sDJWaitCount.push(sUser.name + ": " + sUser.mWaitingSongLimit);
            }
            return Speak(pUser, "Wait Counts: {djwaticount}", SpeakingLevel.Misc, [
                ['{djwaticount}', sDJWaitCount.join(', ')]
            ]);
        };
        if (pUser.isMod) {
            if (sVar == 'reset') {
                if (sVal == 'all') {
                    for(i in mDJs) {
                        var sUser = mUsers[mDJs[i]];
                        sUser.songCount = 0;
                    }   
                Speak(pUser, 'All DJ song counts have been reset.', SpeakingLevel.Misc);
                } else FindByName(sVal, function (sUsers) {
                    for(var i = 0; i < sUsers.length; ++i) {
                        var sUser = sUsers[i];
                        if (sUser.isDJ) {
                            sUser.songCount = 0;
                            Speak(sUser, "{username}'s song count has been reset.", SpeakingLevel.Misc);
                        };
                    }
                });    
            } else FindByName(sVar, function (sUsers) {
                    for(var i = 0; i < sUsers.length; ++i) {
                        var sUser = sUsers[i];
                        if (sUser.isDJ) {
                            sUser.songCount = sVal;
                            Speak(sUser, "{username}'s song count has been set to "+sVal, SpeakingLevel.Misc);
                        };
                    }
            });
        }
    },
    requires: Requires.User,
    hint: "Song count for the DJs. /djs, /djs reset all, /djs reset @username"
}, 
{
    command: 'afks',
    callback: function (pUser, pText) {
        var sDJAfkCount = [];
        for(var sDJ in mDJs) {
            var sUser = mUsers[mDJs[sDJ]];
            var sAfkTime = sUser.afkTime;
            var sAge = Date.now() - sAfkTime;
            var sAge_Minutes = Math.floor(sAge / 1000 / 60);
            sDJAfkCount.push(sUser.name + ": " + sAge_Minutes + 'm');
        }
        Speak(pUser, mCurrentDJAfkCount, SpeakingLevel.Misc, [
            ['{djsandafkcount}', sDJAfkCount.join(', ')]
        ]);
    },
    requires: Requires.User,
    hint: "Tells the current afk timer for the DJs."
}, 
{
    command: 'commands',
    callback: function (pUser, pText) {
        var sCommands = [];
        mCommands.forEach(function (pCommand) {
            if(pCommand.command == 'spin' && mLottoOn) sCommands.push(pCommand.command);
            if(pCommand.command == 'song' && mBotDJ) sCommands.push(pCommand.command);
            if(pCommand.requires.check(pUser) && !(pCommand.hidden)) sCommands.push(pCommand.command);
        });
        Speak(pUser, mCommandsList, SpeakingLevel.Misc, [
            ['{commands}', sCommands.join(', /')]
        ], true);
    },
    requires: Requires.User,
    hint: "Tells what all the commands are.",
    pm: true
}, 
{
    command: 'theme',
    callback: function (pUser, pText) {
        Speak(pUser, mThemeIs, SpeakingLevel.Misc, null, true);
    },
    requires: Requires.User,
    hint: "Tells what the theme is.",
    bare: true,
    pm: true
}, 
{
    command: 'party',
    message: 'Gimme a shot and clear the dance floor!!',
    callback: function (pUser, pText) {
        mBot.vote("up");
        Speak(pUser, this.message, SpeakingLevel.Misc);
    },
    requires: mModBop ? Requires.Moderator : Requires.User,
    hint: "Makes the bot dance." + (mModBop ? "  Can not be done by regular users." : ""),
    hidden: false
}, 
{
    command: ['dance', 'bop'],
    message: 'http://i.imgur.com/MVHO3pM.gif',
    callback: function (pUser, pText) {
        mBot.vote("up");
        Speak(pUser, this.message, SpeakingLevel.Misc);
    },
    requires: mModBop ? Requires.Moderator : Requires.User,
    hint: "Makes the bot dance." + (mModBop ? "  Can not be done by regular users." : "")
}, 
{
    command: 'hulk',
    message: [
        'This is my favorite dubstep.', 
        'I just want to hump the speaker.'
    ],
    callback: function (pUser, pText) {
        mBot.vote("up");
        mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.Moderator,
    hint: "Makes the bot dance.  Can not be done by regular users.",
    hidden: false
}, 
{
    command: 'moo',
    callback: function (pUser, pText) {
        Speak(pUser, "I'm not a cow, but oka-MOOOOO!", SpeakingLevel.Misc);
    },
    requires: Requires.User,
    hint: "moo.",
    hidden: true
}, 
{
    command: 'pats',
    message: [
        '/me purrrrrrrrrrrrs'],
    callback: function (pUser, pText) {
        mBot.speak(mRandomItem(this.message));
    },
    requires: Requires.User,
    hint: "pats.",
    hidden: true,
    pm: true
}, 
{
    command: 'album',
    callback: function (pUser, pText) {
        Speak(pUser, mAlbum, SpeakingLevel.Misc, [['{title}', mCurrentSong.songName], ['{album}', mCurrentSong.songAlbum]])
    },
    requires: Requires.User,
    hint: "Get the album",
    hidden: false
}, 
{
    command: 'order',
    callback: function (pUser, pText) {
        HandleMenu(pUser, pText);
    },
    requires: Requires.User,
    hint: "Order something off the menu."
}, 
{
    command: 'react',
    reactions: {
               "nod": ["http://bit.ly/RZmuKC"],
               "dropit": ["http://i.imgur.com/NskII.gif", "http://i.imgur.com/zb2CIJl.gif"],
               "dayum": ["http://i.imgur.com/jgKpa.gif"],
               "damn": ["http://1.bp.blogspot.com/-1_EaunLmAko/UX70_sAqeMI/AAAAAAAABxU/Pv54l1y4H0Y/s1600/friday-damn-funny-gif.gif"],
               "thumbsup": ["http://images.wikia.com/mlpfanart/images/a/ab/3879_-_animated_gif_chuck_norris_dodgeball_thumbs_up.gif", "http://i.imgur.com/tLv5P.gif", "http://bit.ly/PVsTHV", "http://i.imgur.com/f9AL9.gif"],
               "notime": ["http://i.imgur.com/GrI0m.gif"],
               "approve": ["http://i.imgur.com/3MiYxin.gif", "http://i.imgur.com/8VI4riF.gif", "http://bit.ly/RZmuKC", "http://i.minus.com/ibcRigzGi5FrMN.gif", "http://bit.ly/TIr5HF","http://i.imgur.com/JOmnF.gif", "http://i.imgur.com/InigN.gif"],
               "applaud": ["http://static4.fjcdn.com/thumbnails/comments/oh+my+fucking+god+i+love+squirrels+_27bea4110cf088c88d1e60076a43f944.gif","http://bit.ly/RVwl8G", "http://bit.ly/tttr0a", "http://bit.ly/Sl84u5"],
               "what": ["http://i.imgur.com/2sIYB.jpg", "http://i.imgur.com/g8KjHsx.gif", "http://i.imgur.com/HHaNSlm.gif", "http://24.media.tumblr.com/35f970af44d470f4897c82904d3b177a/tumblr_mnlg21IvmL1qb4rpho1_400.gif", "http://i.imgur.com/XhWUln5.gif", "http://i.imgur.com/YP7Ly.gif", "http://assets.sbnation.com/assets/2589361/wuhwhat.gif", "http://i.imgur.com/paudOHs.gif", "http://i.imgur.com/Cv5xiAN.gif", "http://i.imgur.com/ZR7KiW7.gif", "http://i.imgur.com/8wlxGkk.gif", "http://img.pandawhale.com/28468-Taylor-swift-lol-gif-bzRK.gif", "http://bit.ly/t1Rjci", "http://i.imgur.com/OvBo4.gif", "http://i.imgur.com/i3ZWA.gif", "http://24.media.tumblr.com/tumblr_mc20p8TuwK1qeo6ejo1_250.gif"],
               "awe": ["http://bit.ly/wOpdks", "http://i.imgur.com/Zr203.gif", "http://i.imgur.com/FCEYI.gif", "http://i.imgur.com/wDf4S.gif"],
               "dance": ["http://www.refinedguy.com/wp-content/uploads/2012/09/aerobics-dance.gif", "i.minus.com/ixURS8hWlcKEd.gif", "http://i.imgur.com/eFixLPn.gif", "http://mdht.files.wordpress.com/2011/04/dora_o_gifsoup-com.gif", "http://i.imgur.com/Tizy6Z9.gif", "http://i.imgur.com/ciTsD.gif", "http://media.tumblr.com/6b7e1331c2fbc7801056bfc6d48ad89f/tumblr_inline_mhdcuie2Fh1rctfjr.gif","http://i.minus.com/iXmWWRt1ZKa8F.gif", "http://i.imgur.com/cxpcA.gif", "http://i.imgur.com/WUO5o.gif", "http://i.imgur.com/R5T79.gif", "http://bit.ly/Qkeyqb", "http://i.imgur.com/bg0P9.gif", "http://i.imgur.com/c7LTk.gif", "http://i.imgur.com/KW3uF.gif", "http://bit.ly/RDs7gl", "http://bit.ly/sycK0g", "http://25.media.tumblr.com/tumblr_memu1uEGGJ1rabggho1_250.gif"],
               "twss": ["http://bit.ly/uwAuek", "http://bit.ly/Kv9n5i", "http://img.pandawhale.com/post-16031-That-s-What-She-Said-gif-nDt8.gif"],
               "boohoo": ["http://i.imgur.com/iyxzrxa.gif", "http://i.imgur.com/B4VKH.gif", "http://i.imgur.com/gCi60.gif", "http://i.imgur.com/9YBwN.gif", "http://i.imgur.com/u4dJsCh.gif"],
               "rage": ["http://bit.ly/UNdgXA", "http://bit.ly/hYjaIU", "http://i.imgur.com/Bw1OAGw.jpg", "http://i.imgur.com/nV3Nmni.gif", "http://i.imgur.com/9TWp0vS.gif", "http://bit.ly/PrPs68", "http://bit.ly/OZtvuw", "http://i.imgur.com/arA52.gif"],
               "whocares": ["http://i.imgur.com/tPKHX.gif", "http://i.imgur.com/ZXOtzOA.gif", "http://i.imgur.com/flCjg4A.gif"],
               "alright": ["http://i.imgur.com/iPInR.gif"],
               "metal": ["http://gifsoup.com/webroot/animatedgifs/55558_o.gif", "http://i.imgur.com/vO3s8RP.gif", "http://i.imgur.com/q8jC7Ar.gif", "http://i.imgur.com/q8jC7Ar.gif", "http://www.myspacegraphicsandanimations.com/images/beavis-butthead-6-7.gif"],
               "thug": ["http://i.imgur.com/KL4yO.gif", "http://i.imgur.com/idIwK.gif"],
               "no": ["http://i.imgur.com/cM7u6Cx.gif", "http://i.imgur.com/rxLGzil.gif", "http://i.imgur.com/swtvgfm.gif", "http://i.imgur.com/08g9i26.gif","http://i.imgur.com/fGUF3lG.gif", "http://bit.ly/QqpYGL", "http://media.tumblr.com/tumblr_m9r8fetJjc1rvttv9.gif", "http://i.imgur.com/TWMPwwc.gif", "http://i.imgur.com/nD6k8xv.gif", "http://i.imgur.com/oPA7eYP.gif", "http://media.tumblr.com/3d04008d4b05a421d877b0852e5b0a0a/tumblr_inline_mk90bbZ1ss1qz4rgp.gif", "http://i.imgur.com/gv7kRft.gif", "http://i.imgflip.com/vvix.gif"],
               "hellno": ["http://i.imgur.com/zLP1yIe.gif"],
               "yes": ["http://i.imgur.com/NPDSB0Q.gif", "http://i.imgur.com/9izVo0I.gif", "http://i.imgur.com/9ZVrQFE.gif", "http://i.imgur.com/FcvZiru.gif", "http://i.imgur.com/WHuTCuf.gif?1", "http://i.imgur.com/UzwKBUu.gif", "http://i.imgur.com/7Pn4Llc.gif", "http://i.imgur.com/pZaOrFt.gif", "http://i.imgur.com/InigN.gif", "http://i.imgur.com/FcvZiru.gif", "http://i.imgur.com/K4O3lj0.jpg"],
               "gob": ["http://24.media.tumblr.com/tumblr_m0p1yz9SsC1qf0kb5o2_250.gif", "http://gifsoup.com/webroot/animatedgifs/335898_o.gif", "http://bit.ly/UfQJmj"],
               "random": ["http://www.refinedguy.com/wp-content/uploads/2012/09/3-funny-sports-pictures-wrestling-is-a-serious-legitimate-sport.gif", "http://bit.ly/LO7wUN"],
			         "excited":["http://www.reactiongifs.com/wp-content/uploads/2012/12/Al-bundy-ed-oneill-animated-gif-2.gif","http://www.reactiongifs.com/wp-content/uploads/2013/01/happy-twins.gif", "http://i.imgur.com/wlX2s.gif", "http://i.imgur.com/18f7bdG.gif", "http://i.minus.com/i95Y2hejoCrKN.gif", "http://i.imgur.com/X4JcVPp.gif", "http://www.refinedguy.com/wp-content/uploads/2012/09/4-excited-nets-basketball-fan.gif", "http://i.imgur.com/boUsk.gif"],
			         "fyeah":["http://i.imgur.com/JOmnF.gif", "http://i.imgur.com/OhZOjR8.gif", "http://www.refinedguy.com/wp-content/uploads/2012/09/excited-sports-fan.gif", "http://i.imgur.com/e6HsKIc.gif?1"],
               "SOAD": ["http://i.imgur.com/fy57mrK.gif", "http://cdn3.sbnation.com/imported_assets/817019/OMFG.gif", "http://i.imgur.com/4JCINXy.gif", "http://www.totalprosports.com/wp-content/uploads/2012/10/will-muschamp-pissed-off-gif.gif", "http://cdn2.mocksession.com/wp-content/uploads/2013/01/MIKE-SMITH-STICK-ABUSE.gif", "http://i.imgur.com/QffmtXk.gif"],
               "celebrate": ["http://i.imgur.com/37WT4dK.gif", "http://i.imgur.com/D9ILaxr.gif", "http://i.imgur.com/oqh5nC0.gif", "http://i.imgur.com/DTUvG.gif", "http://24.media.tumblr.com/tumblr_m8nid7ImjS1r2oa9ko1_500.gif", "http://i.imgur.com/DML290E.gif"],
               "mindblown": ["http://media.tumblr.com/tumblr_m4ptp671l11r1axrq.gif", "http://i.imgur.com/sBIhb.gif"],
               "skrillex": ["http://i.imgur.com/u7aqXT6.gif", "http://i.imgur.com/jfdEEUT.gif", "http://25.media.tumblr.com/tumblr_lrbwvhqeQz1qjxefjo1_500.gif"],
               "grovel": ["http://gifrific.com/wp-content/uploads/2012/06/Waynes-World-Were-not-Worthy.gif"],
               "ohsnap": ["http://media.tumblr.com/tumblr_mbwv2ynIHB1qlgvan.gif", "http://i198.photobucket.com/albums/aa311/andiluxe/gifspam/ohsnap-2.gif","http://27.media.tumblr.com/tumblr_m3f9q0kwxX1qbr7pro1_400.gif"],
               "scatdance": ["http://i.imgur.com/NtVlY.gif"],
               "topgun": ["http://stream1.gifsoup.com/view3/1750401/top-gun-o.gif", "http://media.heavy.com/media/2013/02/top-gun_o_GIFSoup.com_.gif"],
               "eyeroll": ["http://i.imgur.com/cHr8404.gif", "http://i.imgur.com/BYuURo9.gif", "http://25.media.tumblr.com/730fbd6277f8d8f756200f2e9e832f89/tumblr_mjo3cfDWZZ1qcvkpto2_250.gif", "http://i.imgur.com/SKBQKbg.gif"],
               "whoa": ["http://stream1.gifsoup.com/view5/3964674/whoa-o.gif", "http://i.imgur.com/q7aC81y.gif", "http://stream1.gifsoup.com/view4/1252664/whoa-o.gif"],
               "awwyeah": ["http://i.imgur.com/If2YeXZ.gif", "http://media.tumblr.com/tumblr_m9y2wqxADo1qcpvlr.gif"],
               "facepalm": ["http://i.imgur.com/gYgBktE.gif", "http://i.imgur.com/X23mytA.gif", "http://24.media.tumblr.com/tumblr_m6pid35QyH1rqfhi2o1_400.gif", "http://i.imgur.com/nDPJW.gif"],
               "highfive": ["http://i.imgur.com/QIR2ECm.gif", "http://25.media.tumblr.com/tumblr_m7k7akJvex1rwcc6bo1_500.gif", "http://media.tumblr.com/tumblr_m96ohz4Drz1rrmo7v.gif"],
               "seeya": ["http://i.imgur.com/6eKvOJQ.gif", "http://i.imgur.com/ygVKO.gif", "http://i.imgur.com/ULk8d.gif", "http://24.media.tumblr.com/135a1cde345a2c1a90c353ab122943bd/tumblr_mh5f51bJXq1r3ty02o1_500.gif"],
               "fixit": ["http://i.imgur.com/K2ETy.gif", "http://i.imgur.com/oMBasdV.gif"],
               "badcall": ["http://i.imgur.com/O3PbK.gif"],
               "hug": ["http://www.reactiongifs.com/wp-content/uploads/2012/12/virtual_hug.gif"],
               "yw": ["http://i.imgur.com/cxvmW61.gif", "http://i.imgur.com/K4iMPnx.gif"],
               "chill": ["http://i.minus.com/itXjZFNxW68ta.gif"],
               "gottime": ["http://i.imgur.com/CfNS0uY.gif"],
               "smarty": ["http://i.imgur.com/afsjhmO.gif", "http://i.imgur.com/zAJEZej.gif", "http://i.imgur.com/h5X1Yqq.gif", "http://i.imgur.com/5qpVU3x.gif"],
               "myjam": ["http://i.imgur.com/DShdrkA.gif", "http://i.imgur.com/UjQBAb3.gif", "http://i.minus.com/iwFvONTqM1lW1.gif", "http://mrwgifs.com/wp-content/uploads/2013/04/Thats-So-Raven-Thats-My-Jam-Gif.gif"],
               "shocked": ["http://i.imgur.com/tgp8gnO.gif?1", "http://www.reactiongifs.com/wp-content/gallery/wtf/what-Alison-Brie-.gif", "http://i.imgur.com/oGdHwNa.gif", "http://i.imgur.com/sAg6KVS.gif", "http://i.imgur.com/2qSjrW3.gif", "http://i.imgur.com/7mjH4Ns.gif", "http://i.imgur.com/6ogeF96.gif", "http://bkhemphill.files.wordpress.com/2013/01/tumblr_mglimdbcdo1qiavcao1_500.gif?w=610", "http://images.wikia.com/smuff/images/b/b1/I_don%27t_know_what_I_expected.gif"],
               "micdrop": ["http://i.imgur.com/ih9LX4I.gif"],
               "false": ["http://i.imgur.com/v6k7yWj.gif", "http://i.imgur.com/KgHzzou.jpg", "http://i.imgur.com/UuffUTi.gif", "http://i.imgur.com/bfbPJ.gif"],
               "nosense": ["http://3.bp.blogspot.com/-Rslwp4shyZA/UO3BiSD-yAI/AAAAAAAAFUg/3c6ICuWHMBk/s1600/any-sense.gif"],
               "ok": ["http://i.imgur.com/UPAy1Sx.gif", "http://i.imgur.com/01tWLHU.gif", "http://i.imgur.com/8iPzLzB.gif"],
               "notouching": ["http://i.imgur.com/evoke32.gif"],
               "respect": ["http://stream1.gifsoup.com/view6/4516657/ali-g-respect-o.gif", "http://i.imgur.com/Yr7Iu6W.gif", "http://www.reactiongifs.com/wp-content/uploads/2013/04/tip-hat.gif"],
               "toetap": ["http://old.kinotopic.com/system/paperclip/kinos/pics/4f37/fd0c/a531/8067/be00/07e7/original/4f37fd0ca5318067be0007e7.gif"],
               "zzz": ["http://i.imgur.com/aybLv6O.gif", "http://i.minus.com/ibiMzSDfDIX93N.gif", "http://i.imgur.com/QbmAlaS.gif"],
               "visitors": ["http://i.imgur.com/p1CtCxB.gif"],
               "whistle": ["http://iambrony.steeph.tp-radio.de/mlp/gif/236072283826942558017132.gif?1320343740"],
               "excuseme": ["http://i.imgur.com/gZtaLFU.gif"],
               "boss": ["http://i.imgur.com/Db1efGh.gif", "http://i.imgur.com/jk3IIhd.gif"],
               "whatever": ["http://i.imgur.com/vonId5p.gif"],
               "hump": ["http://i.imgur.com/ie4y54B.gif", "http://i.imgur.com/MRaTNgt.gif"],
               "sad": ["http://i.imgur.com/5H30L.gif", "http://i.imgur.com/u3gXqFK.gif", "http://i.imgur.com/L29ZGpS.gif", "http://i.imgur.com/0SYlrP8.gif", "http://www.reactiongifs.com/wp-content/uploads/2013/06/damn.gif", "http://i.imgur.com/LSjBC8g.gif", "http://i.imgur.com/RIT7W6L.gif"],
               "walkout": ["http://i.imgur.com/URskme9.gif"],
               "nailedit": ["http://24.media.tumblr.com/tumblr_ltyxleXdPN1qi3lo9o1_250.gif"],
               "tableflip": ["http://media.tumblr.com/tumblr_lrsnzdBKye1qafrh6.gif", "http://stream1.gifsoup.com/view3/2971540/john-goodman-table-flip-o.gif", "http://media.tumblr.com/tumblr_m1bq3jJAk51qk7vwoo1_250.gif", "http://1.bp.blogspot.com/-Izeif0lNg9E/UQeyjVT4HoI/AAAAAAAAIUg/COJB8JvQftg/s1600/table-flip.gif", "http://media.tumblr.com/tumblr_m0uqoxTlt51qjrxbg.gif", "http://stream1.gifsoup.com/view3/1546001/table-flip-andy-samberg-o.gif"],
               "droppants": ["http://www.reactiongifs.com/wp-content/uploads/2013/02/oops-pants-off.gif"],
               "humpday": ["http://i.imgur.com/tA5sRGw.gif"],
               "facemelt": ["http://www.threadbombing.com/data/media/2/face_melt.gif"],
               "fbomb": ["http://d24w6bsrhbeh9d.cloudfront.net/photo/aRQQNn5_460sa.gif"],
               "earmuffs": ["http://i11.photobucket.com/albums/a191/play_pretendx3/Icons/Movies/Old%20School/Earmuffs.gif", "http://gifninja.com/animatedgifs/27761/earmuffs.gif", "http://i.imgur.com/8uqZEQG.gif"],
               "ghostrideit": ["http://i.imgur.com/s4JfS.gif"],
               "bustrocks": ["http://memeguy.com/photos/images/mrw-i-hear-news-about-the-it-crowd-special-episode-11406.gif"],
               "hurryup": ["http://i.imgur.com/HZoF9Zy.gif"],
               "stop": ["http://i.minus.com/iBw3emo42EJUf.gif"],
               "shame": ["http://i.imgur.com/1RpvQNn.gif"],
               "fif": ["http://i.imgur.com/4IGimVn.gif"],
               "shrug": ["http://i.imgur.com/2fLh8GC.gif", "http://i.imgur.com/OtwsFOy.gif", "http://i.imgur.com/ZIbK22X.gif"],
               "slap": ["http://i.imgur.com/cXMtsOU.gif", "http://i.imgur.com/iQBhix2.gif"],
	             "besties": ["http://25.media.tumblr.com/tumblr_lydc960FH01qahroko1_250.gif"],
               "moobs": ["http://i.imgur.com/bAx1t8q.gif"],
               "srs": ["http://i.imgur.com/4UrmaA7.gif"]
            },
    callback: function (pUser, pText) {
          if(pText == "options")
          {
            var options = "";
            
            for (var name in this.reactions)
            {
              if (this.reactions.hasOwnProperty(name))
              {
                options += name + ", ";
              }
            }
            
            mBot.speak(options)
              
          }
          if(this.reactions[pText])
          {
            mBot.speak(mRandomItem(this.reactions[pText]));
          }
    },
    requires: Requires.User,
    hint: "Rip will spew a reaction gif",
    hidden: false,
    pm: true,
    bare: true
    
}, 
{
    command: ['banana', 'bananas'],
    messages: ['http://24.media.tumblr.com/tumblr_m94xhcdABe1qlcs90o1_400.gif', 'http://25.media.tumblr.com/tumblr_m4in9srVNS1rwcc6bo1_400.gif'],
    callback: function (pUser, pText) {
       mBot.speak(mRandomItem(this.messages));
    },
    requires: Requires.User,
    hint: "Someone needs an adult.",
    pm: true,
    bare: true,
    hidden: true
},
{
    command: 'bootaftersong',
    callback: function (pUser, pText) {
        if(pUser.isDJ) {
            pUser.bootAfterSong = true;
            pUser.PM(mPMWillBootOffDeck, SpeakingLevel.Misc);
        } else pUser.PM(mNotDJ, SpeakingLevel.Misc);
    },
    requires: Requires.User,
    hint: "Removes the user from the deck after their song is over."
}, 
{
    command: 'vip',
    callback: function (pUser, pText) {        
        if(!pText) return;
        var sSplit = pText.split(' ');
        var sVar = sSplit.shift();
        var sVal = sSplit.join(' ');
        if (sVar == 'add') {
            FindByName(sVal, function (sUser) {
                if(sUser.length != 1) return;
                sUser = sUser[0];
                sUser.isVip = true;
                sUser.Save();
                Speak(sUser, mIsNowVIP, SpeakingLevel.Misc);
            });
        }
        else if (sVar == 'remove'){
            FindByName(sVal, function (sUser) {
                if(sUser.length != 1) return;
                sUser = sUser[0];
                sUser.isVip = false;
                sUser.Save();
                Speak(sUser, mIsNoLongerVIP, SpeakingLevel.Misc);
            });
        }
        else if (sVar == 'list'){
            var sVips = {};
            for(var x in mUsers) {
                var sUser = mUsers[x];
                if (sUser.isVip) sVips[sUser.userid] = sUser.name;
            }

                        if(mMongoDB){
                    mMongoDB.collection(mRoomShortcut).find({'isVip': true}).toArray(function(err, sArray){
                       if(sArray && sArray.length)
                               for(var i = 0; i < sArray.length; ++i){
                                               if(!sVips[sArray[i].userid]) sVips[sArray[i].userid] = sArray[i].name;
                               }
                       console.log(sVips);
                       Speak(pUser, mVIPList, SpeakingLevel.Misc, [['{vip_list}', _.values(sVips).join(', ')]], true);
                    });
           }else Speak(pUser, mVIPList, SpeakingLevel.Misc, [['{vip_list}', _.values(sVips).join(', ')]], true);
        }else if (!sVar){ Speak(pUser, 'Useage: /vip add @[user], /vip remove @[user], /vip list', SpeakingLevel.Misc, null, true); }
    },
    requires: Requires.Moderator,
    hint: "Useage: /vip add @[user], /vip remove @[user], /vip list",
    pm: true
}, 
{
    command: 'vips',
    callback: function (pUser, pText) {
        var sVips = {};
            for(var x in mUsers) {
                var sUser = mUsers[x];
                if (sUser.isVip) sVips[sUser.userid] = sUser.name;
            }

            if(mMongoDB){
                mMongoDB.collection(mRoomShortcut).find({'isVip': true}).toArray(function(err, sArray){
                   if(sArray && sArray.length)
                       for(var i = 0; i < sArray.length; ++i){
                            if(!sVips[sArray[i].userid]) sVips[sArray[i].userid] = sArray[i].name;
                       }
                   console.log(sVips);
                   Speak(pUser, mVIPList, SpeakingLevel.Misc, [['{vip_list}', _.values(sVips).join(', ')]]);
                });
           }else Speak(pUser, mVIPList, SpeakingLevel.Misc, [['{vip_list}', _.values(sVips).join(', ')]]);
    },
    requires: Requires.User,
    hint: 'spits out a list of vips',
    hidden: true
}, 
{
    command: 'setvar',
    callback: function (pUser, pText) {
        if(!pText) return;
        var sSplit = pText.split(' ');
        var sVariable = sSplit.shift();
        var sValue = sSplit.join(' ');
        Log("Setting " + sVariable + " to have the value of " + sValue);
        eval(sVariable + ' = ' + sValue);
    },
    requires: Requires.Owner,
    hint: "Temporarily changes options",
    hidden: true
}, 
{
    command: 'disable',
    callback: function (pUser, pText) {
        eval(pText + " = null");
    },
    requires: Requires.Owner,
    hint: "Used to disable variables.  Handle with care.",
    hidden:true
}, 
{
    command: 'turn',
    callback: function (pUser, pText) {
        if(!pText) return;
        var sSplit = pText.split(' ');
        var sTxt = sSplit.shift();
        var sArg = sSplit.join(' ');
        var sVal = true;
        var sVar;
        if(sTxt == 'q' || sTxt == 'queue') {
            if (mLottoOn) return Speak(pUser, mNoQueueWithLotto, SpeakingLevel.Misc, null, true);
            sVar = 'mQueueOn';
            mQueueCurrentlyOn = false;
            if(sArg == 'on') mQueueCurrentlyOn = true; } 
        else if(sTxt == 'limit' || sTxt == 'songlimit') { sVar = 'mLimitOn'; }
        else if(sTxt == 'dj') { sVar = 'mBotDJ'; }
        else if(sTxt == 'lonely' || sTxt == 'lonelydj') { sVar = 'mLonelyDJ'; }
        else if(sTxt == 'whitelist') { sVar = 'mWhiteListEnabled'; }
        else if(sTxt == 'warn') { sVar = 'mWarn'; }
        else if(sTxt == 'lotto') {
            if (mQueueCurrentlyOn) return Speak(pUser, mNoLottoWithQueue, SpeakingLevel.Misc, null, true);
            sVar = 'mLottoOn';
        }
        else { return; };
        if (sArg == 'off') sVal = false;
        Speak(pUser, "Turning " + sTxt + ": " + sArg, SpeakingLevel.Misc, null, true);
        eval(sVar + " = " + sVal);
        mParsing['{queue}'] = mQueueOn ? "on" : "off";
        mParsing['{queuecurrentlyon}'] = mQueueCurrentlyOn ? "on" : "off";
        mParsing['{songlimitcurrentlyon}'] = mSongLimitCurrentlyOn ? "on" : "off";
    },
    requires: Requires.Moderator,
    hint: "Used to toggle variables. q, limit, lonelydj, whitelist, warn, dj",
    pm: true
}, 
{
    command: 'set',
    callback: function (pUser, pText) {
        if(!pText) return;
        var sSplit = pText.split(' ');
        var sVariable = sSplit.shift();
        var sValue = sSplit.join(' ');
        var sVar;
        if(sVariable == 'greet' || sVariable == 'greeting'){ sVar = 'mDefaultGreeting'; }
        else if(sVariable == 'theme'){ sVar = 'mTheme'; }
        else if(sVariable == 'help'){ sVar = 'mHelpMsg'; }
        else if(sVariable == 'limit' || sVariable == 'songlimit'){ sVar = 'mMaxSongs'; }
        else if(sVariable == 'wait' || sVariable == 'songwait'){ sVar = 'mWaitSongs'; }
        else if(sVariable == 'afk' || sVariable == 'afklimit'){ sVar = 'mAFK'; }
        else { return; }
        Log("Setting " + sVar + " to have the value of " + sValue);
        Speak(pUser, "Setting " + sVariable + " to " + sValue, SpeakingLevel.Misc, null, true);
        if(isNaN(sValue)) {
            eval(sVar + ' = "' + sValue + '"');
        } else {
            eval(sVar + ' = ' + sValue);
        }
        mCurrentSongLimit = mMaxSongs;
        mParsing['{theme}'] = mTheme;
        mParsing['{songlimit}'] = mCurrentSongLimit;
        mParsing['{afklimit}'] = mParsing['{afk}'] = mAFK;
        mParsing['{songwait}'] = mWaitSongs;
    },
    requires: Requires.Moderator,
    hint: "Temporarily changes options: greet, theme, help, limit, wait, afk",
    pm: true
},
{
    command: 'spin',
    callback: function (pUser, pText) {
        if (!mLottoOn) return Speak(pUser, mNoLotto, SpeakingLevel.Misc, null, true);
        if (!mTimeForSpin) return Speak(pUser, mNotLottoTime, SpeakingLevel.Misc, null, true);
        if (mLottoHolders.indexOf(pUser.userid) != -1) return Speak(pUser, mCantLottoTwice, SpeakingLevel.Misc, null, true);
        mLottoHolders.push(pUser.userid);
        return Speak(pUser, mLottoThanks, SpeakingLevel.Misc, null, true);
    },
    requires: Requires.User,
    hint: 'spin for a chance to DJ next!',
    hidden: true
}, 
{
    command: 'userid',
    callback: function (pUser, pText) {
        if(pText) FindByName(pText, function (sUser) {
            if(sUser && sUser.length) Speak(sUser[0], mTheirUserId, SpeakingLevel.Misc);
        });
        else pUser.PM(mYourUserId, SpeakingLevel.Misc);
    },
    requires: Requires.User,
    hint: "PMs the caller their userid if no args, otherwise speaks the userid of the name of the person in the args."
}, 
{
    command: 'whitelist',
    callback: function (pUser, pText) {
        if(!pText) return Speak(pUser, 'Useage: /whitelist add [user], /whitelist remove [user]', SpeakingLevel.Misc, null, true);
        var sSplit = pText.split(' ');
        var sArg = sSplit.shift();
        var sVal = sSplit.join(' ');
        if(sArg == 'add') {
            if(mUsers[sVal.trim()]) {
                var sUser = mUsers[sVal.trim()];
                sUser.whiteList = true;
                Speak(sUser, mAddedToWhiteList, SpeakingLevel.Misc);
                sUser.Save();
            } else FindByName(sVal, function (sUsers) {
                for(var i = 0; i < sUsers.length; ++i) {
                    var sUser = sUsers[i];
                    sUser.whiteList = true;
                    sUser.Save();
                    Speak(sUser, mAddedToWhiteList, SpeakingLevel.Misc);
                }
            });
        };
        if(sArg == 'remove') {
            if(mUsers[sVal.trim()]) {
                var sUser = mUsers[sVal.trim()];
                sUser.whiteList = false;
                if(sUser.isDJ) sUser.RemoveDJ();
                Speak(sUser, mRemovedFromWhiteList, SpeakingLevel.Misc);
            } else FindByName(sVal, function (pUsers) {
                for(var i = 0; i < pUsers.length; ++i) {
                    var sUser = pUsers[i];
                    sUser.whiteList = false;
                    if(sUser.isDJ) sUser.RemoveDJ();
                    sUser.Save();
                    Speak(sUser, mRemovedFromWhiteList, SpeakingLevel.Misc);
                }
            });
        };
        if(sArg == 'list') {
            var sListed = [];
            for(var x in mUsers) {
                var sUser = mUsers[x];
                if (sUser.whiteList) sListed.push(sUser.name);
            }
            return Speak(pUser, mWhiteListed, SpeakingLevel.Misc, [
                ['{whitelisted}', sListed.join(', ')]
            ]);
        }
    },
    requires: Requires.Moderator,
    hint: "Add/remove a user to the whitelist of DJs temporarily."
}, 
{
    command: 'go',
    callback: function (pUser, pText) {
        if(!pText) return Speak(pUser, 'You must provide a room id.', SpeakingLevel.Misc, null, true);
        if(pText == 'home') return mBot.roomRegister(mRoomId);
        mNoGo = setTimeout(mGoHome, 15000);
        Log('Registering in room ' + pText);
        return mBot.roomRegister(pText);
    },
    requires: Requires.Owner,
    hint: "Moves the bot from room to room"
}, 
{
    command: 'hop',
    callback: function (pUser, pText) {
        if(mLonelyDJ) return Speak(pUser, mLonelyStillOn, SpeakingLevel.Misc, null, true);
        if(!mBotDJ) return Speak(pUser, mBotDJTurnedOff, SpeakingLevel.Misc, null, true);
        if(pText == 'up' && mDJs.indexOf(mUserId) == -1) mBot.addDj();
        if(pText == 'down' && mDJs.indexOf(mUserId) != -1) mBot.remDj(mUserId);
    },
    requires: Requires.Moderator,
    hint: "Makes the bot DJ",
    pm: true,
    hidden: true
}, 
{
    command: 'song',
    callback: function (pUser, pText) {
        if(!pText) return Speak(pUser, this.hint, SpeakingLevel.Misc, null, true);
        if(pText == 'skip' && mCurrentDJ.userid == mUserId) return mBot.stopSong();
        if(!mBotDJ) return Speak(pUser, mBotDJTurnedOff, SpeakingLevel.Misc, null, true);
        if(pText == 'skip' && mCurrentDJ.userid != mUserId) {
            mBot.playlistAll(function (pData) {
                if (pData.list.length == 0) return;
                var i = pData.list.length - 1;
                Speak(pUser, mSongSkip, SpeakingLevel.Misc, [['{skippedsong}', pData.list[0].metadata.song], ['{nextsong}', pData.list[1].metadata.song]], true)
                return mBot.playlistReorder(0, i);
            });
        };
        if(pText =='requeue'){
            mBot.playlistAll(function (pData) {
                if (pData.list.length == 0) return;
                var i = pData.list.length - 1;
                mBot.playlistReorder(i, 0);
                return Speak(pUser, mSongRequeue, SpeakingLevel.Misc, [['{bottomsong}', pData.list[i].metadata.song]], true)
            });
        };
        if(pText == 'shuffle') {
            var sTotal = [];
            mBot.playlistAll(function (pData){
                for(var i = 0; i < pData.list.length; ++i) {
                    sTotal[i] = i;
                }
                var sRand = mShuffle(sTotal);
                for(var i = 0; i < pData.list.length; ++i) {
                    mBot.playlistReorder(i, sRand[i]);
                }
                return Speak(pUser, mSongSuffle, SpeakingLevel.Misc, null, true);
            });
        };
        if(pText == 'add') {
            mBot.playlistAll(function (pData) {
                mBot.playlistAdd(mCurrentSong.songId, pData.list.length);
                return Speak(pUser, mSongAdd, SpeakingLevel.Misc, [['{currentsong}', mCurrentSong.songName]]);
            }); 
        };
        if(pText == 'remove') {
            if(mCurrentDJ.userid != mUserId) return Speak(pUser, mSongRemoveNotDJ, SpeakingLevel.Misc, null, true);
            mBot.playlistAll(function (pData) {
                if(pData.list.length == 0) return;
                var i = pData.list.length - 1;
                mBot.stopSong();
                Speak(pUser, mSongRemove, SpeakingLevel.Misc, [['{lastsong}', pData.list[i].metadata.song]], true);
                return mBot.playlistRemove(i);
            });
        };
        if(pText == 'next') {
            mBot.playlistAll(function (pData) {
                if(pData.list.length == 0) return;
                return Speak(pUser, mSongNext, SpeakingLevel.Misc, [['{next}', pData.list[0].metadata.song], ['{artist}', pData.list[0].metadata.artist]], true)
            });
        };
        if(pText == 'total') {
            mBot.playlistAll(function (pData) {
                if(pData.list.length == 0) return;
                return Speak(pUser, mSongTotal, SpeakingLevel.Misc, [['{songtotal}', pData.list.length]], true);
            });
        };
        var sSplit = pText.split(' ');
        var sVar = sSplit.shift();
        var sVal = sSplit.join(' ');
        if(sVar == 'search') {
            if(!sVal) return;
            var sResults = [];
            mBot.playlistAll(function (pData) {
                for(var i = 0; i < pData.list.length; ++i){
                    var sSearch = sVal.toLowerCase();
                    var sSong = pData.list[i].metadata.song.toLowerCase();
                    var sArtist = pData.list[i].metadata.artist.toLowerCase();
                    if ((sSong.indexOf(sSearch) != -1) || (sArtist.indexOf(sSearch) != -1)) sResults.push(i + ": " + sSong + " by " + sArtist);
                }
            });
            if(sResults.length < 1) return Speak(pUser, mSongSearchEmpty, SpeakingLevel.Misc, [['{query}', sVal]], true);
            if(sResults.length > 5) Speak(pUser, mSongSearchLong, SpeakingLevel.Misc, [['{numsongs}', sResults.length]], true);
            for(var i = 0; i < 4; ++i){
                Speak(pUser, sResults[i], SpeakingLevel.Misc, null, true);
            };
        }

    },
    requires: Requires.User,
    hint: "song skip (skips song), song add (adds current song to queue), song remove (removes last played song from queue), song next (lists next song), song total (total songs in queue).",
    pm: true,
    hidden: true
}, 
{
    command: 'refresh',
    callback: function (pUser, pText) {
        if(!pUser.isDJ) {
            pUser.PM(mNotDJ, SpeakingLevel.Misc);
            return;
        }
        if(!pUser.allowedToReserveSpot) return;
        var sTime = Date.now();
        var sHold = {
            userid: pUser.userid,
            time: sTime
        };
        var sIndex = mReservedSpots.push(sHold) - 1;

        setTimeout(function () {
            sIndex = mReservedSpots.indexOf(sHold);
            if(sIndex != -1) mReservedSpots.splice(sIndex, 1);
            if(mQueueCurrentlyOn && mReservedSpots.length < 1) QueueAdvance();
        }, mHoldSpotForRefreshTime * 1000);
        pUser.PM(mReadyRefresh, SpeakingLevel.Misc);
        pUser.RemoveDJ();
    },
    requires: Requires.User,
    hint: "Lets the user refresh and the bot will hold their spot for " + mHoldSpotForRefreshTime + " minutes."
}, 
{
    command: 'status',
    callback: function (pUser, pText) {
        var sLimit = mLimitOn;
        if (mLimitOn) sLimit = mMaxSongs;
        Speak(pUser, 'Theme: ' + mTheme + ', AFK Limit: ' + mAFK + ', Song Limit: ' + sLimit + ', Song Wait: ' + mWaitSongs + ', Queue: ' + mQueueOn + ', LonelyDJ: ' + mLonelyDJ + '.', SpeakingLevel.Misc, null, true);
    },
    requires: Requires.User,
    hint: "Shows the bot status.",
    pm: true
},
{
    command: 'mytwitter',
    callback: function(pUser, pText) {
        var sVal = "";
        if(pText)
        {
          sVal = pText;
        }
        if(sVal != "")
        {
          pUser.twitterHandle = sVal;
          pUser.Save();
          Speak(pUser, "{username}, your twitter handle has been set to: {twithandle}", SpeakingLevel.Misc, [['{twithandle}', sVal]]);
        }
        else
        {
          pUser.twitterHandle = null;
          pUser.Save();
          Speak(pUser, "{username}, your twitter handle has been set to: {twithandle}", SpeakingLevel.Misc, [['{twithandle}', sVal]]);
        }
    },
    requires: Requires.User,
    hint: "Set a user's twitter handle",
    pm: true,
    bare: true
}, 
{
    command: 'greet',
    callback: function (pUser, pText) {
        if(!pText) return;
        var sSplit = pText.split(' ');
        var sVar = sSplit.shift();
        var sVal = sSplit.join(' ');
        if(mUsers[sVar.trim()]) {
            var sUser = mUsers[sVar.trim()];
            sUser.customGreeting = sVal;
/*            if(pUser.userid != '4e225d714fe7d01dbc00ae50' &&
                pUser.userid != '4e4d05b1a3f7510459174bc5' &&
                pUser.userid !='4e0ce113a3f751466f1591ad')
            {*/
              Speak(sUser, mGreetChange, SpeakingLevel.Misc, [['{greeting}', sVal]]);
/*            }*/
            sUser.Save();
        } else FindByName(sVar, function (sUsers) {
            for(var i = 0; i < sUsers.length; ++i) {
                var sUser = sUsers[i];
                sUser.customGreeting = sVal;
                sUser.Save();
/*                if(pUser.userid != '4e225d714fe7d01dbc00ae50' &&
                    pUser.userid != '4e4d05b1a3f7510459174bc5' &&
                    pUser.userid !='4e0ce113a3f751466f1591ad')
                {*/
                  Speak(sUser, mGreetChange, SpeakingLevel.Misc, [['{greeting}', sVal]]);
/*                }*/
            }
        });
    }, 
    requires: Requires.Moderator,
    hint: "Set a custom greeting for a user",
    pm: true
},
{
    command: 'djgreet',
    callback: function (pUser, pText) {
        if(!pText) return;
        var sSplit = pText.split(' ');
        var sVar = sSplit.shift();
        var sVal = sSplit.join(' ');
        if(mUsers[sVar.trim()]) {
            var sUser = mUsers[sVar.trim()];
            sUser.customDJGreeting = sVal;
            if(pUser.userid != '4e225d714fe7d01dbc00ae50' &&
                pUser.userid != '4e4d05b1a3f7510459174bc5' &&
                pUser.userid !='4e0ce113a3f751466f1591ad')
            {
              Speak(sUser, mGreetDJChange, SpeakingLevel.Misc, [['{djgreeting}', sVal]]);
            }
            sUser.Save();
        } else FindByName(sVar, function (sUsers) {
            for(var i = 0; i < sUsers.length; ++i) {
                var sUser = sUsers[i];
                sUser.customDJGreeting = sVal;
                sUser.Save();
                if(pUser.userid != '4e225d714fe7d01dbc00ae50' &&
                  pUser.userid != '4e4d05b1a3f7510459174bc5' &&
                  pUser.userid !='4e0ce113a3f751466f1591ad')
                {
                
                  Speak(sUser, mGreetDJChange, SpeakingLevel.Misc, [['{djgreeting}', sVal]]);
                }
            }
        });
    }, 
    requires: Requires.Moderator,
    hint: "Set a custom DJ greeting for a user",
    pm: true
},
{
    command: 'tweet',
    callback: function (pUser, pText) {
        if (!mTwitOn) return;
        var sAge = Date.now() - mLastTweeted;
        var sAge_Minutes = sAge / 60000;
        var sUser = mUsers[mCurrentDJ.userid];
        //Only limit non-owners.
        if(!(Requires.Owner.check(pUser)))
        {
          if(sAge_Minutes < mTwitTimeout) return Speak(pUser, mTweetSpam, SpeakingLevel.Misc, [['{twitime}', mTwitTimeout]], true);
        } 
        if (!pText) {
            if (!mCurrentDJ) return;
            var sTweet = mDefaultTweet.replace(/\{currentdj\}/gi, mCurrentDJ.name).replace(/\{song\}/gi, mCurrentSong.songName).replace(/\{artist\}/gi, mCurrentSong.songArtist);

            var sArtistTwitter = mArtistTwitters[mCurrentSong.songArtist];
            if(sArtistTwitter != undefined && 
                sArtistTwitter != null)
            {
              if((sTweet.length + 1 + sArtistTwitter.handle.length) <= 140)
              {
                sTweet += " " + sArtistTwitter.handle;
              }
            }
            if(sUser.twitterHandle != undefined &&
                sUser.twitterHandle != null)
            {
              if(sUser.twitterHandle != "" &&
                sUser.twitterHandle.indexOf("@") == 0)
              {
                if((sTweet.lenth + 1 + sUser.twitterHandle.length) <= 140)
                {
                  sTweet += " " + sUser.twitterHandle;
                }
              }
            }
            Log("About to tweet: " + sTweet);
            mTwitter.post('statuses/update', {
             status: sTweet 
            }, function(err, reply) {Log(err);Log(reply);});
            mLastTweeted = Date.now();
            return Speak(pUser, mConfirmTweet, SpeakingLevel.Misc);
        }
        else {
            var sTweet = pText.replace(/\{currentdj\}/gi, mCurrentDJ.name).replace(/\{song\}/gi, mCurrentSong.songName).replace(/\{artist\}/gi, mCurrentSong.songArtist);

            var sArtistTwitter = mArtistTwitters[mCurrentSong.songArtist];
            if(sArtistTwitter != undefined && 
                sArtistTwitter != null)
            {
              if((sTweet.length + 1 + sArtistTwitter.handle.length) <= 140)
              {
                sTweet += " " + sArtistTwitter.handle;
              }
            }
            if(sUser.twitterHandle != undefined &&
                sUser.twitterHandle != null)
            {
              if(sUser.twitterHandle != "" &&
                sUser.twitterHandle.indexOf("@") == 0)
              {
                if((sTweet.lenth + 1 + sUser.twitterHandle.length) <= 140)
                {
                  sTweet += " " + sUser.twitterHandle;
                }
              }
            }
            
            var sLen = sTweet.length;
            if (sLen > 140) {
                return Speak(pUser, mTweetLimit, SpeakingLevel.Misc,[['{charlimit}', 140 - sLen]], true);
            }
            Log("About to tweet: " + sTweet);
            mTwitter.post('statuses/update', {
             status: sTweet 
            }, function(err, reply) {Log(err);Log(reply);});
            mLastTweeted = Date.now();
            return Speak(pUser, mConfirmTweet, SpeakingLevel.Misc);
        }
    },
    requires: mModTwit ? Requires.Moderator : Requires.Owner,
    hint: "'/tweet' tweets now playing, and '/tweet msg' will tweet 'msg'",
    pm: true,
    hidden: true
},
{
    command: 'lookup',
    callback: function(pUser, pText) {
        if (!mUseLastfm) return Speak(pUser, mNoLastfm, SpeakingLevel.Misc, null, true);
        if (!pText) return Speak(pUser, mLastfmNoArgs, SpeakingLevel.Misc, null, true);
        if (pText == 'genre') {
            mLastfm.request("track.getInfo", {
                track: mCurrentSong.songName,
                artist: mCurrentSong.songArtist,
                handlers: {
                    success: function(pData) {
                        return Speak(pUser, mLastfmGenre, SpeakingLevel.Misc, [['{lastfmgenre}', pData.track.toptags.tag[0].name]], true);
                    },
                    error: function(pErr) {
                        Log("Lookup Failed: "+ pErr.message);
                        if (mCurrentSong.songGenre) return Speak(pUser, mLastfmGenre, SpeakingLevel.Misc, [['{lastfmgenre}', mCurrentSong.songGenre]], true);
                        return Speak(pUser, mNoInfoLastfm, SpeakingLevel.Misc, null, true);
                    }
                }
            });
        };
        if (pText == 'artist') {
            mLastfm.request("artist.getInfo", {
                artist: mCurrentSong.songArtist,
                handlers: {
                    success: function(pData) {
                        var sBio = mStripTags(pData.artist.bio.summary);
                        Speak(pUser, sBio, SpeakingLevel.Misc, null, true);
                    },
                    error: function(pErr) {
                        Log("Lookup Failed: "+ pErr.message);
                        return Speak(pUser, mNoInfoLastfm, SpeakingLevel.Misc, null, true);
                    }
                }
            });
        };
    },
    requires: Requires.User,
    hint: "Gathers info from lastfm",
    hidden: true,
    pm: true
},
{
    command: 'i',
    callback: function (pUser, pText) {
        if(pUser.totalSongCount < 1) return Speak(pUser, "I don't know you yet, {username}. Stay a while, play some songs.", SpeakingLevel.Misc)
        Speak(pUser, mUserInfo, SpeakingLevel.Misc, [
            ['{heart_count}', pUser.totalHeartCount],
            ['{given_count}', pUser.totalHeartsGiven],
            ['{total_songs}', pUser.totalSongCount],
            ['{heart_percentage}', mRound(pUser.totalHeartCount / pUser.totalSongCount * 100, 2)]
        ])
    },
    requires: Requires.User,
    hint: "All bout you"
}];
