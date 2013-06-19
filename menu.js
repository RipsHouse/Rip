/**
 * @copyright 2012 yayramen && Inumedia.
 * @author yayramen
 * @description This is where all the items on the menu are stored and loaded into runtime from.
 * @note All commands must be entirely lower case.
 */

global.mMenu = [,
    {
      item: 'rum',
      instock: ['Bacardi', 'Captain Jack', 'Stroh\'s', 'Kraken'],
      message: 'Have yourself a shot of ',
      callback: function (pUser, pText) {
        mBot.speak(this.message + mRandomItem(this.instock) + '.');
      }
    },
    {
      item: 'whiskey',
      instock: ['Jack Daniels', 'Gentleman Jack'],
      message: 'Have yourself a shot of ',
      callback: function (pUser, pText) {
        mBot.speak(this.message + mRandomItem(this.instock) + '.');
      }
    },
    {
      item: 'shot',
      instock: ['Buttery Nipple', 'Blowjob', 'Lemon Drop', 'Jäger!', 'Mind Eraser', 'Cement Mixer'],
      message: 'Have yourself a shot of ',
      callback: function (pUser, pText) {
        mBot.speak(pUser.name + ' ' + this.message + mRandomItem(this.instock) + '.');
      }
    },
    {
      item: 'shots',
      callback: function (pUser, pText) {
        try
        {
          var keys = Object.keys(mUsers);
          for(var i = 0; i < keys.length; ++i) {
            if(mUsers[keys[i]].name != undefined)
            {
              HandleMenu(mUsers[keys[i]], "shot");
            }
          }
        }
        catch(err)
        {
          Log(err);
        }
      }
    },
    {
      item: 'tequila',
      instock: ['Jose Cuervo', 'Patron'],
      message: 'Have yourself a shot of ',
      callback: function (pUser, pText) {
        mBot.speak(this.message + mRandomItem(this.instock) + '.');
      }
    },
    {
      item: 'irish coffee',
      message: ['Would you like a potato with that?', 'It\'s never too early to get a little Irish in you.',  'Wakes you up, only to knock you out. Tsk Tsk.'],
      callback: function (pUser, pText) {
        mBot.speak(mRandomItem(this.message));
      }
    },
    {
      item: 'bahama mama',
      message: ['Here\'s your Bahama, Mama.', 'Order a real drink, next time.', 'I made it virgin, you\'re looking a little sketchy'],
      callback: function (pUser, pText) {
        mBot.speak(mRandomItem(this.message));
      }
    },
    {
      item: 'beer',
      instock: ['Fat Tire', 'Sam Adams', 'Upland Wheat', 'Stella Artois', 'Arrogant Bastard', 'Keystone Light', 'Anchor Steam Porter', 'Dirty Helen', 'Tommyknocker', 'Guinness', 'Heineken', 'Dark Lord', 'Newcastle', 'Killian\'s', 'Breckenridge Vanilla Porter', 'Breckenridge Oatmeal Stout', 'Honey Brown' ],
      message: 'Have yourself a nice cold ',
      callback: function (pUser, pText) {
        mBot.speak(this.message + mRandomItem(this.instock) + '.');
      }
    },

];