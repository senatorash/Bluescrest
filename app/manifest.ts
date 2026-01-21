import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "bluecrest-attorneys-app",
    name: "Bluecrest Attorneys",
    short_name: "Bluecrest",
    description:
      "Professional legal services and attorney management from Bluecrest.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1f44",
    dir: "ltr",
    lang: "en",
    categories: ["business", "legal", "productivity"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    prefer_related_applications: false,
  };
}
