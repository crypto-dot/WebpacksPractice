import _ from 'lodash';
import printMe from './print';
function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");
    btn.textContent = "Click me and then check the console";
    btn.onclick = printMe;
    element.textContent = _.join(["Hello","webpack"], ' ');
    element.appendChild(btn);
    return element;

    }
document.body.appendChild(component());