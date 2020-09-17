x = 2;
blackContainer = document.getElementById('black-container');



function actionX(key) {
    aaa = 'url(./src/background/wallpaper' + key + '.webp)'
    return document.getElementById('body').style.backgroundImage = aaa;
}

setTimeout(() => { actionX(3), 1 })
setTimeout(() => { actionX(2), 1 })
setTimeout(() => { actionX(1), 1 })

function changeBG() {
    function shadow() {
        console.log(1)
        blackContainer.style.opacity = '100%';
    }

    if (x == 3) {
        x = 1
        shadow();
        setTimeout(() => {
            console.log(0)
            actionX(3);
            blackContainer.style.opacity = '50%';
        }, 1000)

    } else if (x == 2) {
        x += 1;
        shadow();
        setTimeout(() => {
            console.log(0)
            actionX(2);
            blackContainer.style.opacity = '50%';
        }, 1000)

    } else {
        x += 1;
        shadow();
        setTimeout(() => {
            console.log(0)
            actionX(1);
            blackContainer.style.opacity = '50%';
        }, 1000)
    }


}