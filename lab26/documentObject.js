// console.log(`window.document === document: ${window.document === document}`);

// console.dir(document);

// console.log(`document.hasFocus(): ${document.hasFocus()}`);
// console.log(document.activeElement);

// // get document title:
// console.log(`title: ${document.title}`);

// // set document title:
// document.title = "NEW TITLE";
// console.log(`title: ${document.title}`);


// console.log(document.head);
// console.dir(document.head);

// document.body.style.background = "#F00";

// console.log(`Body childNodes`);
// console.dir(document.body.childNodes);
// console.log(`Body children`);
// let form1 = document.body.children[0].children[1];

// console.dir(document.body.children[0].children[1].getAttributeNode('id').value);
// console.dir(document.querySelector('#form1').id);

// get all comments:
let bodyNodes = document.body.childNodes;
for (let i = 0; i < bodyNodes.length; i++) {
    const element = bodyNodes[i];
    if( element === 3){
        // TODO: debug and discuss next time
        console.log(element);
    }

}

