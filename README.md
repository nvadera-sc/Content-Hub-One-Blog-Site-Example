# Content Hub Blog Site Sample
This is a [Next.JS](https://nextjs.org) sample blog site that uses Sitecore Content Hub One for it's content.

By default, it will display the latest 20 blogs that have been published.

An example is deployed at https://content-hub-one-blog-site-sample.vercel.app.

## Getting Started
### Prerequisites
* Clone this repository.
* Get A Content Hub One environment.
* Create a new Content Type, with a Rich Text field named "Body"

### Configuration
Update the .env file, setting `CHONE_OAUTH_CLIENT_ID` and `CHONE_OAUTH_CLIENT_SECRET` to the OAuth Client ID and Client secret respectively from Content Hub One (this can be obtained by going to Settings > OAuth Client) and setting `CHONE_POSTS_CONTENT_TYPE_ID` to the ID for the Content Type you created earlier.

### Run
Start the website by calling

```
npm run dev
```