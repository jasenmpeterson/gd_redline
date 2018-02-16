<div class="video__modal">
    <button class="video__close__button">
        Close
    </button>
    <div class="videoWrapper">
        <div id="player"></div>
    </div>
</div>
<?php wp_footer(); ?>
<script>

    // lightbox

    var videoButton = document.querySelector(".video__thumbnail");
    var videoCloseButton = document.querySelector(".video__close__button");
    var videoModal = document.querySelector(".video__modal");

    videoButton.addEventListener("click", function () {
        videoModal.classList.add("open");
        player.seekTo(0, false);
        player.playVideo();
    });

    videoCloseButton.addEventListener("click", function () {
        videoModal.classList.remove("open");
        player.stopVideo();
    });

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // YouTube Video

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'M51Y87fXOyc'
        });
    }


</script>
</body>
</html>