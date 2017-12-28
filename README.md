# auto_authentication
Sample App Auth is app auth with React Native and NodeJS API that support username and password authentication with JWTs.
### Quick Start

1.General Requirements Software (Backend & Frontend)

- Install NodeJS
- Install react-native-cli

2.Backend - NodeJS, clone this repository https://github.com/auth0-blog/nodejs-jwt-authentication-sample

2.1. install dependency
```

//make sure you have entered into the application repository
# npm install
```

2.2. start server
```
# npm run start
```

3.Frontend - React Native, clone this repository https://github.com/jumaediahsan/auto_authentication.git

3.1. install dependency
```
//make sure you have entered into the application repository
# npm install
```

3.2. run app
```
//make sure the nodeJS server is already running

//for android
# react-native run-android

//for ios
# react-native run-ios
```

`note: change apiUrl in /src/utils/apiUrl.js with your local ip address and port server nodeJS`

### Deploying Node js App to Heroku
- if you have not registered yet, please do that and login to HEROKU, 
- click here to register https://dashboard.heroku.com
- after that
- do the following to deploy your application to node js.
1. click new and Create new app
![1](https://user-images.githubusercontent.com/28797238/34403390-7a6cc008-ebda-11e7-9372-ea2de5f73ea5.png)

2. enter project name and press create app 
![2](https://user-images.githubusercontent.com/28797238/34403593-b3b71006-ebdb-11e7-8ff0-9e1c80179fbd.png)

3. before doing this step, please go to your project directory and type this in the terminal window in sequence
![3](https://user-images.githubusercontent.com/28797238/34403611-d6801722-ebdb-11e7-9d59-97feecd8b774.png)

4. and the last after you push your app to heroku , type ‘ heroku open ‘ in your terminal window without quotation marks so with that command will open your browser and open your application

### after doing this command you do not need to run the server, every open aplkasi
