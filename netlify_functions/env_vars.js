const { GOOGLE_ANALYTICS_ID } = process.env

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: GOOGLE_ANALYTICS_ID
  }
}

const getResponse = myxml => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
  },
  body: response,
});

exports.handler = function(event, context, callback) {
  const response = getResponse(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  
  
  <url>
    <loc>https://www.shreyankjadiya.tech/</loc>
    <lastmod>2019-11-06T22:07:58+00:00</lastmod>
  </url>
  
  
  </urlset>`);
  callback(null, response)
}