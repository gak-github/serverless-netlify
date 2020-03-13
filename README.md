<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h2 align="center">
  A MERN Stack project built and deployed using Gatsby+Netlify+Serverless
</h2>
## Introduction
It is a sample project started with MERN stack, inspired by Brad Traversy's crash course on YT React Hooks and Context API [YT link](https://www.youtube.com/watch?v=XuFDcZABiDQ&t=674s) and then converted into MERN stack  [YT link](https://www.youtube.com/watch?v=KyWaXA_NvT0). Once having a full stack web application running locally, decided to deploy into Netlify(I admire Gatsby and Netlify Engineers). 

Although we have several templates/sample applications available for netlify+serverless (lambda), I couldn't find a code reference for a full stack applicatiom using [Gatsby](https://www.gatsbyjs.org/)+[Netlify](https://www.netlify.com/)+Serverless with Express Routes. Here I am sharing the steps which I followed to have a full fledged web application hosted freely on Netlify.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**
    ***1. Gatsby site***
    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```
    Your Gatsby site is now running at `http://localhost:8000` by default.
    You can delete all the default stuff and keep a blank page with a Hello World! message. Please push this code into github (master branch) and create a free account with [Netlify](https://www.netlify.com). Login into Netlify and follow the steps to deploy a site directly from GitHub. Assumping that your Gatsby site is now hosted and running on Netlify. Let us go to the next step now.
    <bb>
    ***2. Netlify setup***
      Install Netlify CLI and login:
      
      ```shell
        npm i -g netlify-cli
        
        netlify login # to link your free Netlify account
      ```
    Create your Netlify instance for your Gatsby site:
      ```
      netlify init
      ```
       You will be prompted for a "build command", which for Gatsby is npm run build, and a "publish directory", which for Gatsby is public. You can also save this in a <b>netlify.toml</b> config file, or the CLI will create it for you:
      ```
      [build]
        command = "npm run build"
        functions = "functions"
        publish = "public"
      ```
      As you can see in the above example, We'll also specify where we'll save our functions (the value "functions" indicates that we are going to create the serverless functions under a directory called "functions" from the root directory.

      <br>
      Create your first Netlify Function: Netlify CLI has a set of templates available to help you get started writing serverless functions. Just run:
      
      ```
      netlify functions:create # ntl functions:create also works
      ```
      You'll be presented with an autocomplete list. You can pick the `token-hider` example for now. Once you select it, the CLI will copy out the necessary files, and install the necessary axios dependencies.

      Notice that token-hider.js includes this line:
      ```
      const { API_SECRET = "shiba" } = process.env
      
      ```
      This is meant to simulate API secrets that you don't want to expose to the frontend. You can set these as build environment variables on your site's Netlify Dashboard. You can name them whatever you like, and for the purposes of our demo I've provided a default, but of course feel free to modify as I have done in this repo under ["functions"](https://github.com/gak-github/serverless-netlify/tree/master/functions) directory. You can have multiple directories under "functions" but each should be having one default "handler" functions exported.

      Install netlify-lambda as dev dependency
      ```
      npm i -D netlify-lambda

      ```
      And add a postinstall script in package.json (this isn't Netlify specific, it is part of how npm works):

        "scripts": {
          "postinstall": "netlify-lambda install"
        },
      Fire up Gatsby and Functions with Netlify Dev
      Netlify Dev is the local proxy server embedded in the CLI that we will use to develop our Functions alongside our Gatsby app. You can start it like so:
      ```
      netlify dev # or ntl dev
      ```
      Your Gatsby app will now be accessible at http://localhost:8888 and your function will be accessible at http://localhost:8888/.netlify/functions/token-hider. Check it out in your browser!

      Now you are free to add react components and more business logic to "functions" directory.

##How to run my project
```
git clone https://github.com/gak-github/serverless-netlify.git

cd serverless-netlify

npm install

netlify dev
```
It will build and open the browser with http://localhost:8888 and you can add/delete the expense details. It will be persisted into MongoDB.

You can navigate my code and mostly self explanatory.

While running locally, **please make sure you are replacing the MongoDB URL in /functions/express/config/db.js MONGO_URI with yours**. You can [create an account with Mongo cloud](https://www.mongodb.com/cloud/atlas/signup). For more details please watch Brad's YouTube [course](https://www.youtube.com/watch?v=KyWaXA_NvT0)

This project can be seen at [https://agurusamy-serverless.netlify.com](https://agurusamy-serverless.netlify.com). 
<!-- AUTO-GENERATED-CONTENT:END -->
