let cont = document.querySelector('.carousel');
videos = cont.querySelectorAll('video');

console.log(videos);

videos.forEach(video => {
    video.onpaused = (event) => {
        console.log(
          "The Boolean paused property is now 'false'. Either the play() method was called or the autoplay attribute was toggled."
        );
      };
});

// document.addEventListener('keydown', (event) => {
//     finalKeys.push(event.key);
//     console.log(finalKeys);
//     if(finalKeys.length>=4){
//         console.log(finalKeys);
//         if(finalKeys[0]==1 && finalKeys[1]==3 && finalKeys[2]==1 && finalKeys[3]==2){
//             let egg = document.getElementsByClassName('egg')[0];
//             egg.style.opacity = 0.5;
//         }
//         finalKeys = finalKeys.slice(1);
//     }
//   }, false);