import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Sanjeed's Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: [{
      provider: "posthog",
      apiKey: "phc_qJxEI6GyeugJTjIibb1MSCecEiPaE4gYSkMUXk7nx04",
      host: "https://us.i.posthog.com", 
    },
    {
      provider: "goatcounter",
      websiteId: "sanjeed",
      host: "goatcounter.com",
      scriptSrc: "https://gc.zgo.at/count.js"
    }],
    locale: "en-US",
    baseUrl: "sanjeed.in",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfdf7",
          lightgray: "#f3f2e9",
          gray: "#95a096",
          darkgray: "#3d463e",
          dark: "#232a24",
          secondary: "#5f7a62",
          tertiary: "#8fa891",
          highlight: "rgba(95, 122, 98, 0.15)",
          textHighlight: "#f0e6a3aa",
        },
        darkMode: {
          light: "#1a1d19",
          lightgray: "#2a332b",
          gray: "#7c8a7d",
          darkgray: "#e6e8e3",
          dark: "#fafbf7",
          secondary: "#9cb59e",
          tertiary: "#b8ccb9",
          highlight: "rgba(156, 181, 158, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ 
        markdownLinkResolution: "shortest",
        prettyLinks: true,
        openLinksInNewTab: true,
        lazyLoad: true,
        externalLinkIcon: false,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
