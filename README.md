
Live Demo: https://ibrahimk4111.github.io/react-to-do-list/
# `How to deploy react app on github`

### Step-1

First of all push your code on github successfully.

### Step-2
After that Open the VSCODE terminal:

`npm install gh-pages --save-dev`

### Step-3

Open 'package.json' file and write

            "homepage": "https://{User Name}.github.io/{App Name}"
            
            "scripts": {
                "predeploy": "npm run build",
                "deploy": "gh-pages -d build",
                }
            
### Step-4

`npm run deploy`

### Step-5

Then go to your github Repository:

`setting > pages`

### Step-6

`Click on available link there`
