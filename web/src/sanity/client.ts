import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "sl988abo",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: true,
});
