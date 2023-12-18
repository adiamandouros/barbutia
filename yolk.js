let finalKeys = []

document.addEventListener('keydown', (event) => {
    finalKeys.push(event.key);
    alert(finalKeys);
    console.log(finalKeys);
    if(finalKeys.length>=4){
        console.log(finalKeys);
        if(finalKeys[0]==1 && finalKeys[1]==3 && finalKeys[2]==1 && finalKeys[3]==2){
            let egg = document.getElementsByClassName('egg')[0];
            egg.style.visibility = "visible";
            egg.style.opacity = 0.5;
        }
        finalKeys = finalKeys.slice(1);
    }
  }, false);

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
