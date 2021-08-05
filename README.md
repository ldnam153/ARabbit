# ARabbit
To run the demo app on Android platform, do the following:

Pre-conditions: install NodeJs, Android Studio (SDK and NDK), JDK
```
Step 1: open terminal and type
	$ git clone https://github.com/ldnam153/ARabbit.git

Step 2: unzip cpp code
	$ cd ARabbit
	$ unzip build.zip

Step 3: install dependencies
	$ npm install

Step 4: start Metro
	$ npx react-native start

Step 5: open another terminal in root folder and type (make sure that your computer have connected with android device)
	$ npx react-native run-android 
```	
### File structure of source code
``` 
   ...
|--src
    |--screens 
        |--Screen1.js
    |--components
        |--ComponentA.js
    |--resources
        |--icons
            |-- ...
        |--imgs
            |--...
    |--actions
        |-- ...
    |--reducers
         |-- ...
    ...
```
