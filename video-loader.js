function loadVideo(e){
    var parent = this.parentNode;
    var dataSrc = parent.getAttribute('data-src');
    parent.innerHTML = '<iframe class="video" src="'+ dataSrc +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
var videoImage = document.querySelectorAll('.video-wrapper .video-image');
for(var i = 0; i < videoImage.length; i++){
    videoImage[i].addEventListener('click', loadVideo);
}