let t = 'Dilshan'
console.log(t)

let a = 10;
let b = 4;
let c = '2'

console.log(a/c);


/*
* config file configuration
* ---------------------------
* firstly create tsconfig.ts file +++   ts --init
* in ts config file write rootDir and outDir path
* then run tsc -watch no need to defined file you defined path in config file now on ts compiler compile all
* the ts filed in rootDir to JS file inside the outDir
*
* Type script is type safety language. that's why you can not device a/c. you can do it in JS because js allows
* that but in type script it's compile time error TS compiler catch that error in it show in compile time.
* but you can run in it no longer matter because it valid JS code any valid js code is valid TS code.
* you need to config it in TS config file that "noEmitOnError": true,
*
* */