import assert from "node:assert";

const BASE_URL = "http://localhost:3005";

async function runTests() {
  console.log("=== NOVASPARK COMPREHENSIVE END-TO-END VERIFICATION ===\n");
  let passed = 0;
  let total = 0;

  async function test(name, fn) {
    total++;
    try {
      await fn();
      console.log(`✅ [PASS] ${name}`);
      passed++;
    } catch (err) {
      console.error(`❌ [FAIL] ${name}:`, err.message);
    }
  }

  // 1. Homepage & 15 Reference Sections
  await test("Homepage returns 200 and loads successfully with all 15 reference sections", async () => {
    const res = await fetch(`${BASE_URL}/`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    
    // Check key reference sections & content
    assert(html.includes("Turn Digital Attention"), "Hero headline line 1 missing");
    assert(html.includes("Into Business Growth"), "Hero headline line 2 missing");
    assert(html.includes("homepage_3d.webp"), "Hero 3D visual missing");
    assert(html.includes("+240%"), "Results metric +240% missing");
    assert(html.includes("+180%"), "Results metric +180% missing");
    assert(html.includes("3.8X"), "Results metric 3.8X missing");
    assert(html.includes("Your Business, Our Strategy"), "Brand intro thesis missing");
    assert(html.includes("Connected Ecosystem"), "Growth ecosystem section missing");
    assert(html.includes("Search Engine Optimization"), "Services matrix missing");
    assert(html.includes("The NovaSpark Difference") || html.includes("Why Ambitious Brands Choose Us"), "Why NovaSpark section missing");
    assert(html.includes("How We Engineer Predictable Outcomes") || html.includes("The Growth Framework"), "6-Phase roadmap section missing");
    assert(html.includes("Selected Work") || html.includes("Selected Case Studies"), "Selected work section missing");
    assert(html.includes("Industries We Specialize In") || html.includes("Sector Expertise"), "Industries section missing");
    assert(html.includes("Leadership") && html.includes("Shankarsan Nayak"), "Leadership team missing");
    assert(html.includes("Testimonials") || html.includes("Medallion House"), "Testimonials missing");
    assert(html.includes("Growth Intelligence") || html.includes("Playbooks"), "Insights/blog missing");
    assert(html.includes("Frequently Asked Questions"), "FAQ section missing");
    assert(html.includes("Ready to grow your business online?"), "Pre-footer CTA missing");
    assert(html.includes("Bhubaneswar, 751015, Odisha"), "Footer address missing");
    assert(html.includes("+91 8280788689"), "Contact phone missing");
  });

  // 2. About Page
  await test("About page returns 200 and contains agency narrative", async () => {
    const res = await fetch(`${BASE_URL}/about`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Built on Ideas"), "About hero headline missing");
    assert(html.includes("Driven by Growth"), "About hero subline missing");
    assert(html.includes("Shankarsan Nayak"), "Founder/CEO missing from About");
    assert(html.includes("Creativity + Technology + Strategy = Performance"), "Philosophy formula missing");
  });

  // 3. Services Page
  await test("Services page returns 200 and contains all 8 capability breakdowns", async () => {
    const res = await fetch(`${BASE_URL}/services`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Everything Your Brand"), "Services hero missing");
    assert(html.includes("Search Engine Optimization (SEO)"), "SEO section missing");
    assert(html.includes("Google Ads"), "Google Ads missing");
    assert(html.includes("Meta Ads"), "Meta Ads missing");
    assert(html.includes("Website Design"), "Web dev missing");
    assert(html.includes("Local SEO"), "Local SEO missing");
  });

  // 4. Case Studies Directory & Dynamic Routes
  await test("Case Studies page returns 200 with category filters", async () => {
    const res = await fetch(`${BASE_URL}/case-studies`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Real Work"), "Case studies hero line 1 missing");
    assert(html.includes("Meaningful Growth"), "Case studies hero line 2 missing");
    assert(html.includes("Medallion House"), "Medallion House project missing");
    assert(html.includes("Ekatraa"), "Ekatraa project missing");
  });

  await test("Case Study dynamic slug route returns 200 with deep dive metrics", async () => {
    const res = await fetch(`${BASE_URL}/case-studies/medallion-house`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Medallion House"), "Project title missing");
    assert(html.includes("+240%"), "Project metric missing");
    assert(html.includes("The Core Challenge"), "Challenge section missing");
    assert(html.includes("Our Strategy"), "Strategy section missing");
    assert(html.includes("Deliverables Handled by NovaSpark"), "Deliverables section missing");
  });

  // 5. Contact Page
  await test("Contact page returns 200 with interactive inquiry form", async () => {
    const res = await fetch(`${BASE_URL}/contact`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Talk About"), "Contact hero line 1 missing");
    assert(html.includes("Your Next Big Move"), "Contact hero line 2 missing");
    assert(html.includes("novasparkdmagency@gmail.com"), "Official email missing");
    assert(html.includes("+91 8280788689"), "Official phone missing");
    assert(html.includes("Send My Inquiry"), "Submit button text missing");
  });

  // 6. Lead Submission API
  await test("POST /api/contact validates and saves lead to SQLite database", async () => {
    const testEmail = `lead_${Date.now()}@example.com`;
    const payload = {
      name: "Ananya Deshmukh",
      email: testEmail,
      phone: "+91 9876543210",
      company: "Zenith Retail India",
      website: "https://zenithretail.in",
      service: "Google Ads & Performance Marketing",
      budget: "₹2,50,000 – ₹5,00,000 / month",
      message: "We need an integrated omnichannel Google Ads and Meta Ads growth campaign.",
      honeypot: ""
    };

    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    assert.strictEqual(res.status, 200);
    const json = await res.json();
    assert.strictEqual(json.success, true);
    assert(json.leadId, "Returned leadId should exist");

    // Test duplicate detection
    const dupRes = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    assert.strictEqual(dupRes.status, 429);
    const dupJson = await dupRes.json();
    assert(dupJson.error.includes("recently") || dupJson.error.includes("already"), "Duplicate detection failed");
  });

  // 7. Admin Authentication & CRM API
  await test("Admin CRM login, data retrieval, and CSV export", async () => {
    // Attempt invalid login
    const failRes = await fetch(`${BASE_URL}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "admin@novaspark.in", password: "wrong-password" })
    });
    assert.strictEqual(failRes.status, 401);

    // Attempt valid login
    const loginRes = await fetch(`${BASE_URL}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "admin@novaspark.in", password: "NovaSpark@2026!" })
    });
    assert.strictEqual(loginRes.status, 200);
    const loginJson = await loginRes.json();
    assert.strictEqual(loginJson.success, true);

    const cookieHeader = loginRes.headers.get("set-cookie");
    assert(cookieHeader && cookieHeader.includes("novaspark_admin_token"), "Admin JWT cookie missing");

    // Fetch leads using auth cookie
    const leadsRes = await fetch(`${BASE_URL}/api/admin/leads`, {
      headers: { Cookie: cookieHeader }
    });
    assert.strictEqual(leadsRes.status, 200);
    const leadsData = await leadsRes.json();
    assert(Array.isArray(leadsData.leads), "Leads array missing");
    assert(leadsData.total >= 1, "Should have at least 1 lead");

    // Fetch stats
    const statsRes = await fetch(`${BASE_URL}/api/admin/stats`, {
      headers: { Cookie: cookieHeader }
    });
    assert.strictEqual(statsRes.status, 200);
    const statsData = await statsRes.json();
    assert(statsData.stats && typeof statsData.stats.total === "number", "stats.total missing");

    // Export CSV
    const exportRes = await fetch(`${BASE_URL}/api/admin/leads/export`, {
      headers: { Cookie: cookieHeader }
    });
    assert.strictEqual(exportRes.status, 200);
    const csv = await exportRes.text();
    assert(csv.includes("Lead ID") && csv.includes("Full Name") && csv.includes("Business Email"), "CSV headers missing");
  });

  // 8. Dedicated Six Core Service Landing Pages
  await test("Service 1: /services/performance-marketing loads with Google, Meta, LinkedIn Ads", async () => {
    const res = await fetch(`${BASE_URL}/services/performance-marketing`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Performance Marketing"), "Title missing");
    assert(html.includes("Google Ads (Search, PMax") || html.includes("Google Ads"), "Google Ads sub-discipline missing");
    assert(html.includes("Meta Ads (Facebook") || html.includes("Meta Ads"), "Meta Ads sub-discipline missing");
    assert(html.includes("LinkedIn Ads (B2B") || html.includes("LinkedIn Ads"), "LinkedIn Ads sub-discipline missing");
    assert(html.includes("4.8X"), "Peak ROAS metric missing");
    assert(html.includes("consultation-form"), "Inquiry form anchor missing");
  });

  await test("Service 2: /services/seo-aeo-geo loads with SEO, Answer Engine, and Generative Engine", async () => {
    const res = await fetch(`${BASE_URL}/services/seo-aeo-geo`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("SEO, AEO") || html.includes("SEO, AEO &amp; GEO"), "Title missing");
    assert(html.includes("Search Engine Optimization"), "SEO sub-discipline missing");
    assert(html.includes("Answer Engine Optimization"), "AEO sub-discipline missing");
    assert(html.includes("Generative Engine Optimization"), "GEO sub-discipline missing");
    assert(html.includes("ChatGPT") || html.includes("Perplexity"), "AI search engines missing");
    assert(html.includes("+180%"), "Organic traffic lift metric missing");
  });

  await test("Service 3: /services/social-media-marketing loads with vertical video and DM funnels", async () => {
    const res = await fetch(`${BASE_URL}/services/social-media-marketing`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Social Media Marketing"), "Title missing");
    assert(html.includes("Short-Form Video") || html.includes("Reels"), "Short form video missing");
    assert(html.includes("Editorial Brand Curation"), "Brand curation missing");
    assert(html.includes("Inbound DM Funnels"), "DM funnels missing");
    assert(html.includes("+410%"), "Audience reach metric missing");
  });

  await test("Service 4: /services/content-marketing loads with BOFU guides and thought leadership", async () => {
    const res = await fetch(`${BASE_URL}/services/content-marketing`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Content Marketing"), "Title missing");
    assert(html.includes("Bottom-of-Funnel") || html.includes("BOFU"), "BOFU comparison missing");
    assert(html.includes("Thought Leadership"), "Thought leadership missing");
    assert(html.includes("Semantic Whitepapers"), "Whitepapers missing");
    assert(html.includes("3.2X"), "Pipeline velocity lift missing");
  });

  await test("Service 5: /services/web-design-development loads with Next.js, UI/UX, and CRO", async () => {
    const res = await fetch(`${BASE_URL}/services/web-design-development`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Web Design &amp; Development") || html.includes("Web Design & Development"), "Title missing");
    assert(html.includes("Bespoke UI/UX"), "UI/UX section missing");
    assert(html.includes("Next.js"), "Next.js engineering missing");
    assert(html.includes("CRO Landing Pages"), "CRO landing pages missing");
    assert(html.includes("99/100"), "Core Web Vitals score missing");
  });

  await test("Service 6: /services/amazon-marketing-ppc loads with Amazon PPC, DSP, and Buy Box defense", async () => {
    const res = await fetch(`${BASE_URL}/services/amazon-marketing-ppc`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();
    assert(html.includes("Amazon Marketing") || html.includes("Amazon Marketing &amp; PPC"), "Title missing");
    assert(html.includes("Amazon PPC"), "Amazon PPC missing");
    assert(html.includes("Amazon DSP"), "Amazon DSP missing");
    assert(html.includes("Buy Box Defense"), "Buy Box defense missing");
    assert(html.includes("-32%"), "ACoS reduction metric missing");
  });

  // 9. Sitemaps & Robots.txt
  await test("Robots.txt and Sitemap.xml are dynamically generated and valid", async () => {
    const robotsRes = await fetch(`${BASE_URL}/robots.txt`);
    assert.strictEqual(robotsRes.status, 200);
    const robotsText = await robotsRes.text();
    assert(robotsText.includes("User-Agent"), "User-Agent missing in robots.txt");
    assert(robotsText.includes("Disallow: /admin"), "/admin should be disallowed");

    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
    assert.strictEqual(sitemapRes.status, 200);
    const sitemapText = await sitemapRes.text();
    assert(sitemapText.includes("<urlset"), "Sitemap XML schema missing");
    assert(sitemapText.includes("/case-studies/medallion-house"), "Case studies missing from sitemap");
    assert(sitemapText.includes("/services/performance-marketing"), "Performance marketing missing from sitemap");
    assert(sitemapText.includes("/services/seo-aeo-geo"), "SEO AEO GEO missing from sitemap");
    assert(sitemapText.includes("/services/amazon-marketing-ppc"), "Amazon PPC missing from sitemap");
  });

  console.log(`\n========================================`);
  console.log(`RESULTS: ${passed}/${total} test suites PASSED.`);
  console.log(`========================================\n`);

  if (passed !== total) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error("Test execution aborted:", err);
  process.exit(1);
});
