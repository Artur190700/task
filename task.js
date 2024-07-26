
function select(id) {
    let selectedEl = document.getElementById(id)
    if (selectedEl.style.background == "rgb(185, 255, 102)") {
        hiddenToVisible(id.slice(-1));
        let minus = document.createElement('img');
        minus.src = "taskPhoto/minus.svg";
        let plus = document.createElement('img');
        plus.src = "taskPhoto/plus.svg";
        let div = document.getElementById('plusButton' + id.slice(-1));
        document.getElementById('minusButton' + id.slice(-1)).remove();
        div.appendChild(plus);
        plus.id = 'img' + id.slice(-1);
        selectedEl.style.background = '#F3F3F3';
        selectedEl.style.height = '143px';
    }
    else {
        let minus = document.createElement('img');
        minus.src = "taskPhoto/minus.svg";
        let plus = document.createElement('img');
        plus.src = "taskPhoto/plus.svg";
        selectedEl.style.background = '#b9ff66';
        selectedEl.style.height = 'fit-content';
        // document.getElementById('line6').style.visibility = 'visible';
        hiddenToVisible(id.slice(-1));
        document.getElementById('img' + id.slice(-1)).remove();
        let div = document.getElementById('plusButton' + id.slice(-1));
        minus.id = 'minusButton' + id.slice(-1);
        div.appendChild(minus)

    }

}
function hiddenToVisible(id) {
    let element = document.getElementById(id);
    if (element.style.visibility == 'hidden') {
        element.style.visibility = 'visible';
        if (document.getElementById('text' + id))
            document.getElementById('text' + id).style.visibility = 'visible';
    } else {
        element.style.visibility = 'hidden';
        document.getElementById('text' + id).style.visibility = 'hidden';

    }

}

function show(direction) {
    let scrollAmount = 300;
    const scroll = document.getElementById('scroll');
    if (direction == 'left')
        scroll.scrollLeft -= scrollAmount;
    else
        scroll.scrollLeft += scrollAmount;
}

let previousElement = document.getElementById('suriken1');
function eventTarget(e, amount, direction) {
    let nowElement = document.getElementById(e.target.id);
    if (previousElement.id != nowElement.id) {
        // console.log(nowElement, previousElement)
        if (nowElement.src == "http://127.0.0.1:5500/taskPhoto/greenSuriken.svg") {
            nowElement.src = "taskPhoto/suriken.svg"

        } else {
            previousElement.src = "taskPhoto/suriken.svg";
            nowElement.src = "taskPhoto/greenSuriken.svg";
            previousElement = nowElement;
        }
    } else {
        previousElement = nowElement;
    }
    let scroll = document.getElementById('scroll');
    if (direction == 'left')
        scroll.scrollLeft -= amount;
    else
        scroll.scrollLeft += amount;
}

