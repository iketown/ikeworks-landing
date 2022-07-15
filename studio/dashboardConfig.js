export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62d1905a44bb7b3eddaad92a',
                  title: 'Sanity Studio',
                  name: 'ikeworks-landing-studio',
                  apiId: '7db12796-dc19-49c7-844d-8a08cc4c712e'
                },
                {
                  buildHookId: '62d1905a8083e13e412ea922',
                  title: 'Landing pages Website',
                  name: 'ikeworks-landing',
                  apiId: 'ca6625f4-c812-4361-8abc-58eb59739700'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iketown/ikeworks-landing',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ikeworks-landing.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
