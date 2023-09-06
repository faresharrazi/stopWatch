const watch = document.querySelector('#watch');
const pause = document.querySelector('#pause');
const play = document.querySelector('#play');
const reset = document.querySelector('#reset');

let [m,s,ms] = [0,0,0];
let interval=1;
let occ = 0;


play.addEventListener ('click', () => {

        clearInterval(interval);
        interval = setInterval (startWatch,10);

});

pause.addEventListener ('click', () => {
    playEvent = 'click';
    clearInterval(interval);
});

reset.addEventListener ('click', () => {
    playEvent = 'click';
    clearInterval(interval);
    [m,s,ms] = [0,0,0];
    displayWatch([m,s,ms]);

});

const displayWatch = function ([m,s,ms]) {
    m = (m<10) ? `0${m}` : m; 
    s = (s<10) ? `0${s}` : s; 
    ms = (ms<10) ? `0${ms}` : ms; 
    watch.innerText = `${m}:${s}:${ms}`;
}

const startWatch = function () {
        
        if (ms<98) {
            ms++;
        }
        else if (s<58) {
            s++;
            ms=0;
        } else if (m<58) {
            m++;
            s=0;
            m=0;
        } else {
            clearInterval(interval);
        }

        displayWatch([m,s,ms]);
    }
    
        


