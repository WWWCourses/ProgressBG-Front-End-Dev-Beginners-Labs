var matched, str = `variable various var ovar`;
// \w = [a-zA-Z0-9_]
// \W = [^a-zA-Z0-9_]
// [0,&]
matched = str.match(/\b.*\b/g);

console.log(matched);