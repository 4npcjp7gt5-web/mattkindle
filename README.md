# Matt Kindle

The Astro source for [mattkindle.com](https://mattkindle.com).

## Local development

```sh
npm install
npm run dev
```

## Deployment

Push to `main`. The included GitHub Actions workflow builds the Astro project and publishes it to GitHub Pages. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**. The `public/CNAME` file preserves the `mattkindle.com` custom domain.
