const videosWrappers = document.querySelectorAll('.video-wrapper');
const videos = document.querySelectorAll('.video');

window.addEventListener('scroll', () => {
    let bodyInnerHeight = window.innerHeight;
    let matrix1 = (window.scrollY - (bodyInnerHeight - 510) / 2) / 510;
    let matrix2 = (window.scrollY - ((bodyInnerHeight - 510) / 2) - bodyInnerHeight) / 510;
    let matrix3 = (window.scrollY - ((bodyInnerHeight - 510) / 2) - bodyInnerHeight * 2) / 510;
    let limMatrix1 = Math.min(Math.max(matrix1, 0), 1);
    let limMatrix2 = Math.min(Math.max(matrix2, 0), 1);
    let limMatrix3 = Math.min(Math.max(matrix3, 0), 1);

    // Second Video
    videosWrappers[1].style.transform = `matrix(1, 0, 0, ${limMatrix1}, 0, 0)`;
    videosWrappers[1].style.msTransform = `matrix(1, 0, 0, ${limMatrix1}, 0, 0)`;       //IE
    videosWrappers[1].style.webkitTransform = `matrix(1, 0, 0, ${limMatrix1}, 0, 0)`;   //Chrome and Safari
    videosWrappers[1].style.MozTransform = `matrix(1, 0, 0, ${limMatrix1}, 0, 0)`;      //Firefox
    videosWrappers[1].style.OTransform = `matrix(1, 0, 0, ${limMatrix1}, 0, 0)`;        //Opera
    videos[1].style.transform = `scaleY(${1 / limMatrix1})`;
    videos[1].style.msTransform = `scaleY(${1 / limMatrix1})`;       //IE
    videos[1].style.webkitTransform = `scaleY(${1 / limMatrix1})`;   //Chrome and Safari
    videos[1].style.MozTransform = `scaleY(${1 / limMatrix1})`;      //Firefox
    videos[1].style.OTransform = `scaleY(${1 / limMatrix1})`;        //Opera
    videos[1].style.zIndex = '5';
    videos[1].style.msZIndex = '5';       //IE
    videos[1].style.webkitZIndex = '5';   //Chrome and Safari
    videos[1].style.MozZIndex = '5';      //Firefox
    videos[1].style.OZIndex = '5';        //Opera
    
    
    // Third Video
    videosWrappers[2].style.transform = `matrix(1, 0, 0, ${limMatrix2}, 0, 0)`;
    videosWrappers[2].style.msTransform = `matrix(1, 0, 0, ${limMatrix2}, 0, 0)`;       //IE
    videosWrappers[2].style.webkitTransform = `matrix(1, 0, 0, ${limMatrix2}, 0, 0)`;   //Chrome and Safari
    videosWrappers[2].style.MozTransform = `matrix(1, 0, 0, ${limMatrix2}, 0, 0)`;      //Firefox
    videosWrappers[2].style.OTransform = `matrix(1, 0, 0, ${limMatrix2}, 0, 0)`;        //Opera
    videos[2].style.transform = `scaleY(${1 / limMatrix2})`;
    videos[2].style.msTransform = `scaleY(${1 / limMatrix2})`;       //IE
    videos[2].style.webkitTransform = `scaleY(${1 / limMatrix2})`;   //Chrome and Safari
    videos[2].style.MozTransform = `scaleY(${1 / limMatrix2})`;      //Firefox
    videos[2].style.OTransform = `scaleY(${1 / limMatrix2})`;        //Opera
    videos[2].style.zIndex = '6';
    
    // Fourth Video
    videosWrappers[3].style.transform = `matrix(1, 0, 0, ${limMatrix3}, 0, 0)`;
    videosWrappers[3].style.msTransform = `matrix(1, 0, 0, ${limMatrix3}, 0, 0)`;       //IE
    videosWrappers[3].style.webkitTransform = `matrix(1, 0, 0, ${limMatrix3}, 0, 0)`;   //Chrome and Safari
    videosWrappers[3].style.MozTransform = `matrix(1, 0, 0, ${limMatrix3}, 0, 0)`;      //Firefox
    videosWrappers[3].style.OTransform = `matrix(1, 0, 0, ${limMatrix3}, 0, 0)`;        //Opera
    videos[3].style.transform = `scaleY(${1 / limMatrix3})`;
    videos[3].style.msTransform = `scaleY(${1 / limMatrix3})`;       //IE
    videos[3].style.webkitTransform = `scaleY(${1 / limMatrix3})`;   //Chrome and Safari
    videos[3].style.MozTransform = `scaleY(${1 / limMatrix3})`;      //Firefox
    videos[3].style.OTransform = `scaleY(${1 / limMatrix3})`;        //Opera
    videos[3].style.zIndex = '7';
})

document.querySelector('.play-pause-button-videos').addEventListener('click', e => {
    videos.forEach(video => {
        if (video.paused) {
            video.play();
            e.target.children[0].style.backgroundPositionX = '-80px'
        } else {
            video.pause()
            e.target.children[0].style.backgroundPositionX = '-40px'
            console.log(e.target);
        }
    })
})