module.exports = {
  someSidebar: {
    "Getting Started": [
      "getting-started/introduction",
      "getting-started/fullstack-example",
    ],
    "Features": [
      "features/cli",
      "features/environment",
      `features/deploy`,
      "features/metrics",
      "features/releases",
      "features/job-history",
      "features/console-logs",
      "features/access",
      "features/domains",
      "features/settings",
      "features/build-settings",
      "features/environment-variables",
      "features/advanced",
      "features/billing",
    ],

    Repository: ["repository/import url", "repository/github-apps"],

    "Service Types": [
      "service-types/static-site",
      "service-types/web-app",
      "service-types/backend-api",
      "service-types/backend-worker",
      "service-types/job",
    ],
    Catalog: [
      "catalogs/mongodb",
      "catalogs/postgresql",
      "catalogs/minio",
      "catalogs/redis",
      "catalogs/mysql",
    ],
    Examples: [
      {
        type: "category",
        label: "Node",
        collapsed: false,
        items: [
          "examples/nodejs/nodejs-example",
          "examples/nextjs/nextjs-example",
          "examples/express/express-example",
          "examples/hapi/hapi-example",
          "examples/koa/koa-example",
        ],
      },
      {
        type: "category",
        label: "Golang",
        collapsed: false,
        items: [
          "examples/go/go-example",
          "examples/gin/gin-example",
          "examples/fasthttp/fasthttp-example",
          "examples/beego/beego-example",
        ],
      },
      {
        type: "category",
        label: "Ruby",
        collapsed: false,
        items: ["examples/ruby/ruby-example"],
      },
      {
        type: "category",
        label: "Python",
        collapsed: false,
        items: [
          "examples/django/django-example",
          "examples/flask/flask-example",
        ],
      },
      {
        type: "category",
        label: "Rust",
        collapsed: false,
        items: ["examples/rust/rust-example"],
      },
      {
        type: "category",
        label: "Elixir",
        collapsed: false,
        items: ["examples/elixir/elixir-example"],
      },
      {
        type: "category",
        label: "Laravel",
        collapsed: false,
        items: ["examples/laravel/laravel"],
      },
      {
        type: "category",
        label: "Static Websites",
        collapsed: false,
        items: [
          "examples/angular/angular-example",
          "examples/docusaurus/docusaurus-example",
          "examples/gatsby/gatsby-example",
          "examples/ionic/ionic-example",
          "examples/preact/preact-example",
          "examples/react/react-example",
          "examples/vue/vue-example",
        ],
      },
    ],
  },
};
