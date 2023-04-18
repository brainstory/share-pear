<p align="center">
    <img alt="Contenda: Upload original content. Create unlimited transformations." src="./pear.svg" width="400px">
  
  <h2 align="center">Share Pear: Share like a pear 🍐</h2>
</p>

Share Pear is a platform built with Astro, Netlify On-Demand Builders, and Edge Functions to consume markdown content and generate public HTML pages from that content!

[![Netlify Status](https://api.netlify.com/api/v1/badges/b15d7292-3501-4174-9510-d09e1dcae966/deploy-status)](https://app.netlify.com/sites/share-pear/deploys)

### 🏃‍♂️ How to run the repo locally

1. Clone the repo
2. Run `npm run dev`
3. Navigate to `localhost:3000/blog/whatever`

You'll have to hard-code in some markdown to see how a blog looks.

### 🪄 How to use the site in general

1. Query `https://share.contenda.co/blog/[SOMETHING]` with a GET request
2. The headers of the GET request have to include `markdown: "blah"` where
   `blah` is the blog content

[Example request in Postman](https://documenter.getpostman.com/view/24192581/2s93RNyEfq)

### 💖 Learn more + Support

We are super grateful that you've checked out Share Pear. Any ⭐ on the repo, or upvotes at the following links, would be greatly appreciated!

[Here is how this repository was built](https://dev.to/contenda/using-netlify-on-demand-builders-astro-edge-functions-to-make-a-blog-sharing-generator-20lf), and [our announcement post for the feature](https://dev.to/contenda/announcing-public-sharing-share-your-drafts-with-the-world-on-contenda-4oeg)!

<a href="https://www.producthunt.com/posts/share-pear?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-share&#0045;pear" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=389925&theme=light" alt="Share&#0032;Pear - An&#0032;open&#0032;source&#0044;&#0032;public&#0032;content&#0045;sharing&#0032;generator | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
