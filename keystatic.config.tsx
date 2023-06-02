// keystatic.config.tsx
import {
  config,
  collection,
  fields,
  singleton,
  type LocalConfig,
  type GitHubConfig,
} from '@keystatic/core'

// Storage strategy
const storage: LocalConfig['storage'] | GitHubConfig['storage'] =
  import.meta.env.MODE === 'development'
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: {
          owner: 'simonswiss',
          name: 'keystatic-astro-2.5',
        },
      }

export default config({
  storage,
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'src/content/posts/*',
      slugField: 'title',
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
          },
        }),
      },
    }),
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        headline: fields.text({ label: 'Headline' }),
        introText: fields.text({ label: 'Intro Text', multiline: true }),
      },
    }),
  },
})
