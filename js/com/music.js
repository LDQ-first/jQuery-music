var music = (function() {

    var audioObj = $('#music')[0];
    var srcValue = $('[name=src]');
    var oldVolume = 0.1;


    $(audioObj).on('playing', function() {
        $('.play-pause').attr('data-state', 'play');
        $('.play-pause').find('use').attr('xlink:href','#icon-tag35');
        $('.disco').addClass('active');
        $('.needle').addClass('active');

    }).on('pause', function() {
        $('.play-pause').attr('data-state', 'pause');
        $('.play-pause').find('use').attr('xlink:href','#icon-bofang');
        $('.disco').removeClass('active');
        $('.needle').removeClass('active');
    })

    function init() {
        pause();
        audioObj.volume = 0.1;
        $('.sound').css({
            width: '30%'
        });
        $('.soundPoint').css({
                left: '30%'
            })
        $('.play-pause').attr('data-state', audioObj.autoPlay ? 'play' : 'pause');
     

        $('.loop').attr('data-state', 'noLoop');
        $('.loop').attr('title', '顺序播放');
        $('.loop').addClass('noLoop');
        $('.only').attr('title', '收缩');
        $('.mute').attr('title', '静音');
        $('.showLyrics').attr('title', '显示歌词');
        $('.max-min').attr('title', '最小化');
        $('#super-min').attr('title', '收缩');
        $('#show-song').attr('title', '显示');
    }


    function changeSong() {
        pause();
        $('.meter').css({
            width: '0%',
            transition: ''
        });
        $('.meterPoint').css({
            left: '0%',
            transition: ''
        });
        audioObj.currentTime = 0;
    }

    function play() {
        audioObj.play();
    };

    function pause() {
        audioObj.pause();
    };

    function playPause($this) {
        if ($this.attr('data-state') === 'pause') {
            play();
            $this.attr('data-state', 'play');
        } else if ($this.attr('data-state') === 'play') {
            pause();
            $this.attr('data-state', 'pause');
        }
    };

    function autoPlay() {
        console.log(localStorage.getItem('autoPlay'));
        console.log(audioObj.autoPlay);
        if (localStorage.getItem('autoPlay') === 'true') {
            audioObj.autoPlay = false;
        } else {
            audioObj.autoPlay = true;
        }
        console.log(audioObj.autoPlay);
        localStorage.setItem('autoPlay', audioObj.autoPlay);
        console.log(localStorage.getItem('autoPlay'));
    };

    function src() {
        srcValue.val(audioObj.src);
    };

    function mute() {
        if (audioObj.volume != 0) {
            oldVolume = audioObj.volume;
            audioObj.volume = 0;
            $('.sound').css({
                width: '0%'
            });
            $('.soundPoint').css({
                left: '0%'
            })
            $('.mute').attr('title', '取消静音');
           $('.mute').find('use').attr('xlink:href','#icon-yinliang');
        } else {
            audioObj.volume = oldVolume;
            $('.mute').attr('title', '静音');
          $('.mute').find('use').attr('xlink:href','#icon-jingyin');
          
        }

    };


    function duration() {
        var min = parseInt(audioObj.duration / 60);
        var sec = parseInt(audioObj.duration - min * 60);
        $('.duration').text(digit(min) + ' : ' + digit(sec));
        var songTime = '  ' + digit(min) + ' : ' + digit(sec);
       $('.song-li.active').find('.song-time').attr('song-time', songTime);
       $('.song-li.active').find('.song-time').text(songTime);
        
    };

    function currentTime() {
        $(audioObj).on('timeupdate', function() {
            var time = audioObj.currentTime;
            var min = parseInt(time / 60);
            var sec = parseInt(time - min * 60);
            $('.currentTime').text(digit(min) + ' : ' + digit(sec));
        })
    };

    function digit(digit) {
        return digit >= 10 ? digit : '0' + digit;
    };

    function progress($target, event) {
        var pw = $target.width();
        var proLeft = $target.offset().left;
        var m = $($target.children()[0]);
        var mp = $($target.children()[1]);


        $(audioObj).on(event, function() {
            if (event === 'timeupdate') {
                m.css({
                    width: 100 * audioObj.currentTime / audioObj.duration + '%',
                });
                mp.css({
                    left: 100 * audioObj.currentTime / audioObj.duration + '%',
                })

            } else if (event === 'volumechange') {
                m.css({
                    width: 100 * audioObj.volume + '%',
                });
                mp.css({
                    left: 100 * audioObj.volume + '%',
                });
                if (audioObj.volume != 0) {
                    $('.mute').attr('title', '静音');
                    $('.mute').removeClass('unmute');
                } else {
                    $('.mute').attr('title', '取消静音');
                    $('.mute').addClass('unmute');
                }
            }
        })


        function progressW(e) {
            var ex = e.pageX;
            var moveX = ex - proLeft;
            var meterWP = moveX * 100 / pw;

            if (moveX < 0) {
                meterWP = 0;
            } else if (moveX > pw) {
                meterWP = 100
            }

            m.css({
                width: meterWP + '%',
                transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
            });
            mp.css({
                left: meterWP + '%',
                transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
            })
            if (event === 'timeupdate') {
                audioObj.currentTime = meterWP / 100 * audioObj.duration;
            } else if (event === 'volumechange') {
                audioObj.volume = meterWP / 100;
            }
        }

        $target.on('mousedown', progressW);


        function meterPointD(e) {
            $target.off('mousedown');
            $('body').on('mousemove', function(ev) {

                var evx = ev.pageX;
                var moveX = evx - proLeft;
                var meterWP = moveX * 100 / pw;

                if (moveX < 0) {
                    meterWP = 0;
                } else if (moveX > pw) {
                    meterWP = 100
                }
                m.css({
                    width: meterWP + '%',
                    transition: ''
                });
                mp.css({
                    left: meterWP + '%',
                    transition: ''
                })
                if (event === 'timeupdate') {
                    audioObj.currentTime = meterWP / 100 * audioObj.duration;
                } else if (event === 'volumechange') {
                    audioObj.volume = meterWP / 100;
                }
            })
        }

        mp.on('mousedown', meterPointD);

        $('body').on('mouseup', function() {
            $('body').off('mousemove');
            $target.on('mousedown', progressW);
        })
    }

    return {
        audioObj: audioObj,
        init: init,
        changeSong: changeSong,
        play: play,
        pause: pause,
        playPause: playPause,
        autoPlay: autoPlay,
        src: src,
        mute: mute,
        duration: duration,
        currentTime: currentTime,
        progress: progress,
    }
})();

module.exports = music;
