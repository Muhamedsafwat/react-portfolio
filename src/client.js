import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "tacre3zo",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skcsfpByWdbC4PTMPo2WjaVA7niKvbvhcgmWd2aXLcZLgEH9DajZH6DZvPL0FRZGzwZMddikj8D2cFEmcHDvRDxai75MlitJwK25DRH1IG7g7YYQMsM0NlkEFIC2nMSNQZrVn6datZ8veiu3z8oGWpiryGYVp0J9xXmfVxMe2EedgBWbPUdL",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
