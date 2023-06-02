// keystatic.config.tsx
import { config, collection, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
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
      path: 'src/content/_homepage',
      schema: {
        headline: fields.text({ label: 'Headline' }),
        introText: fields.text({ label: 'Intro Text', multiline: true }),
      },
    }),
  },
})
