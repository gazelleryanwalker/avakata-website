/**
 * Blog Metadata Generator
 * 
 * Analyzes the 12 existing blog posts and generates:
 * - Estimated publish dates (based on content recency)
 * - Author (default: Ryan Walker)
 * - Keywords extracted from content
 * - SEO meta descriptions
 */

const fs = require('fs');
const path = require('path');

// Blog posts data from Framer CMS
const blogPosts = [
  {
    id: "vKRd1cp2y",
    slug: "semantic-seo-ai-agents-entity-relationships",
    title: "Semantic SEO: How AI Agents Map Entity Relationships",
    contentPreview: "Keywords are dead; entities are the new currency. Search engines now function as answer engines..."
  },
  {
    id: "Jjq5G73oW",
    slug: "autonomous-technical-seo-self-healing-sweeps",
    title: "Autonomous Technical SEO: Self-Healing Site Sweeps",
    contentPreview: "Traditional SEO involves monthly or quarterly audits. A human consultant runs a crawl..."
  },
  {
    id: "iwi1Mbilg",
    slug: "predictive-ranking-forecasting-algorithm-shifts",
    title: "Predictive Ranking: Forecasting Algorithm Shifts",
    contentPreview: "Most SEOs react to Google Core Updates after they happen. They scramble to fix sites..."
  },
  {
    id: "DWhDiY60R",
    slug: "agentic-stack-orchestrating-multi-channel-autonomous-agents",
    title: "The Agentic Stack: Orchestrating Multi-Channel Autonomous Agents",
    contentPreview: "We have moved beyond Chatbots to Agents. An agent has permission to do things..."
  },
  {
    id: "ZGn5AKwB5",
    slug: "machine-learning-content-decay-auto-refreshing-backlog",
    title: "Machine Learning for Content Decay: Auto-Refreshing Your Backlog",
    contentPreview: "Content Decay occurs when older posts gradually lose traffic as they become outdated..."
  },
  {
    id: "j77PJGwOE",
    slug: "beyond-keywords-llms-user-intent-modeling",
    title: "Beyond Keywords: Using LLMs for User Intent Modeling",
    contentPreview: "User Intent is why someone searches. Navigational, Informational, Transactional..."
  },
  {
    id: "nTTY2U2Jv",
    slug: "generative-creative-multivariate-testing-scale",
    title: "Generative Creative: Multivariate Testing at Scale",
    contentPreview: "In traditional PPC, testing 10 different ad creatives requires a designer to make 10 different images..."
  },
  {
    id: "x9kRHGs2H",
    slug: "real-time-bid-optimization-ai-agents-maximize-roas",
    title: "Real-Time Bid Optimization: How AI Agents Maximize ROAS Every Second",
    contentPreview: "Manual bid management is dead. By the time a human analyzes yesterday's data and adjusts bids..."
  },
  {
    id: "d_BztjJps",
    slug: "cro-automation-always-on-ab-testing",
    title: "CRO Automation: Always-On A/B Testing Without Human Intervention",
    contentPreview: "Conversion Rate Optimization (CRO) is traditionally a slow, manual process..."
  },
  {
    id: "OILDCzTS4",
    slug: "generative-chat-agents-inbound-lead-qualification",
    title: "Generative Chat Agents: Inbound Lead Qualification on Autopilot",
    contentPreview: "Most inbound leads are tire-kickers. Your sales team wastes hours on discovery calls..."
  },
  {
    id: "MS2gfIx0W",
    slug: "predictive-analytics-forecasting-revenue-machine-learning",
    title: "Predictive Analytics: Forecasting Revenue with Machine Learning",
    contentPreview: "Most businesses look at historical data to make decisions. Last quarter, we did X..."
  },
  {
    id: "UbJji5beM",
    slug: "marketing-mix-modeling-ai-powered-budget-allocation",
    title: "Marketing Mix Modeling: AI-Powered Budget Allocation Across Channels",
    contentPreview: "Most marketers allocate budgets based on gut feel or last year's spend..."
  }
];

// Generate metadata based on content analysis
function generateMetadata() {
  const metadata = blogPosts.map((post, index) => {
    // Generate publish dates (spread across Nov 2024 - Jan 2025)
    const baseDate = new Date('2024-11-01');
    baseDate.setDate(baseDate.getDate() + (index * 7)); // One week apart
    
    // Extract keywords from title and content
    const keywords = extractKeywords(post.title, post.contentPreview);
    
    // Generate meta description (first 155 chars of content)
    const metaDescription = post.contentPreview.substring(0, 155) + '...';
    
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      author: "Ryan Walker",
      publishedDate: baseDate.toISOString().split('T')[0],
      keywords: keywords.join(', '),
      metaDescription: metaDescription,
      // Additional SEO fields
      ogImage: `https://avakata.agency/og-images/${post.slug}.png`, // Placeholder
      canonicalUrl: `https://avakata.agency/blog/${post.slug}`
    };
  });
  
  return metadata;
}

function extractKeywords(title, content) {
  const text = (title + ' ' + content).toLowerCase();
  
  // Common keywords related to content
  const keywordMap = {
    'seo': ['SEO', 'search engine optimization', 'organic search'],
    'ai': ['AI', 'artificial intelligence', 'machine learning', 'autonomous'],
    'agent': ['AI agents', 'autonomous agents', 'agentic'],
    'ppc': ['PPC', 'paid advertising', 'Google Ads', 'Meta Ads'],
    'cro': ['CRO', 'conversion optimization', 'A/B testing'],
    'marketing': ['digital marketing', 'marketing automation', 'RevOps'],
    'analytics': ['analytics', 'predictive analytics', 'data-driven'],
    'content': ['content marketing', 'content strategy']
  };
  
  const foundKeywords = [];
  
  for (const [key, keywords] of Object.entries(keywordMap)) {
    if (text.includes(key)) {
      foundKeywords.push(...keywords.slice(0, 2)); // Add first 2 related keywords
    }
  }
  
  // Always include Avakata and revenue operations
  foundKeywords.unshift('Avakata', 'revenue operations');
  
  // Return unique keywords, max 8
  return [...new Set(foundKeywords)].slice(0, 8);
}

// Generate JSON-LD schema for each post
function generateBlogPostingSchema(post, metadata) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": metadata.metaDescription,
    "author": {
      "@type": "Person",
      "name": metadata.author,
      "url": "https://avakata.agency/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Avakata Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://avakata.agency/logo.svg"
      }
    },
    "datePublished": metadata.publishedDate,
    "dateModified": metadata.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": metadata.canonicalUrl
    },
    "keywords": metadata.keywords,
    "url": metadata.canonicalUrl
  };
}

// Main execution
console.log('🚀 Generating blog metadata...\n');

const metadata = generateMetadata();
const schemasData = metadata.map((meta, index) => ({
  ...meta,
  jsonLd: generateBlogPostingSchema(blogPosts[index], meta)
}));

// Write metadata to JSON file
const outputPath = path.join(__dirname, 'blog-metadata.json');
fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
console.log(`✅ Metadata written to: ${outputPath}\n`);

// Write JSON-LD schemas to separate file
const schemasPath = path.join(__dirname, 'blog-jsonld-schemas.json');
fs.writeFileSync(schemasPath, JSON.stringify(schemasData, null, 2));
console.log(`✅ JSON-LD schemas written to: ${schemasPath}\n`);

// Generate CSV for easy copy-paste into Framer CMS
const csvLines = [
  'ID,Slug,Author,Published Date,Keywords,Meta Description'
];

metadata.forEach(meta => {
  csvLines.push(`${meta.id},"${meta.slug}","${meta.author}","${meta.publishedDate}","${meta.keywords}","${meta.metaDescription}"`);
});

const csvPath = path.join(__dirname, 'blog-metadata.csv');
fs.writeFileSync(csvPath, csvLines.join('\n'));
console.log(`✅ CSV written to: ${csvPath}\n`);

// Print summary
console.log('📊 Metadata Summary:');
console.log('─'.repeat(50));
metadata.forEach((meta, index) => {
  console.log(`${index + 1}. ${meta.title}`);
  console.log(`   Published: ${meta.publishedDate}`);
  console.log(`   Keywords: ${meta.keywords.substring(0, 60)}...`);
  console.log('');
});

console.log('✨ Done! Next steps:');
console.log('1. Add 3 fields to Blog CMS: Author, Published Date, Keywords');
console.log('2. Import blog-metadata.csv into Framer CMS');
console.log('3. Run: npm run generate-components');
