<p align="center">
    <img alt="Contenda: Upload original content. Create unlimited transformations." src="./pear.svg" width="400px">
  
  <h2 align="center">Share Pear: Share like a pear 🍐</h2>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/b15d7292-3501-4174-9510-d09e1dcae966/deploy-status)](https://app.netlify.com/sites/share-pear/deploys)

### How to run the repo locally

1. Clone the repo
2. Run `npm run dev`
3. Navigate to `localhost:3000/share/whatever`

You'll have to hard-code in some markdown to see how a blog looks.

### How to use the site in general

1. Query `https://share-pear.netlify.app/share/[SOMETHING]` with a GET request
2. The headers of the GET request have to include `markdown: "blah"` where
   `blah` is the blog content

[Example request in Postman](https://documenter.getpostman.com/view/24192581/2s93RNyEfq)
