export const sanitizeInput = (val: string): string => {
  return val
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "");
};

export const HONEYPOT_FIELD = "website_url";
