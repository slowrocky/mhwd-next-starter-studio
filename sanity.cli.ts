import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '1aawatec',
    dataset: 'production'
  },
  schemaExtraction: {
    enabled: true,
    enforceRequiredFields: true,
    path: './schema.json',
  },
  typegen: {
    enabled: true,
    path: '../mhwd-next-starter/src/sanity/lib/queries.ts',
    schema: './schema.json',
    generates: '../mhwd-next-starter/src/sanity/types.ts',
    overloadClientMethods: true,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
