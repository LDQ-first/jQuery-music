
var iconfont = require('iconfont');
var music = require('../com/music.js');
var getMusic = require('../com/getMusic.js');
var songTab = require('../com/songTab.js');


var sum = function() {
    music.init();
    getMusic.channel();


    renderContent();
    renderSong();


    $('#searchSong').on('keydown', function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            getMusic.searchSong();
        }
    })
    $('.searchSong').on('click', function() {
        getMusic.searchSong();
    })

    $('.play-pause').on('click', function() {
        music.playPause($(this));
    })

    $('.pre').on('click', function() {
        music.changeSong();
        console.log('pre');
        getMusic.pre();
    })

    $('.next').on('click', function() {
        music.changeSong();
        console.log('next');
        getMusic.next();
    });

    $('.autoPlay').on('click', function() {
        music.autoPlay();
    });


    $('.loop').on('click', function() {
        getMusic.mulitLoop($('.loop'));
    });



    $('#music').on('canplay', function() {
        music.duration();
        music.progress($('.progress'), 'timeupdate');
        music.progress($('.volume'), 'volumechange');
    })

    $('.mute').on('click', function() {
        music.mute();
    })

    music.currentTime();

    $('#music').on('ended', function() {
        getMusic.next();
    })

    $('.only').on('click', function() {
        if ($(this).attr('title') == '扩展') {
            $('#shrink-expand').toggle(1000);
            $(this).find('use').attr('xlink:href', '#icon-iconfonthaofang26-copy');
            $(this).attr('title', '收缩');
        } else if ($(this).attr('title') == '收缩') {
            $('#shrink-expand').toggle(1000);
            $(this).find('use').attr('xlink:href', '#icon-iconfonthaofang26');
            $(this).attr('title', '扩展');
        }
    })


    $('.showLyrics').on('click', function() {
        if ($(this).attr('title') == '显示歌词') {
            $('#mes-ct').find('.showMusic').addClass('show');


            $(this).attr('title', '隐藏歌词');
        } else if ($(this).attr('title') == '隐藏歌词') {
            $('#mes-ct').find('.showMusic').removeClass('show');
            $(this).attr('title', '显示歌词');
        }
    })

    $('.max-min').on('click', function() {
        if ($(this).attr('title') == '最大化') {
            $('#content').toggle(1000);

            $('#musicPlayer').removeClass('min');
            $('.container').removeClass('min');
            $('#footer').removeClass('min');
            $('#control').removeClass('min');
            $('#progress').removeClass('min');
            $('.pro-mes').removeClass('min');
            $('.time').removeClass('min');
            $('.progress').removeClass('min');
            $('#volume').removeClass('min');

            if ($(window).width() > 850) {
                $('#musicPlayer').css({
                    top: '',
                    left: 0,
                    bottom: 30
                })
            }
            if ($(window).width() > 580 && $(window).width() < 850) {
                $('#musicPlayer').css({
                    top: '',
                    left: '',
                    bottom: ''
                })
            }

            $(this).find('use').attr('xlink:href', '#icon-zuixiaohua');
            $(this).attr('title', '最小化');
        } else if ($(this).attr('title') == '最小化') {
            $('#content').hide(1000);

            $('#musicPlayer').css({
                top: '',
                left: '',
                bottom: ''
            })

            $('#musicPlayer').addClass('min');
            $('.container').addClass('min');
            $('#footer').addClass('min');
            $('#control').addClass('min');
            $('#progress').addClass('min');
            $('.pro-mes').addClass('min');
            $('.time').addClass('min');
            $('.progress').addClass('min');
            $('#volume').addClass('min');



            $(this).find('use').attr('xlink:href', '#icon-zuidahua');
            $(this).attr('title', '最大化');
        }
    })

    $('#shrink-expand').on('mousedown', function(e) {
        if ($('.max-min').attr('title') == '最大化') {
            var ex = e.clientX,
                ey = e.clientY,
                objX = $('#musicPlayer').offset().left;
                objY = $('#musicPlayer').offset().top;
            $(this).css({
                cursor: 'move'
            })
            $(document).on('mousemove', function(ev) {
                var evx = ev.clientX,
                    evy = ev.clientY,
                    newObjX = objX + evx - ex,
                    newObjY = objY + evy - ey;
                if (newObjX < 0) {
                    newObjX = 0;
                }
                if (newObjX > $(window).width() - $('#musicPlayer').outerWidth()) {
                    newObjX = $(window).width() - $('#musicPlayer').outerWidth();
                }
                if (newObjY < $('#shrink-expand').outerHeight()) {
                    console.log('newObjY < 0');
                    newObjY = $('#shrink-expand').outerHeight();
                }
                if (newObjY > $(window).height() - $('#footer').outerHeight()) {
                    newObjY = $(window).height() - $('#footer').outerHeight();
                }

                $('#musicPlayer').offset({
                    left: newObjX,
                    top: newObjY
                })
            })
            $(document).on('mouseup', function() {
                $(document).off('mousemove');
                $('#shrink-expand').css({
                    cursor: 'initial'
                })
            })
        }

    })

    $(window).on('resize', function() {
        if ($(this).width() > 580) {
            $('#footer').find('.songs-ct').css({
                opacity: 0,
                zIndex: -1,
                height: '100%',
                transform: 'translateY(100%)'
            });
        }
        if ($(this).width() < 580) {
            $('#musicPlayer').removeClass('min').css({
                top: '',
                left: 0,
                bottom: 0
            });
            $('#content').show(1000);
            $('.max-min').find('use').attr('xlink:href', '#icon-zuixiaohua');
            $('.max-min').attr('title', '最小化');

            $('#footer').find('.songs-ct').css({
                transform: 'translateY(-60%)'
            })

            $('.musicPlayer').removeClass('min');
            $('.container').removeClass('min');
            $('#footer').removeClass('min');
            $('#control').removeClass('min');
            $('#progress').removeClass('min');
            $('.pro-mes').removeClass('min');
            $('.time').removeClass('min');
            $('.progress').removeClass('min');
            $('#volume').removeClass('min');

            $('#shrink-expand').show(1000);
            $('#musicPlayer').removeClass('super-min');
            $('#footer').removeClass('super-min');
            $('#footer').find('#mes-ct').removeClass('super-min');
            $('#footer').find('#mes-ct').find('.min-control').removeClass('super-min');
            $('#control').removeClass('super-min');
            $('#super-min').find('use').attr('xlink:href', '#icon-sanjiaozuo');
            $('#super-min').attr('title', '收缩');

        }
        if ($(this).width() > 580 && $(this).width() < 850) {
            $('#musicPlayer').css({
                top: '',
                left: '',
                bottom: ''
            })
        }
    })

    $('#super-min').on('click', function() {
        if ($(this).attr('title') == '扩展') {
            $('#shrink-expand').show(1000);

            $('#musicPlayer').removeClass('super-min');
            $('#footer').removeClass('super-min');
            $('#footer').find('#mes-ct').removeClass('super-min');
            $('#footer').find('#mes-ct').find('.min-control').removeClass('super-min');
            $('#control').removeClass('super-min');

            $(this).find('use').attr('xlink:href', '#icon-sanjiaozuo');
            $(this).attr('title', '收缩');
        } else if ($(this).attr('title') == '收缩') {
            $('#shrink-expand').hide(1000);
            $('#musicPlayer').offset({
                left: '',
            })
            $('#musicPlayer').addClass('super-min');
            $('#footer').addClass('super-min');
            $('#footer').find('#mes-ct').addClass('super-min');
            $('#footer').find('#mes-ct').find('.min-control').addClass('super-min');
            $('#footer').find('#mes-ct').css({
                left: ''
            });
            $('#control').addClass('super-min');

            $(this).find('use').attr('xlink:href', '#icon-triangle-r');
            $(this).attr('title', '扩展');
        }
    })


    $('#show-song').on('click', function() {
        if ($('#footer').find('.song-ct').length === 0) {
            $('#footer').find('.container').append($('<div class="songs-ct"></div>'));
            renderSong($('.songs-ct')[0]);
            $('#footer').find('.channel-ct').append($('#song-ct').find('.channel-ct').clone(true));
            $('#footer').find('.song-ct').append($('#song-ct').find('.song-ct').clone(true));
            $('#footer').find('.songs-ct').append($('<div id="song-close"></div>'));
            $('#song-close').on('click', function() {

                $('#footer').find('.songs-ct').css({
                    transform: 'translateY(300%)'
                });
            });

        }
        getMusic.renderSongMenu();

        $('#footer').find('.songs-ct').css({
            transform: 'translateY(-60%)'
        });
        $('#footer').find('.songs-ct').animate({
            opacity: 1,
            zIndex: 100,
            height: '250%'
        }, 500)
    })


    function renderContent(root) {
        reanderSongTab(root || $('#music-tab')[0], [{
            tabName: '歌曲信息',
            tabContent: $('<div id="song-ct"></div>')[0]
        }, {
            tabName: '歌词',
            tabContent: $('<div class="showMusic"><div class="lyric"><div class="lyric-view"><ul class="lyric-ct"></ul></div></div>' +
                '<div class="visualization"><canvas id="canvasVoice" class="canvas">你的浏览器不支持喔！</canvas></div></div>')[0]
        }], 1);

    }


    function renderSong(root) {
        reanderSongTab(root || $('#song-ct')[0], [{
            tabName: '分类',
            tabContent: $('<div class="channel"><div class="channelList"><ul class="channel-ct"></ul></div></div>')[0]
        }, {
            tabName: '歌曲列表',
            tabContent: $('<div class="song"><div class="songList">' 
                + '<div class="songMenu"><span class="songNum">播放统计 (0/0)</span>' 
                + '<span class="songClear">' 
                + '<button class="songClearBtn icons">'
                + '<svg class="icon" aria-hidden="true">'
                +      '<use xlink:href="#icon-lajitong"></use>'
                + '</svg>'
                +'</button>' 
                + '<b class="songClearText">清空列表</b>'
                + '</span></div>'
                + '<ul class="song-ct"></ul></div></div>')[0]
        }], 1);
    }



    function reanderSongTab(root, tabList, idx) {
        var targetDom = root;
        // 生成实例
        var tabContainer = new songTab.TabFactorty({
            tabList: tabList
        });
        // 渲染到dom节点
        tabContainer.renderTo(targetDom, idx)
    }

};


module.exports = sum;
