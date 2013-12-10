var commandPattern = new RegExp("^!");
var mCommands = [
{
    command: 'react',
    reactions: {
               "nod": ["http://www.reactiongifs.com/wp-content/uploads/2012/07/20120607035837_auto.gif"],
               "dropit": ["http://i.imgur.com/NskII.gif", "http://i.imgur.com/zb2CIJl.gif"],
               "dayum": ["http://i.imgur.com/jgKpa.gif"],
               "damn": ["http://1.bp.blogspot.com/-1_EaunLmAko/UX70_sAqeMI/AAAAAAAABxU/Pv54l1y4H0Y/s1600/friday-damn-funny-gif.gif"],
               "thumbsup": ["http://images.wikia.com/mlpfanart/images/a/ab/3879_-_animated_gif_chuck_norris_dodgeball_thumbs_up.gif", "http://i.imgur.com/tLv5P.gif", "http://media.tumblr.com/tumblr_maklwlcPM51qkme8q.gif", "http://i.imgur.com/f9AL9.gif"],
               "notime": ["http://i.imgur.com/GrI0m.gif"],
               "approve": ["http://i.imgur.com/3MiYxin.gif", "http://i.imgur.com/8VI4riF.gif", "http://www.reactiongifs.com/wp-content/uploads/2012/07/20120607035837_auto.gif", "http://i.minus.com/ibcRigzGi5FrMN.gif", "http://www.btnhboard.com/forums/images/smilies/shaqbobble.gif","http://i.imgur.com/JOmnF.gif", "http://i.imgur.com/InigN.gif"],
               "applaud": ["http://static4.fjcdn.com/thumbnails/comments/oh+my+fucking+god+i+love+squirrels+_27bea4110cf088c88d1e60076a43f944.gif", "http://3.bp.blogspot.com/-9Sc92fMhoQo/UB7A8ckF0vI/AAAAAAAACHs/veAK6N65nG0/s320/George-Costanza-clapping.gif"],
               "what": ["http://i.imgur.com/2sIYB.jpg", "http://i.imgur.com/g8KjHsx.gif", "http://i.imgur.com/HHaNSlm.gif", "http://24.media.tumblr.com/35f970af44d470f4897c82904d3b177a/tumblr_mnlg21IvmL1qb4rpho1_400.gif", "http://i.imgur.com/XhWUln5.gif", "http://i.imgur.com/YP7Ly.gif", "http://assets.sbnation.com/assets/2589361/wuhwhat.gif", "http://i.imgur.com/paudOHs.gif", "http://i.imgur.com/Cv5xiAN.gif", "http://i.imgur.com/ZR7KiW7.gif", "http://i.imgur.com/8wlxGkk.gif", "http://img.pandawhale.com/28468-Taylor-swift-lol-gif-bzRK.gif", "http://www.reactiongifs.com/wp-content/gallery/no/tumblr_l7uu95rd1u1qa9913o1_500.gif", "http://i.imgur.com/OvBo4.gif", "http://i.imgur.com/i3ZWA.gif", "http://24.media.tumblr.com/tumblr_mc20p8TuwK1qeo6ejo1_250.gif"],
               "awe": ["http://www.reactiongifs.com/wp-content/uploads/2012/01/NIusM.gif", "http://i.imgur.com/Zr203.gif", "http://i.imgur.com/FCEYI.gif", "http://i.imgur.com/wDf4S.gif"],
               "dance": ["http://i.imgur.com/VbamUu5.gif", "http://www.refinedguy.com/wp-content/uploads/2012/09/aerobics-dance.gif", "http://i.imgur.com/xNYpmYH.gif", "http://i.minus.com/ixURS8hWlcKEd.gif", "http://i.imgur.com/eFixLPn.gif", "http://mdht.files.wordpress.com/2011/04/dora_o_gifsoup-com.gif", "http://i.imgur.com/Tizy6Z9.gif", "http://i.imgur.com/ciTsD.gif", "http://media.tumblr.com/6b7e1331c2fbc7801056bfc6d48ad89f/tumblr_inline_mhdcuie2Fh1rctfjr.gif","http://i.minus.com/iXmWWRt1ZKa8F.gif", "http://i.imgur.com/cxpcA.gif", "http://i.imgur.com/WUO5o.gif", "http://i.imgur.com/R5T79.gif", "http://www.reactiongifs.com/wp-content/gallery/dance-party/lebowski_dance.gif", "http://i.imgur.com/bg0P9.gif", "http://i.imgur.com/c7LTk.gif", "http://i.imgur.com/KW3uF.gif", "http://stream1.gifsoup.com/webroot/animatedgifs4/1197584_o.gif", "http://www.reactiongifs.com/wp-content/uploads/2011/05/brad_pit_dance.gif", "http://25.media.tumblr.com/tumblr_memu1uEGGJ1rabggho1_250.gif"],
               "twss": ["http://assets0.ordienetworks.com/images/GifGuide/michael_scott/1203864_o.gif", "http://media.tumblr.com/tumblr_lok9pcm5Ez1qzhz9h.gif", "http://img.pandawhale.com/post-16031-That-s-What-She-Said-gif-nDt8.gif"],
               "boohoo": ["http://i.imgur.com/iyxzrxa.gif", "http://i.imgur.com/B4VKH.gif", "http://i.imgur.com/gCi60.gif", "http://i.imgur.com/9YBwN.gif", "http://i.imgur.com/u4dJsCh.gif"],
               "rage": ["http://stream1.gifsoup.com/webroot/animatedgifs/762044_o.gif", "http://www.blogcdn.com/www.urlesque.com/media/2010/09/animated-memes-angrybaby-450js092610.gif", "http://i.imgur.com/Bw1OAGw.jpg", "http://i.imgur.com/nV3Nmni.gif", "http://i.imgur.com/9TWp0vS.gif", "http://www.reactiongifs.com/wp-content/uploads/2011/06/amy_angry.gif", "http://i.imgur.com/arA52.gif"],
               "whocares": ["http://i.imgur.com/tPKHX.gif", "http://i.imgur.com/ZXOtzOA.gif", "http://i.imgur.com/flCjg4A.gif"],
               "alright": ["http://i.imgur.com/iPInR.gif"],
               "metal": ["http://gifsoup.com/webroot/animatedgifs/55558_o.gif", "http://i.imgur.com/vO3s8RP.gif", "http://i.imgur.com/q8jC7Ar.gif", "http://i.imgur.com/q8jC7Ar.gif", "http://www.myspacegraphicsandanimations.com/images/beavis-butthead-6-7.gif"],
               "thug": ["http://i.imgur.com/KL4yO.gif", "http://i.imgur.com/idIwK.gif"],
               "no": ["http://i.imgur.com/cM7u6Cx.gif", "http://i.imgur.com/rxLGzil.gif", "http://i.imgur.com/swtvgfm.gif", "http://i.imgur.com/08g9i26.gif","http://i.imgur.com/fGUF3lG.gif", "http://media.tumblr.com/tumblr_m9r8fetJjc1rvttv9.gif", "http://i.imgur.com/TWMPwwc.gif", "http://i.imgur.com/nD6k8xv.gif", "http://i.imgur.com/oPA7eYP.gif", "http://media.tumblr.com/3d04008d4b05a421d877b0852e5b0a0a/tumblr_inline_mk90bbZ1ss1qz4rgp.gif", "http://i.imgur.com/gv7kRft.gif", "http://i.imgflip.com/vvix.gif"],
               "hellno": ["http://i.imgur.com/zLP1yIe.gif"],
               "yes": ["http://i.imgur.com/NPDSB0Q.gif", "http://i.imgur.com/9izVo0I.gif", "http://i.imgur.com/9ZVrQFE.gif", "http://i.imgur.com/FcvZiru.gif", "http://i.imgur.com/WHuTCuf.gif", "http://i.imgur.com/UzwKBUu.gif", "http://i.imgur.com/7Pn4Llc.gif", "http://i.imgur.com/pZaOrFt.gif", "http://i.imgur.com/InigN.gif", "http://i.imgur.com/FcvZiru.gif", "http://i.imgur.com/K4O3lj0.jpg"],
               "gob": ["http://24.media.tumblr.com/tumblr_m0p1yz9SsC1qf0kb5o2_250.gif", "http://gifsoup.com/webroot/animatedgifs/335898_o.gif", "http://betyoucantmakethat.files.wordpress.com/2011/10/ad-animated-gif-arrested-developmen.gif"],
               "random": ["http://www.refinedguy.com/wp-content/uploads/2012/09/3-funny-sports-pictures-wrestling-is-a-serious-legitimate-sport.gif", "http://gifs.gifbin.com/g65099386.gif"],
			         "excited":["http://www.reactiongifs.com/wp-content/uploads/2012/12/Al-bundy-ed-oneill-animated-gif-2.gif","http://www.reactiongifs.com/wp-content/uploads/2013/01/happy-twins.gif", "http://i.imgur.com/wlX2s.gif", "http://i.imgur.com/18f7bdG.gif", "http://i.minus.com/i95Y2hejoCrKN.gif", "http://i.imgur.com/X4JcVPp.gif", "http://www.refinedguy.com/wp-content/uploads/2012/09/4-excited-nets-basketball-fan.gif", "http://i.imgur.com/boUsk.gif"],
			         "fyeah":["http://i.imgur.com/JOmnF.gif", "http://i.imgur.com/OhZOjR8.gif", "http://www.refinedguy.com/wp-content/uploads/2012/09/excited-sports-fan.gif", "http://i.imgur.com/e6HsKIc.gif"],
               "SOAD": ["http://i.imgur.com/fy57mrK.gif", "http://cdn3.sbnation.com/imported_assets/817019/OMFG.gif", "http://i.imgur.com/4JCINXy.gif", "http://www.totalprosports.com/wp-content/uploads/2012/10/will-muschamp-pissed-off-gif.gif", "http://cdn2.mocksession.com/wp-content/uploads/2013/01/MIKE-SMITH-STICK-ABUSE.gif", "http://i.imgur.com/QffmtXk.gif"],
               "celebrate": ["http://i.imgur.com/37WT4dK.gif", "http://i.imgur.com/D9ILaxr.gif", "http://i.imgur.com/oqh5nC0.gif", "http://i.imgur.com/DTUvG.gif", "http://24.media.tumblr.com/tumblr_m8nid7ImjS1r2oa9ko1_500.gif", "http://i.imgur.com/DML290E.gif"],
               "mindblown": ["http://media.tumblr.com/tumblr_m4ptp671l11r1axrq.gif", "http://i.imgur.com/sBIhb.gif"],
               "skrillex": ["http://i.imgur.com/u7aqXT6.gif", "http://i.imgur.com/eswm0yX.gif", "http://i.imgur.com/jfdEEUT.gif", "http://25.media.tumblr.com/tumblr_lrbwvhqeQz1qjxefjo1_500.gif"],
               "grovel": ["http://gifrific.com/wp-content/uploads/2012/06/Waynes-World-Were-not-Worthy.gif"],
               "ohsnap": ["http://media.tumblr.com/tumblr_mbwv2ynIHB1qlgvan.gif", "http://i198.photobucket.com/albums/aa311/andiluxe/gifspam/ohsnap-2.gif","http://27.media.tumblr.com/tumblr_m3f9q0kwxX1qbr7pro1_400.gif"],
               "scatdance": ["http://i.imgur.com/NtVlY.gif"],
               "topgun": ["http://stream1.gifsoup.com/view3/1750401/top-gun-o.gif", "http://media.heavy.com/media/2013/02/top-gun_o_GIFSoup.com_.gif"],
               "eyeroll": ["http://i.imgur.com/cHr8404.gif", "http://i.imgur.com/BYuURo9.gif", "http://25.media.tumblr.com/730fbd6277f8d8f756200f2e9e832f89/tumblr_mjo3cfDWZZ1qcvkpto2_250.gif", "http://i.imgur.com/SKBQKbg.gif"],
               "whoa": ["http://stream1.gifsoup.com/view5/3964674/whoa-o.gif", "http://i.imgur.com/q7aC81y.gif", "http://stream1.gifsoup.com/view4/1252664/whoa-o.gif"],
               "awwyeah": ["http://i.imgur.com/If2YeXZ.gif"],
               "facepalm": ["http://i.imgur.com/gYgBktE.gif", "http://i.imgur.com/X23mytA.gif", "http://24.media.tumblr.com/tumblr_m6pid35QyH1rqfhi2o1_400.gif", "http://i.imgur.com/nDPJW.gif"],
               "highfive": ["http://i.imgur.com/QIR2ECm.gif", "http://cdn.uproxx.com/wp-content/uploads/2013/01/lemon-selffive.gif", "http://25.media.tumblr.com/tumblr_m7k7akJvex1rwcc6bo1_500.gif", "http://media.tumblr.com/tumblr_m96ohz4Drz1rrmo7v.gif"],
               "seeya": ["http://i.imgur.com/6eKvOJQ.gif", "http://i.imgur.com/ygVKO.gif", "http://i.imgur.com/ULk8d.gif", "http://24.media.tumblr.com/135a1cde345a2c1a90c353ab122943bd/tumblr_mh5f51bJXq1r3ty02o1_500.gif"],
               "fixit": ["http://i.imgur.com/K2ETy.gif", "http://i.imgur.com/oMBasdV.gif"],
               "badcall": ["http://i.imgur.com/O3PbK.gif"],
               "hug": ["http://www.reactiongifs.com/wp-content/uploads/2012/12/virtual_hug.gif"],
               "yw": ["http://i.imgur.com/cxvmW61.gif", "http://i.imgur.com/K4iMPnx.gif"],
               "chill": ["http://i.minus.com/itXjZFNxW68ta.gif"],
               "gottime": ["http://i.imgur.com/CfNS0uY.gif"],
               "smarty": ["http://i.imgur.com/afsjhmO.gif"],
               "myjam": ["http://i.imgur.com/DShdrkA.gif", "http://i.imgur.com/ZKnoyZC.gif", "http://i.imgur.com/UjQBAb3.gif", "http://i.imgur.com/V64zd.gif", "http://i.minus.com/iwFvONTqM1lW1.gif", "http://mrwgifs.com/wp-content/uploads/2013/04/Thats-So-Raven-Thats-My-Jam-Gif.gif"],
               "shocked": ["http://i.imgur.com/tgp8gnO.gif", "http://www.reactiongifs.com/wp-content/gallery/wtf/what-Alison-Brie-.gif", "http://i.imgur.com/oGdHwNa.gif", "http://i.imgur.com/sAg6KVS.gif", "http://i.imgur.com/2qSjrW3.gif", "http://i.imgur.com/7mjH4Ns.gif", "http://i.imgur.com/6ogeF96.gif", "http://bkhemphill.files.wordpress.com/2013/01/tumblr_mglimdbcdo1qiavcao1_500.gif", "http://images.wikia.com/smuff/images/b/b1/I_don%27t_know_what_I_expected.gif"],
               "micdrop": ["http://i.imgur.com/ih9LX4I.gif"],
               "false": ["http://i.imgur.com/v6k7yWj.gif", "http://i.imgur.com/KgHzzou.jpg", "http://i.imgur.com/UuffUTi.gif", "http://i.imgur.com/bfbPJ.gif"],
               "nosense": ["http://3.bp.blogspot.com/-Rslwp4shyZA/UO3BiSD-yAI/AAAAAAAAFUg/3c6ICuWHMBk/s1600/any-sense.gif"],
               "ok": ["http://i.imgur.com/UPAy1Sx.gif", "http://i.imgur.com/01tWLHU.gif", "http://i.imgur.com/8iPzLzB.gif"],
               "notouching": ["http://i.imgur.com/evoke32.gif"],
               "respect": ["http://stream1.gifsoup.com/view6/4516657/ali-g-respect-o.gif", "http://i.imgur.com/Yr7Iu6W.gif", "http://www.reactiongifs.com/wp-content/uploads/2013/04/tip-hat.gif"],
               "toetap": ["http://old.kinotopic.com/system/paperclip/kinos/pics/4f37/fd0c/a531/8067/be00/07e7/original/4f37fd0ca5318067be0007e7.gif"],
               "zzz": ["http://i.imgur.com/aybLv6O.gif", "http://i.minus.com/ibiMzSDfDIX93N.gif", "http://i.imgur.com/QbmAlaS.gif"],
               "visitors": ["http://i.imgur.com/p1CtCxB.gif"],
               "whistle": ["http://iambrony.steeph.tp-radio.de/mlp/gif/236072283826942558017132.gif"],
               "excuseme": ["http://i.imgur.com/gZtaLFU.gif"],
               "boss": ["http://i.imgur.com/Db1efGh.gif", "http://i.imgur.com/jk3IIhd.gif"],
               "whatever": ["http://i.imgur.com/vonId5p.gif"],
               "hump": ["http://i.imgur.com/ie4y54B.gif", "http://i.imgur.com/MRaTNgt.gif", "http://i.imgur.com/xa3XQ.gif", "http://images2.wikia.nocookie.net/__cb20130220140919/lookout/images/1/14/Stormtrooper-hump.gif"],
               "sad": ["http://i.imgur.com/5H30L.gif", "http://i.imgur.com/u3gXqFK.gif", "http://i.imgur.com/L29ZGpS.gif", "http://i.imgur.com/0SYlrP8.gif", "http://www.reactiongifs.com/wp-content/uploads/2013/06/damn.gif", "http://i.imgur.com/LSjBC8g.gif", "http://i.imgur.com/RIT7W6L.gif"],
               "walkout": ["http://i.imgur.com/URskme9.gif"],
               "nailedit": ["http://24.media.tumblr.com/tumblr_ltyxleXdPN1qi3lo9o1_250.gif"],
               "tableflip": ["http://media.tumblr.com/tumblr_lrsnzdBKye1qafrh6.gif", "http://stream1.gifsoup.com/view3/2971540/john-goodman-table-flip-o.gif", "http://media.tumblr.com/tumblr_m1bq3jJAk51qk7vwoo1_250.gif", "http://1.bp.blogspot.com/-Izeif0lNg9E/UQeyjVT4HoI/AAAAAAAAIUg/COJB8JvQftg/s1600/table-flip.gif", "http://media.tumblr.com/tumblr_m0uqoxTlt51qjrxbg.gif", "http://stream1.gifsoup.com/view3/1546001/table-flip-andy-samberg-o.gif"],
               "droppants": ["http://www.reactiongifs.com/wp-content/uploads/2013/02/oops-pants-off.gif", "http://i.imgur.com/BKImQ4G.gif"],
               "humpday": ["http://i.imgur.com/tA5sRGw.gif"],
               "facemelt": ["http://www.threadbombing.com/data/media/2/face_melt.gif", "http://www.newyorker.com/online/blogs/photobooth/Gif-1.gif", "http://24.media.tumblr.com/538e66e14b6cdd10075e3999a8cbed50/tumblr_mlo5pgOKlR1sonquko1_500.gif"],
               "fbomb": ["http://d24w6bsrhbeh9d.cloudfront.net/photo/aRQQNn5_460sa.gif"],
               "earmuffs": ["http://i11.photobucket.com/albums/a191/play_pretendx3/Icons/Movies/Old%20School/Earmuffs.gif", "http://gifninja.com/animatedgifs/27761/earmuffs.gif", "http://i.imgur.com/8uqZEQG.gif"],
               "ghostrideit": ["http://i.imgur.com/s4JfS.gif"],
               "bustrocks": ["http://memeguy.com/photos/images/mrw-i-hear-news-about-the-it-crowd-special-episode-11406.gif", "http://img.gawkerassets.com/img/18eh0jgv8g2btgif/k-bigpic.gif"],
               "hurryup": ["http://i.imgur.com/HZoF9Zy.gif"],
               "stop": ["http://i.minus.com/iBw3emo42EJUf.gif"],
               "shame": ["http://i.imgur.com/1RpvQNn.gif"],
               "fif": ["http://i.imgur.com/4IGimVn.gif"],
               "shrug": ["http://i.imgur.com/2fLh8GC.gif", "http://i.imgur.com/OtwsFOy.gif", "http://i.imgur.com/ZIbK22X.gif"],
               "slap": ["http://i.imgur.com/cXMtsOU.gif", "http://i.imgur.com/iQBhix2.gif"],
	             "besties": ["http://25.media.tumblr.com/tumblr_lydc960FH01qahroko1_250.gif"],
               "moobs": ["http://i.imgur.com/bAx1t8q.gif", "http://i.imgur.com/nAu7hqW.gif"],
               "srs": ["http://i.imgur.com/4UrmaA7.gif"],
               "jazzhands": ["http://blog.vh1.com/files//2010/03/cfc7_7_gif2.gif", "http://25.media.tumblr.com/873d3df9efd69f691f729885e80a17f7/tumblr_mgfk42E5UJ1rnp15wo1_500.gif"],
               "hello": ["http://25.media.tumblr.com/15149c18be680e99488a339f558f0a6c/tumblr_mlxctlvONq1r24cu4o1_500.gif", "http://img.pandawhale.com/56199-Doctor-Who-9-hello-gif-ydYK.gif", "http://25.media.tumblr.com/tumblr_lx6tvdmTut1r9x0sdo1_250.gif", "http://24.media.tumblr.com/tumblr_lmujte6CDa1qb3ykio1_500.gif", "http://i.imgur.com/hUbmy1c.gif"],
               "fail": ["http://i.imgur.com/GRyt0Yd.gif", "http://i.imgur.com/Q1kNrEP.gif", "http://i.minus.com/iEMuBCXWfaMqO.gif"],
               "boater": ["http://i.imgur.com/hUbmy1c.gif"],
               "lunchtime": ["http://i.imgur.com/bDF1D.gif"],
               "ty": ["http://31.media.tumblr.com/tumblr_m9cieqn4MI1rd2qw6o1_400.gif", "http://media0.giphy.com/media/FihMsmKxNdStq/original.gif", "http://24.media.tumblr.com/tumblr_m3hsuo8YFO1r1stu1o1_500.gif"],
               "boneralert": ["http://i.imgur.com/s6YgpFJ.gif"],
               "fluffy": ["http://i.imgur.com/9muaXOh.gif", "http://24.media.tumblr.com/tumblr_m7kd46kDWi1rz8a6do1_500.gif", "http://media.tumblr.com/tumblr_ma64c2Zy4z1ru3wvh.gif"]
            },
    callback: function (pUser, pText) {
          /*if(pText == "options")
          {
            var options = "";
            
            for (var name in this.reactions)
            {
              if (this.reactions.hasOwnProperty(name))
              {
                options += name + ", ";
              }
            }
            
            try
            {
              pUser.PM(options, SpeakingLevel.Misc);
            }
            catch(err)
            {
            mBot.speak(options)
            }
              
          }*/
          if(this.reactions[pText])
          {
            //mBot.speak(mRandomItem(this.reactions[pText]));
            API.sendChat(mRandomItem(this.reactions[pText])) ;
          }
    },
    bare: true
}];
var mBareCommands = mCommands.filter(function(e){ return e.bare == true; });

handleCommand = function (pUser, pText) {
    if(pUser.id != API.getUser().id) return;

    var sMatch = commandPattern.test(pText);
    if(!sMatch && mBareCommands.indexOf(pText) === -1) return;
    
    var sSplit = pText.split(' ');
    var sCommand = sSplit.shift().replace(/^[!\*\/]/, "").replace(" -c", "").toLowerCase();   
    pText = sSplit.join(' ').replace(" -c", "");
    var sCommands = mCommands.filter(function (pCommand) {
        return(pCommand.command && pCommand.command == sCommand) || (typeof (pCommand.command) == "object" && pCommand.command.length && pCommand.command.indexOf(sCommand) != -1);
    });
    sCommands.forEach(function (pCommand) {
            pCommand.callback(pUser, pText);
    });
};

mRandomItem = function (list) {
      return list[Math.floor(Math.random() * list.length)];
};

API.on(API.CHAT, function(data) {
  handleCommand(API.getUser(data.fromID), data.message)
});
