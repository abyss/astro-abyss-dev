import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: process.env.KEYSTATIC_STORAGE_KIND === 'github'
      ? 'github'
      : 'local',
    ...(process.env.KEYSTATIC_STORAGE_KIND === 'github'
      ? {
          repo: {
            owner: process.env.KEYSTATIC_GITHUB_REPO_OWNER!,
            name: process.env.KEYSTATIC_GITHUB_REPO_NAME!,
          },
        }
      : {}),
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.fields.value.value || 'Tag',
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    shows: collection({
      label: 'Shows',
      slugField: 'title',
      path: 'src/content/shows/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle' }),
        icon: fields.text({ label: 'Icon (emoji or name)' }),
        order: fields.number({ label: 'Display Order' }),
        highlights: fields.array(fields.text({ label: 'Highlight' }), {
          label: 'Highlights',
          itemLabel: (props) => props.fields.value.value || 'Highlight',
        }),
        description: fields.markdoc({ label: 'Description' }),
      },
    }),

    testimonials: collection({
      label: 'Testimonials',
      slugField: 'name',
      path: 'src/content/testimonials/*',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role / Company' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        featured: fields.checkbox({ label: 'Featured on Homepage', defaultValue: false }),
      },
    }),
  },

  singletons: {
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings',
      schema: {
        tagline: fields.text({ label: 'Hero Tagline' }),
        subtagline: fields.text({ label: 'Hero Sub-tagline', multiline: true }),
        contactEmail: fields.text({ label: 'Contact Email' }),
        formspreeId: fields.text({ label: 'Formspree Form ID' }),
      },
    }),
  },
});
