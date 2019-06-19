function demo1(){
    // dir body childs:
    let bodyChildren = document.body.childNodes;
    console.dir(bodyChildren);

    // get node for h1 element
    // let h1 = document.getElementById('h1');
    // console.dir(h1);


    // dir text object of h1
    // console.dir(h1.childNodes[0]);

    // h1.childNodes[0].data = '@@@@@@';

    // // do something with h1 element
    // h1.innerText = 'Ada';
    // h1.style.color = '#00F';
    // h1.style.backgroundColor = 'yellow';

    // // change h1 class attribute - shortcut:
    // h1.className = 'small';

    // // get class attribute object of h1:
    // let h1ClassNode = h1.getAttributeNode('class');
    // console.dir(h1ClassNode);
    // // h1ClassNode.nodeValue = 'small';
}

function changeAllChildNodes() {
    // h1.style.color = '#00F';
    // get ul node (DOM cache)
    let ul = document.getElementsByClassName('test');
    console.log('====================================');
    console.log(`ul: ${ul}`);
    console.log('====================================');

    // get all li nodes:
    let liNodes = ul[0].children;

    for (let i = 0; i < liNodes.length; i++) {
        liNodes[i].style.color = '#00F';

    }

}

function changeSingleChildNode() {
    // let ul = document.getElementsByClassName('test')[0];

    // let li2 =  ul.children[1];
    // li2.style.color = 'green';

    // querySelector
    let li2=  document.querySelector('li:nth-child(2)');
    li2.style.backgroundColor = 'red';

}
// changeSingleChildNode();