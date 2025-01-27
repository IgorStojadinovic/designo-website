const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// Define your site base URL
const WEBSITE_URL = "https://yourwebsite.com"; // Replace with your live domain

// Define your static routes
const routes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/app-design", changefreq: "weekly", priority: 0.8 },
    { url: "/web-design", changefreq: "weekly", priority: 0.8 },
    { url: "/graphic-design", changefreq: "weekly", priority: 0.8 },
    { url: "/locations", changefreq: "monthly", priority: 0.6 },
    { url: "/contact", changefreq: "monthly", priority: 0.6 },
];

async function generateSitemap() {
    // Create a sitemap stream
    const sitemap = new SitemapStream({ hostname: WEBSITE_URL });

    // Add each route to the sitemap
    routes.forEach((route) => {
        sitemap.write(route);
    });

    // Close the stream
    sitemap.end();

    // Write to a file in the 'public' directory
    const sitemapPath = path.resolve(__dirname, "public", "sitemap.xml");
    streamToPromise(sitemap).then((data) => createWriteStream(sitemapPath).write(data));

    console.log("✅ Sitemap generated successfully at public/sitemap.xml");
}

generateSitemap();