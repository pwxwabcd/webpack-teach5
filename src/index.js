import _ from 'lodash';
import './style.css';
import addIcon from './add.png';
import deleteIcon from './delete.png';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');

    //调用Lodash的join方法
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //加入image
    var myAddIcon = new Image();
    myAddIcon.src = addIcon;
    element.appendChild(myAddIcon);

    var myDeleteIcon = new Image();
    myDeleteIcon.src = deleteIcon;
    element.appendChild(myDeleteIcon);

    //加入按钮，调用其他js提供的方法
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

//动态加载
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}