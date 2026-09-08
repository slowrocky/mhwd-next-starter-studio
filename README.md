# Sanity Clean Content Studio

## Frontend types

Run `npm run typegen` to extract the local schema and generate types for the
sibling `../mhwd-next-starter` frontend. No content fetch or API token is needed
for type generation. Dependencies must be installed in both projects.

Configuration lives in `sanity.cli.ts`. Schema extraction and TypeGen also run
automatically during `npm run dev`. `npm run build` extracts the schema, then
the `postbuild` script generates types. Restart an existing dev server after
changing this configuration.

Queries: `../mhwd-next-starter/src/sanity/lib/queries.ts`.
Generated types: `../mhwd-next-starter/src/sanity/types.ts` (include in frontend
commits; do not edit manually). The intermediate `schema.json` is ignored here.

Required field validation is reflected in the generated types. These types
assume published, validated content, not incomplete draft previews. Update the
relative paths in `sanity.cli.ts` if either sibling folder is renamed.

## Site settings

`Nastavenia webu` is a singleton with the fixed ID `siteSettings`. It contains
the site identity, contact details, navigation and social links consumed by the
sibling frontend. The custom Studio structure exposes one settings item and
prevents duplicate settings documents from appearing in normal document lists.

For a new client, create it from this item, complete each section and publish.
The frontend falls back to its checked-in starter defaults until the document is
published, so a new project still builds without CMS content.

## Services

`Služba` is the reusable service model for the frontend's `/sluzby` page. A
published service appears on the site only when its status is `Aktívna`; use
`Skrytá` to keep content in Studio without publishing it to visitors. Active
services link from `/sluzby` to `/sluzby/[slug]`.

## References

`Referencia` is the reusable case study model used by the frontend's
`/referencie` page. Its Sanity type is `caseStudy` because `reference` is a
reserved Sanity type name. Published records with status `Aktívna` appear in
the listing, detail pages and sitemap; `Skrytá` records remain available in
Studio without being exposed publicly.

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
