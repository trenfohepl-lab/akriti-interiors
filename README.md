# Akriti Interiors: demo website

Plain static site (HTML + CSS + JS). No build step, so it deploys on Vercel as-is.

## Deploy (GitHub + Vercel)
1. Create a new GitHub repo and upload everything in this folder (keep `index.html` at the repo root).
2. On vercel.com: Add New > Project > import the repo. Framework Preset: **Other**. Leave build command and output directory empty. Deploy.
3. If your Vercel URL is not `akriti-interiors.vercel.app`, update the URL in `index.html` (canonical, og tags, JSON-LD), `robots.txt` and `sitemap.xml`.

## Edit content
Everything (phone, address, projects, services, photos, testimonials) is in `js/config.js`.
Sample photos come from Unsplash. Replace them with real Akriti project photos in `assets/`.

## Future backend
Set `enquiryEndpoint` in `js/config.js` to POST enquiries to your own API or a form service. Projects/services/testimonials in config.js are plain arrays that can later be fetched from an admin API.
