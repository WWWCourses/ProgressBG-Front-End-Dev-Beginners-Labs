console.log(`window.document === document: ${window.document === document}`);

console.dir(document);

console.log(`document.hasFocus(): ${document.hasFocus()}`);
console.log(document.activeElement);

// get document title:
console.log(`title: ${document.title}`);

// set document title:
document.title = "NEW TITLE";
console.log(`title: ${document.title}`);