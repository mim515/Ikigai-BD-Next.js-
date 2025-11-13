import {MetadataRoute} from 'next';

export default function robots(){
  const baseUrl = "https://www.ikigaibd.com";
  return {
    rules: [
      {
      userAgent: "*",
      allow: "/",
      disallow:["/api/"],
    },
    {
      userAgent: "Googlebot",
      allow: "/",
      disallow:["/terms-and-conditions/"],
    },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}