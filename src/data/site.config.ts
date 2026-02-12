export const siteConfig = {
  registryUrl: process.env.REGISTRY_URL ?? "https://piperubio-shadcn-registry.vercel.app",
};

export type SiteConfig = typeof siteConfig;
