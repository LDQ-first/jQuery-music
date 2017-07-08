var getMusic = (function() {

    var songArr = [];
    var songIdx = -1;
    var n = 5;
    var num = 0;


    function channel() {

        $.ajax({
            url: 'http://api.jirengu.com/fm/getChannels.php',
            dataType: 'jsonp',
            Method: 'get',
            success: function(ret) {
                var channels = ret.channels;

                var num = Math.floor(Math.random() * channels.length);
                var channelName = channels[num].name;
                var channelId = channels[num].channel_id;
                var songChannel = {};

                $('.channel').attr('data-id', channelId);
                songChannel.id = channelId;
                songChannel.name = channelName;
                renderChannel(channels, songChannel);

                song(songChannel);
            },
            error: function() {
                console.log('获取频道失败！');
            }
        })
    }

    function renderChannel(channels, songChannel) {
        var li = '';
        channels.forEach(function(node, i) {
            li += '<li class="channel-li" channel-id="' + node.channel_id + '">' + node.name + '</li>';
        });

        $('.channel-ct').empty().append(li);
        activeChannel(songChannel);
        $('.channel-li').on('click', function() {
            num = 0;
            var _this = this;
            localStorage.setItem('autoPlay', false);
            var def = $.Deferred();
            var wait = function(def) {
                for (var i = 0; i < n; i++) {
                    changeChannel($(_this).attr('channel-id'), $(_this).text(), def);
                }
                return def;
            }
            $.when(wait(def))
                .done(function() {
                    changeAutoPlay();
                    songIdx = songArr.length - n;
                    resetSong();
                })
                .fail(function() {
                    console.log('失败了');
                })
        });
    }

    function activeChannel(songChannel) {
        [].slice.call($('.channel-li')).forEach(function(li, i) {
            $(li).removeClass('active');
            if ($(li).attr('channel-id') === songChannel.id) {
                $(li).addClass('active');
            }
        })
    }

    function changeChannel(id, name, def) {
        var songChannel = {};
        songChannel.id = id;
        songChannel.name = name;
        song(songChannel, def);
    }


    function renderSong() {
        var li = '';
        songArr.forEach(function(node, i) {
            var songs = node.song[0];
            var title = songs.title;
            var artist = songs.artist;
            var songTime = $('.song-time').eq(i).attr('song-time') ? $('.song-time').eq(i).attr('song-time') : '  ';
            li += '<li class="song-li clearfix" data-idx="' + i + '">' + '<span class="clearSong" title="删除歌曲"></span>' + '<span class="song-title" title="' + title + '">' + title + '</span>' + '<span class="song-artist" title="' + artist + '">' + artist + '</span>' +
                '<span class="song-time" song-time="' + songTime + '">' + songTime + '</span>' + '</li>';
        });
        $('.song-ct').empty().append(li);
        activeSong();

        $('.song-li').on('click', function() {
            songIdx = parseInt($(this).attr('data-idx'));
            resetSong();
        });
        $('.clearSong').on('click', function() {
            if ($(this).parent().attr('data-idx') != 0) {
                if ($(this).parent().attr('data-idx') == songIdx) {
                    if (songIdx + 1 == songArr.length) {
                        songIdx--;
                    }
                    resetSong();
                } else if ($(this).parent().attr('data-idx') < songIdx) {
                    songIdx--;
                }
                songArr.splice($(this).parent().attr('data-idx'), 1);
                renderSong();
                renderSongMenu();
            } else if ($(this).parent().attr('data-idx') == 0 && songIdx != 0) {
                songIdx--;
                songArr.splice($(this).parent().attr('data-idx'), 1);
                renderSong();
                renderSongMenu();
            } else if (songIdx == 0) {
                clearAllSong();
                channel();
                return;
            }
        });
    }

    function activeSong() {
        [].slice.call($('.song-li')).forEach(function(li, i) {
            $(li).removeClass('active');
            if ($(li).attr('data-idx') == songIdx) {
                $(li).addClass('active');
            }
        })
    }

    function noLoop() {
        console.log('noLoop');
        $('#music')[0].loop = false;
    }

    function listLoop() {
        console.log('listLoop');
        $('#music')[0].loop = false;
        if (songIdx === songArr.length - 1) {
            songIdx = 0;
        } else if (songIdx === 0) {
            songIdx = songArr.length - 1;
        }
    }

    function singleLoop() {
        console.log('singleLoop');
        $('#music')[0].loop = true;
    }

    function randomLoop() {
        console.log('randomLoop');
        $('#music')[0].loop = false;
        songIdx = Math.floor(Math.random() * (songArr.length - 1));
    }

    function mulitLoop($this) {
        var loopState = $('.loop').attr('data-state');
        switch (loopState) {
            case 'noLoop':
                $this.attr('data-state', 'listLoop');
                $this.attr('title', '列表循环');
                $this.find('use').attr('xlink:href', '#icon-yinpinliebiaoxunhuan');
                break;
            case 'listLoop':
                singleLoop();
                $this.attr('data-state', 'singleLoop');
                $this.attr('title', '单曲循环');
                $this.find('use').attr('xlink:href', '#icon-danquxunhuan');
                break;
            case 'singleLoop':
                randomLoop();
                $this.attr('data-state', 'randomLoop');
                $this.attr('title', '随机播放');
                $this.find('use').attr('xlink:href', '#icon-suijibofang');
                break;
            case 'randomLoop':
                noLoop();
                $this.attr('data-state', 'noLoop');
                $this.attr('title', '顺序播放');
                $this.find('use').attr('xlink:href', '#icon-shunxubofang');
                break;
            default:
                break;
        }
    }


    function pre() {
        if ($('.loop').attr('data-state') === 'randomLoop') {
            randomLoop();
            changeAutoPlay();
            resetSong();
            return;
        }
        if (songIdx <= 0) {
            if ($('.loop').attr('data-state') === 'listLoop') {
                listLoop();
                changeAutoPlay();
                resetSong();
                return;
            }
            return;
        }
        changeAutoPlay();
        songIdx--;
        resetSong();
    }

    function next() {
        if ($('.loop').attr('data-state') === 'randomLoop') {
            randomLoop();
            changeAutoPlay();
            resetSong();
            return;
        }
        if (songArr.length <= songIdx + 1) {
            if ($('.loop').attr('data-state') === 'listLoop') {
                listLoop();
                changeAutoPlay();
                resetSong();
                return;
            }
            changeAutoPlay();
            channel();
            return;
        }
        changeAutoPlay();
        songIdx++;
        resetSong();
    }

    function changeAutoPlay() {
        $('#music')[0].autoPlay = true;
        localStorage.setItem('autoPlay', $('#music')[0].autoPlay);
    }

    function renderSongMenu() {
        $('#song-ct').find('.songNum').text('播放统计 (' + (songIdx + 1) + '/' + songArr.length + ')');
        $('.songs-ct').find('.songNum').text('播放统计 (' + (songIdx + 1) + '/' + songArr.length + ')');

        $('#song-ct').find('.songClearBtn').off('click').on('click', clearAllSong);
        $('.songs-ct').find('.songClearBtn').off('click').on('click', clearAllSong);
    }

    function clearAllSong() {
        songArr.splice(0, songArr.length);
        songIdx = -1;

        $('.song').find('.songNum').text('播放统计 (' + (songIdx + 1) + '/' + songArr.length + ')');
        $('#music').attr('src', '');
        $('#music').attr('sid', '');
        $('.title').text('');
        $('.title').attr('title', '');
        $('.artist').text('');
        $('.artist').attr('title', '');
        $('.lyric').css({
            'background': '',
        });
        $('.disco-img').css({
            'background': '',
        })
        $('#shrink-expand').css({
            'background': '',
        })
        $('.progress').find('.meter').css({
            width: 0,
        });
        $('.progress').find('.meterPoint').css({
            left: 0,
        });
        $('.song-ct').empty();
        $('.lyric-ct').empty();
    }

    function resetSong() {
        console.log('resetSong');
        var songs = songArr[songIdx].song[0];

        var sid = songs.sid;
        var title = songs.title;
        var picture = songs.picture;
        var artist = songs.artist;
        var url = songs.url;

        $('#music').attr('src', url);
        $('#music').attr('sid', sid);
        $('.title').text(title);
        $('.title').attr('title', title);
        $('.artist').text(artist);
        $('.artist').attr('title', artist);
        $('.lyric').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        });
        $('.disco-img').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        })
        $('#shrink-expand').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        })
        $('.musicPlayer').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        })
        $('#control').css({
            'background': 'url(' + picture + ') center no-repeat',
            'background-size': 'cover'
        })

        if (songArr[songIdx].channel) {
            var channel = songArr[songIdx].channel;
            activeChannel(channel);
        }
        activeSong();
        renderSongMenu();
        lyric();
        isAutoPlay();
    }

    function isAutoPlay() {
        if (localStorage.getItem('autoPlay') != 'false') {
            $('#music')[0].play();
        }
    }

    function searchSong() {
        var query = $('#searchSong').val();
        if (query === '') {
            return;
        }
        $.get(
                'http://tingapi.ting.baidu.com/v1/restserver/ting', {
                    method: 'baidu.ting.search.common',
                    query: query,
                    page_size: 1,
                    page_no: 1
                },
                function(ret) {
                    var song = ret.song_list[0];
                    console.log(song);
                    if (!song) {
                        $('.search-ct').addClass('search');
                        $('.SongResult').text('抱歉，找不到！');
                        $('.SongResult').append($('<a href="javascript:;" class="disappear">x</a>'))
                        $('.SongResult').addClass('appear');

                        $('.SongResult').find('.disappear').off('click')
                            .on('click', function() {
                                $('.SongResult').find('.disappear').css({
                                    display: 'none'
                                })
                                $('.SongResult').removeClass('appear');
                                $('.search-ct').removeClass('search');
                            })
                        return;
                    }
                    var artist = song.author.replace(/<[^>]+>/g, '');
                    var title = song.title.replace(/<[^>]+>/g, '');
                    var sid = song.song_id;

                    if (!$('.SongResult').find('.resultTitle').length) {
                        $('.SongResult').empty();
                        $('.SongResult').append('<strong class="resultTitle"></strong>' + '<strong class="resultArtist"></strong>' + '<a href="javascript:;" class="resultPlay">立即播放</a>' + '<a href="javascript:;" class="disappear">X</a>');
                    }

                    $('.search-ct').addClass('search');
                    $('.resultTitle').text('歌曲：' + title);
                    $('.resultTitle').attr('title', title);
                    $('.resultArtist').text('歌手：' + artist);
                    $('.resultArtist').attr('title', artist);
                    $('.SongResult').attr('sid', sid);
                    $('.SongResult').addClass('appear');
                    $('.SongResult').find('.resultPlay').off('click').on('click', function() {
                        if (filter()) {
                            changeAutoPlay();
                            resetSong();
                            return;
                        } else {
                            playSearchSong(sid, title, artist);
                            return;
                        }

                    })
                    $('.SongResult').find('.disappear').off('click').on('click', function() {
                        $('.SongResult').removeClass('appear');
                        $('.search-ct').removeClass('search');
                    })
                },
                "jsonp"
            )
            .fail(function() {
                console.log('获取音乐失败');
            })
    }


    function filter() {
        var isRepeat = false;
        for (var i = 0; i < songArr.length; i++) {
            if ($('.SongResult').attr('sid') == songArr[i].song[0].sid) {
                songIdx = i;
                isRepeat = Boolean('ture');
            }
        }
        return isRepeat;
    }

    function playSearchSong(sid, title, artist) {
        $.ajax({
            url: 'http://music.baidu.com/data/music/links',
            dataType: 'jsonp',
            method: 'get',
            data: {
                songIds: sid
            },
            success: function(ret) {

                var song = ret.data.songList[0];
                var url = song.songLink;
                var picture = song.songPicRadio;

                var songObj = {
                    song: [{
                        sid: sid,
                        title: title,
                        picture: picture,
                        artist: artist,
                        url: url
                    }]
                }

                addSong(songObj);
                changeAutoPlay();
                songIdx = songArr.length - 1;
                resetSong();
                renderSong();

            },
            error: function() {
                console.log('获取音乐失败')
            }
        })
    }

    function addSong(song) {
        songArr.push(song);
        return true;
    }

    function song(songChannel, def) {
        $.ajax({
            url: 'http://api.jirengu.com/fm/getSong.php',
            dataType: 'jsonp',
            method: 'get',
            data: {
                'channel': $('.channel').attr('data-id') ||
                    $('.channel-li').attr('channel-id')
            },
            success: function(ret) {
                ret.channel = songChannel;
                var songs = ret.song[0];
                addSong(ret);


                var sid = songs.sid;
                var title = songs.title;
                var picture = songs.picture;
                var artist = songs.artist;
                var url = songs.url;

                $('#music').attr('src', url);
                $('#music').attr('sid', sid);
                $('.title').text(title);
                $('.title').attr('title', title);
                $('.artist').text(artist);
                $('.artist').attr('title', artist);
                $('.lyric').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                });
                $('.disco-img').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                })
                $('#shrink-expand').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                })
                $('.musicPlayer').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                })
                $('#control').css({
                    'background': 'url(' + picture + ') center no-repeat',
                    'background-size': 'cover'
                })


                songIdx++;
                renderSong();
                renderSongMenu();
                lyric();
                isAutoPlay();
                if (def) {
                    num++;
                    if (num === n) {
                        def.resolve();
                    }
                }
            },
            error: function() {
                console.log('获取音乐失败')
            }
        })
    }

    function lyric() {
        var sid = $('#music').attr('sid');

        $.post('http://api.jirengu.com/fm/getLyric.php', {
                sid: sid
            })
            .done(function(ret) {
                try {
                    var ret = JSON.parse(ret);
                } catch (err) {
                    console.log(err);
                    var lyricArray = '这首歌没歌词 T_T ';
                    renderLyric(lyricArray);
                    return;
                }
                var ly = ret.lyric;
                if (ly.length > 0) {
                    $('.lyric-ct').empty();
                    $('.lyric-ct').css({
                        top: ''
                    })
                    var line = ly.split('\n'); //按回车分成数组
                    var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;
                    var res = [];
                    if (line != '') {
                        $(line).each(function(idx, node) {
                            var time = line[idx].match(timeReg);
                            if (!time) {
                                return;
                            }
                            var lyric = line[idx].replace(timeReg, '');
                            if (lyric === '音乐来自百度FM, by 饥人谷') {
                                return;
                            }
                            if (lyric != '') {
                                $(time).each(function(idx, node) {
                                    var t = time[idx].slice(1, -1).split(':');
                                    //t[0] 分钟  t[1] 秒(精确到毫秒)

                                    /* 。如果 string 以 0 开头，
                                     那么 ECMAScript v3 允许 parseInt() 
                                     的一个实现把其后的字符解析为八进制
                                     或十六进制的数字。*/

                                    /*单位为秒*/
                                    var curTime = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
                                    res.push([curTime, lyric]);
                                })

                            }
                        })
                    }
                    res.sort(function(a, b) {
                        return a[0] - b[0]
                    });

                    var lyricArray = res; //存到lyricArr里面
                    renderLyric(lyricArray); //渲染歌词
                }
            })
            .fail(function() {
                $('.lyric-ct').html('<li>这首歌曲没有歌词</li>')
            })
    }

    function renderLyric(lyricArray) {
        var li = '';
        if (lyricArray instanceof Array) {
            for (var i = 0; i < lyricArray.length; i++) {
                li += '<li data-time="' + lyricArray[i][0] + '">' + lyricArray[i][1] + '</li>';
            }
        } else {
            li += '<li style="margin-top:' + $('.lyric-ct').height() / 2 + 'px;' + ' font-size: 24px; color: rgba(247, 89, 0, 1)">' + lyricArray + '</li>';
        }
        $('.lyric-ct').append(li);
        $('#music').on('timeupdate', function() {
            showLyric(lyricArray);
        })
    }


    function showLyric(lyricArray) {
        console.log('showLyric ');
        $('.lyric-ct').each(function(idx, ul) {
            var $li = $(ul).find('li');
            var liH = $li.outerHeight();

            $(lyricArray).each(function(i, node) {
                var curTime = $li.eq(i).attr('data-time');
                var nextTime = $li.eq(i + 1).attr('data-time');
                var curT = $('#music')[0].currentTime;
                var lyT = $('.lyric').offset().top;
                var lyH = $('.lyric').height();
                var add = 15;
                //当前时间在下一句时间和歌曲当前时间之间的时候 就渲染 并滚动
                if ((curT >= curTime) && (curT <= nextTime)) {

                    $li.removeClass('active');
                    $li.eq(i).addClass('active');
                    $('.lyric-ct').css({
                        top: -liH * (i - 2)
                    });
                }
            })
        })
    }

    return {
        mulitLoop: mulitLoop,
        channel: channel,
        song: song,
        lyric: lyric,
        pre: pre,
        next: next,
        searchSong: searchSong,
        renderSongMenu: renderSongMenu
    }
})()

module.exports = getMusic;
