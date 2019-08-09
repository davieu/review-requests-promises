My own reference. 
non-folder files - Copy path of the index.html then exchange or comment out the js files being used to run the static html.

To use the files in the folders just open folder and copy path of html into browser.

To use jsclassesModules folder - Since it is using modules you have to open a terminal and go into the jsclassesModules folder. then in the terminal you have to run an http-server 
simply put in the terminal once in the jsclassesModules folder ------- http-server . ------- Since it is a fake server running now you have to go to the browser and use the localhost. http://localhost:8080/
copying path of the index file of jsclassesModules into browser will not work and will give cors error.

Using modules- files for .js most be .mjs
-when using script src you have to add a type called module <script type="module" src="main.js>
-Also need to add <script nomodule src="error.js"></script> the nomodule is used for the browsers incase it is an older browser that does not support modules. It will then send them to alternative js file.