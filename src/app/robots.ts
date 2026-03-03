import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/workshopuri-martie/multumim", "/multumim", "/coaching-individual/multumim"],
    },
    sitemap: "https://www.olimpiamoldoveanu.ro/sitemap.xml",
  };
}
