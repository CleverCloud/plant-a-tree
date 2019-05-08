# Plant a Tree 🌳 with Clever Cloud

 Hello, you want to try [Clever Cloud](http://www.clever-cloud.com/)? This is the perfect starting point to do so. And the first time you deploy this we'll make sure a 🌳 gets planted because we think it matters.

Editing code? Open the file `index.js`, we have commented a REST call. You just need to uncomment it. It will be automatically called at the end of the application deployment. This call will get you in our user base and register you for our ongoing draw. Don't forget to modify the JSON object sent by the API call. It will help us to contact you.

And then, what's next? Two choices:

## Use Clever Cloud CLI client

Start with the documentation here: [https://www.clever-cloud.com/doc/clever-tools/getting_started/](https://www.clever-cloud.com/doc/clever-tools/getting_started/).

Install `clever-tools` with npm:

````
npm install -g clever-tools
````

Or with yarn:

````
yarn global add clever-tools
````

Once `clever-tools` is installed, change directory to the Git repository and:

````
clever login
clever create --type node myApp
clever deploy
clever open
````

You have just deployed this application to production, congrats 👏 ! And don't forget to modify the file `index.js`. If you are having trouble do not forget to import your SSH Keys in https://console.clever-cloud.com/users/me/ssh-keys

## Use Clever Cloud Console

Follow the documentation here [https://www.clever-cloud.com/doc/nodejs/nodejs/](https://www.clever-cloud.com/doc/nodejs/nodejs/). And don't forget to modify the file `index.js`.

## Step by step guide

![Step 01](/img/01.png?raw=true "Step 01")

Click on Fork

----

![Step 02](/img/02.png?raw=true "Step 02")

Select the GitHub account where you want to fork it.

----

![Step 03](/img/03.png?raw=true "Step 03")

Click on the index.js file.

----

![Step 04](/img/04.png?raw=true "Step 04")

Click on Edit and go to the commented area line 22. Uncomment.

----

![Step 05](/img/05.png?raw=true "Step 05")

Replace with your name, firstname and email address. "id" is specified above. Don't change it. It will be automatically replaced with the environment variable of the app you will deploy on Clever Cloud.

----

![Step 06](/img/06.png?raw=true "Step 06")

Commit your changes.

----

![Step 07](/img/07.png?raw=true "Step 07")

Go to [clever-cloud.com](https://www.clever-cloud.com) and click on the blue button in the middle "Sign up & try" with the GitHub icon.

----

![Step 08](/img/08.png?raw=true "Step 08")

The form should be prefilled with your GitHub credentials. Tick the Terms & Conditions checkbox. Click on "Create my account".

----

![Step 09](/img/09.png?raw=true "Step 09")

Click on "personal space".

----

![Step 10](/img/10.png?raw=true "Step 10")

Click on "add an application".

----

![Step 11](/img/11.png?raw=true "Step 11")

Select "plant-a-tree" within the list. (Except if you changed the name of the app when your forked it.)

----

![Step 12](/img/12.png?raw=true "Step 12")

Click on "Node.js".

----

![Step 13](/img/13.png?raw=true "Step 13")

Click on "next".

----

![Step 14](/img/14.png?raw=true "Step 14")

Click on "create".

----

![Step 15](/img/15.png?raw=true "Step 15")

Click on "I don't need any add-on".

----

![Step 16](/img/16.png?raw=true "Step 16")

Click on "next".

----

![Step 17](/img/17.png?raw=true "Step 17")

The application is deploying. Wait.

----

![Step 18](/img/18.png?raw=true "Step 18")

Deployment logs start being shown.

----

![Step 19](/img/19.png?raw=true "Step 19")

Your application is running.

----

![Step 20](/img/20.png?raw=true "Step 20")

You can check your production URL. You have registered yourself for the draw of the contest. That's it. You know now how to deploy a github project on Clever Cloud. 

----

Have fun with other stacks, projects and integrations...
