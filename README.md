## Portfolio

 

### Heroku 

1. Download and install the Heroku CLI.
2. Log in to your Heroku account
<pre><code>heroku login</code></pre> 



3. Create a new Git repository

Initialize a git repository in a new or existing directory

<pre><code>git init
heroku git:remote -a portfolio-app-mern
</code></pre> 

4. Deploy your application.<br>

Commit your code to the repository and deploy it to Heroku using Git.

<pre><code>git add .
git commit -am "make it better"
git push heroku master</code></pre> 

5. Existing Git repository

For existing repositories, simply add the heroku remote

<pre><code>heroku git:remote -a portfolio-app-mern</code></pre> 