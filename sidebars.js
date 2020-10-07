module.exports = {
  someSidebar: {
    "Getting Started": [
      'getting-started/introduction',
      'getting-started/fullstack-example',
    ],
    "Anatomy by Feature": [
      'anatomy/cli',
      'anatomy/environment',
      `anatomy/deploy`,
      'anatomy/metrics',
      'anatomy/releases',
      'anatomy/job-history',
      'anatomy/console-logs',
      'anatomy/access',
      'anatomy/domains',
      'anatomy/settings',
      'anatomy/build-settings',
      'anatomy/environment-variables',
      'anatomy/advanced',
      'anatomy/billing'
    ],

    "Repository": [
          'repository/import url',
          'repository/github-apps',

    ],
    
    "Service Types": [
      'service-types/static-site',
      'service-types/web-app',
      'service-types/backend-api',
      'service-types/backend-worker',
      'service-types/job',
    ],
    "Catalog": [
      'catalogs/mongodb',
      'catalogs/postgresql',
      'catalogs/minio',
      'catalogs/redis',
      'catalogs/mysql',
    ],
    "Examples": [
      {
        type: 'category',
        label: 'Node',
        collapsed: false,
        items: [
          'examples/nodejs/nodejs-example',
          'examples/nextjs/nextjs-example',
          'examples/express/express-example',
          'examples/hapi/hapi-example',
          'examples/koa/koa-example',
        ],
      },
      {
        type: 'category',
        label: 'Golang',
        collapsed: false,
        items: [
          'examples/go/go-example',
          'examples/gin/gin-example',
          'examples/fasthttp/fasthttp-example',
          'examples/beego/beego-example',
        ],
      },
      {
        type: 'category',
        label: 'Ruby',
        collapsed: false,
        items: [
          'examples/ruby/ruby-example',
        ],
      },
      {
        type: 'category',
        label: 'Python',
        collapsed: false,
        items: [
          'examples/django/django-example',
          'examples/flask/flask-example',
        ],
      },
      {
        type: 'category',
        label: 'Rust',
        collapsed: false,
        items: [
          'examples/rust/rust-example',
        ],
      },
      {
        type: 'category',
        label: 'Elixir',
        collapsed: false,
        items: [
          'examples/elixir/elixir-example',
        ],
      },
      {
          type: 'category',
          label: 'Laravel',
          collapsed: false,
          items: [
            'examples/laravel/laravel',
          ],
      },
      {
        type: 'category',
        label: 'Static Websites',
        collapsed: false,
        items: [
          'examples/react/react-example',
        ],
    },
    ],
  },
};
