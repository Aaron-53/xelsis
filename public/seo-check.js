// Quick SEO verification script
// Run this in browser console to check SEO implementation

console.log("🔍 SEO Implementation Verification");
console.log("=================================");

// Check page title
console.log("📄 Page Title:", document.title);

// Check meta description
const metaDesc = document.querySelector('meta[name="description"]');
console.log("📝 Meta Description:", metaDesc ? metaDesc.content : "Not found");

// Check canonical URL
const canonical = document.querySelector('link[rel="canonical"]');
console.log("🔗 Canonical URL:", canonical ? canonical.href : "Not found");

// Check Open Graph tags
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDesc = document.querySelector('meta[property="og:description"]');
const ogImage = document.querySelector('meta[property="og:image"]');
console.log("📱 Open Graph Title:", ogTitle ? ogTitle.content : "Not found");
console.log(
  "📱 Open Graph Description:",
  ogDesc ? ogDesc.content : "Not found"
);
console.log("📱 Open Graph Image:", ogImage ? ogImage.content : "Not found");

// Check structured data
const structuredData = document.querySelectorAll(
  'script[type="application/ld+json"]'
);
console.log("📊 Structured Data Scripts Found:", structuredData.length);

structuredData.forEach((script, index) => {
  try {
    const data = JSON.parse(script.textContent);
    console.log(
      `📊 Schema ${index + 1}:`,
      data["@type"],
      data.name || data.url
    );
  } catch (e) {
    console.error(`❌ Error parsing schema ${index + 1}:`, e);
  }
});

// Check robots meta
const robots = document.querySelector('meta[name="robots"]');
console.log("🤖 Robots:", robots ? robots.content : "Not found");

// Check language
const lang = document.documentElement.lang;
console.log("🌍 Language:", lang || "Not set");

// Performance check
if (window.performance) {
  const loadTime =
    window.performance.timing.loadEventEnd -
    window.performance.timing.navigationStart;
  console.log("⚡ Page Load Time:", loadTime + "ms");
}

console.log("=================================");
console.log("✅ SEO verification complete!");
console.log("📝 Check browser Network tab for any 404 errors");
console.log(
  "🔍 Test with Google Rich Results Test: https://search.google.com/test/rich-results"
);
console.log(
  "📱 Test mobile-friendly: https://search.google.com/test/mobile-friendly"
);
