// In the global execution context (outside of any function), this refers to the global object
if(this.window){
    // if the script is executed by a Browser, then there will be a global object 'window' defined:
    console.dir(this.window);
    console.log( this.window === window);
}else if(this.global !== null){
    // if the script is executed by node.js, then there will be a global object 'global' defined:
    console.dir(global);
}