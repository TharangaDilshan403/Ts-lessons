# Ts-lessons


#LESSON 01

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


#LESSON 02

* TS is statically typed language that mean type are check in compile time
* JS is dynamically typed language that means type are check in run time.
* data types - string, number, boolean, undefined, bigint, symbols, null, objects
*
* Explicit Type - that mean you defined data type in variable creation
* Implicit Type - that mena you variable create but not defined the data type, variable get data type in first 
* data assign;
* IN IMPLICIT TYPE MORE READABLE;