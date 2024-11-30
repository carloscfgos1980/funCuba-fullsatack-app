## Fun Cuba API

# 26/11/2024

1. Copy files to client folder
2. Copy files to server folder
3. Make the changes in client app for the URL to match the server
4. Make the changes in client and server package.json for the scripts to be run up the top level

It is working!!!!!

# 27/11/2024

**CI/CD**
.github/node.yml

I tried several scripts but I could not manage to make work "supercharge" in order to mock the databse. So I deleted test command. It works!

**Docker**
Login CLI
docker login -u carlosinfante1980

- This ask password that I have save it somewhere

- Check docker images
  docker ps

- Load the app as an image into Docker:

docker build . -t carlosinfante1980/fun-cuba

docker run -it -p:8000:8000 carlosinfante1980/fun-cuba

http://localhost:8000

It works!

I deploy with Sliplane.app. It's online!
https://carlosinfante1980-fun-cuba.sliplane.app

# 30/11/2024

The web is online with the DNs that I bought!
https://www.funcuba.it.com/
