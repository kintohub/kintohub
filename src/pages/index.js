import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title for OG
      title={"Modern Fullstack App Platform"}
      description="KintoHub is an all-in-one platform to combine and deploy your backend services, websites, cron jobs, databases and everything your app needs in one place."
    >
      <main>
        <header className={styles.alertContainer}>
          <div className={styles.alertBanner}>
            KintoHub is now open-source software. A big announcement for
            later...
          </div>
          <div className={styles.alertLink}>LEARN MORE</div>
        </header>
        <section className={styles.heroBanner}>
          <div className={styles.heroBannerText}>
            <h1 className={styles.heading}>Heroku Your Kubernetes</h1>
            <button className={styles.button}>
              <img src="/img/power.svg"></img> Get Started
            </button>
            <div className={styles.hSpacer5}></div>
            <h5 className={(styles.primaryText, styles.subheading)}>
              KintoHub is an open source build and deployment platform designed
              with a developer-friendly interface for Kubernetes.
            </h5>
            <h5 className={(styles.primaryText, styles.hSpacer4)}>
              ALL YOUR FULL STACK NEEDS ON KUBERNETES
            </h5>
          </div>
          <div className={styles.hSpacer4}></div>
          <div className={styles.cardContainer}>
            <div
              className={classnames(
                styles.featureCard,
                styles.link,
                styles.linkNoHoverEffect
              )}
            >
              {" "}
              <div className={styles.frameworks}>
                <h3 className={styles.primaryText}>Frontend</h3>
                <div className={classnames(styles.pill, styles.purple)}></div>
                <h5 className={styles.secondaryText}>
                  Static files, JAMStack sites, and dynamic web apps with SSR
                  enabled can all be deployed with ease.
                </h5>
              </div>
              <p className={styles.caption}>POPULAR FRAMEWORKS</p>
              <div className={styles.featureCardIcons}>
                <div
                  className={classnames(styles.gatsby, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.react, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.nextjs, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.hugo, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.vue, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.angular, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.more, styles.featureIcons)}
                ></div>
              </div>
            </div>
            <div
              className={classnames(
                styles.featureCard,
                styles.link,
                styles.linkNoHoverEffect
              )}
            >
              <div className={styles.frameworks}>
                <h3 className={styles.primaryText}>Backend</h3>
                <div className={classnames(styles.pill, styles.blue)}></div>
                <h5 className={styles.secondaryText}>
                  Scale APIs, consume messages with background workers or create
                  repeatable jobs.
                </h5>
              </div>

              <p className={styles.caption}>POPULAR FRAMEWORKS</p>
              <div className={styles.featureCardIcons}>
                <div
                  className={classnames(styles.docker, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.node, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.golang, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.rust, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.ruby, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.python, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.more, styles.featureIcons)}
                ></div>
              </div>
            </div>
            <div
              className={classnames(
                styles.featureCard,
                styles.link,
                styles.linkNoHoverEffect
              )}
            >
              <div className={styles.frameworks}>
                <h3 className={styles.primaryText}>Data & Storage</h3>
                <div className={classnames(styles.pill, styles.yellow)}></div>
                <h5 className={styles.secondaryText}>
                  Scalable databases, queues, image, file, and in-memory cache
                  are all possible on KintoHub. No 3rd party clouds required.
                </h5>
              </div>
              <p className={styles.caption}>POPULAR FRAMEWORKS</p>
              <div className={styles.featureCardIcons}>
                <div
                  className={classnames(styles.mongo, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.postgresql, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.mysql, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.redis, styles.featureIcons)}
                ></div>
                <div
                  className={classnames(styles.minio, styles.featureIcons)}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles.featureQuickStartGrid}>
            <div>
              <h4>Build and Deploy any Github Repository</h4>
              <h5 className={styles.primaryText}>
                Use the{" "}
                <Link
                  to={useBaseUrl("getting-started/introduction")}
                  className={classnames(styles.purpleText, styles.primaryText)}
                >
                  import URL
                </Link>{" "}
                to connect any public or private git repo
              </h5>
            </div>

            <div>
              <h4>Custom Domains with Let's Encrypt</h4>
              <h5 className={styles.primaryText}>
                Once deployed, your projects can be assigned to a{" "}
                <Link
                  to={useBaseUrl("getting-started/introduction")}
                  className={styles.purpleText}
                >
                  custom domain.
                </Link>
              </h5>
            </div>
          </div>
        </section>
        <section className={styles.whiteSlant}></section>

        <section className={styles.devTools}>
          <div className={styles.devToolsContainer}>
            <div className={styles.devToolsFeaturesContainer}>
              <h5 className={styles.purpleText}>DESIGNED BY DEVELOPERS</h5>
              <h2 className={styles.primaryText}>
                Powerful developer tools with a simple user-experience
              </h2>
              <div className={styles.hSpacer2}></div>
              <div className={styles.devToolsFeaturegrid}>
                <div>
                  <h5 className={styles.primaryText}>
                    Easy Build & Deployment
                  </h5>
                  <h6 className={styles.secondaryText}>
                    Simply connect your repo and you're off! KintoHub can build
                    and deploy your code as-is.
                  </h6>
                </div>
                <div>
                  <h5 className={styles.primaryText}>
                    Advanced Configurations
                  </h5>
                  <h6 className={styles.secondaryText}>
                    Click your way to cost effective dev or scalable prod
                    environments.
                  </h6>
                </div>
                <div>
                  <h5 className={styles.primaryText}>Logs</h5>
                  <h6 className={styles.secondaryText}>
                    Drill down and debug your issues with real time logs.
                  </h6>
                </div>
                <div>
                  <h5 className={styles.primaryText}>
                    Command Line Interface (CLI)
                  </h5>
                  <h6 className={styles.secondaryText}>
                    Use our CLI tools to connect tunnel to your secure
                    databases.
                  </h6>
                </div>
              </div>
            </div>
            <div>
              <img className={styles.devToolsBg} src="/img/dev-tools.svg"></img>
            </div>
          </div>
        </section>
        <section className={styles.blackSlant}></section>

        <section className={styles.quickStart}>
          <h2 className={styles.primaryText}>
            Read our in-depth documentation
          </h2>
          <h5 className={styles.primaryText}>
            Follow our examples and guides to run KintoHub on Kubernetes in no
            time.
          </h5>
          <div className={styles.hSpacer3}></div>
          <div className={styles.cardContainer}>
            <div className={styles.infoCardSmall}>
              <Link
                to={useBaseUrl("getting-started/introduction")}
                className={classnames(styles.link, styles.linkNoHoverEffect)}
              >
                <div>
                  <img
                    className={styles.icon}
                    src="/img/playlist-plus.svg"
                  ></img>
                  <h4 className={styles.primaryText}>Installation Guide</h4>
                  <h5 className={styles.secondaryText}>
                    Why should you use KintoHub?
                  </h5>
                </div>
              </Link>
            </div>

            <div className={styles.infoCardSmall}>
              <Link
                to={useBaseUrl("getting-started/fullstack-example")}
                className={classnames(styles.link, styles.linkNoHoverEffect)}
              >
                <div>
                  <img className={styles.icon} src="/img/code-tags.svg"></img>
                  <h4 className={styles.primaryText}>Deploy an Example App</h4>
                  <h5 className={styles.secondaryText}>
                    Deploy PostgreSQL + Hasura + React.
                  </h5>
                </div>
              </Link>
            </div>

            <div className={styles.infoCardSmall}>
              <Link
                to={useBaseUrl("https://discord.com/invite/E2CMjKP")}
                className={classnames(styles.link, styles.linkNoHoverEffect)}
              >
                <div>
                  <img className={styles.icon} src="/img/forum.svg"></img>
                  <h4 className={styles.primaryText}>Join Our Discord</h4>
                  <h5 className={styles.secondaryText}>
                    Get straight answers from our developers.
                  </h5>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.infoCardLarge}>
              <h4>Examples by Language</h4>
              <h5 className={styles.secondaryText}>
                Deploy code examples in your language.
              </h5>
              <div className={classnames(styles.pill, styles.purple)}></div>
              <ul className={styles.cardItemList}>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("examples/nodejs/nodejs-example")}
                  >
                    Node
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("examples/go/go-example")}
                  >
                    Golang
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("examples/ruby/ruby-example")}
                  >
                    Ruby
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("examples/django/django-example")}
                  >
                    Python
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.infoCardLarge}>
              <h4>Explore Catalog</h4>
              <h5 className={styles.secondaryText}>
                Deploy instant databases, storage, etc.
              </h5>
              <div className={classnames(styles.pill, styles.blue)}></div>
              <ul className={styles.cardItemList}>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("catalogs/mongodb")}
                  >
                    MongoDB
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("catalogs/postgresql")}
                  >
                    PostgreSQL
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("catalogs/minio")}
                  >
                    Minio
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("catalogs/redis")}
                  >
                    Redis
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("catalogs/mysql")}
                  >
                    MySQL
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.infoCardLarge}>
              <h4>Learn Service Types</h4>
              <h5 className={styles.secondaryText}>
                How to choose a service type.
              </h5>
              <div className={classnames(styles.pill, styles.yellow)}></div>
              <ul className={styles.cardItemList}>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("service-types/static-site")}
                  >
                    Static Site
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("service-types/web-app")}
                  >
                    Web App
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("service-types/backend-api")}
                  >
                    Backend API
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("service-types/backend-worker")}
                  >
                    Backend Worker
                  </Link>
                </li>
                <li>
                  <Link
                    className={classnames(styles.link)}
                    to={useBaseUrl("service-types/job")}
                  >
                    Job
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to={useBaseUrl("https://app.kintohub.com/auth/sign-up")}>
            <button className={styles.button}>
              <img src="/img/power.svg"></img>
              Get Started
            </button>
          </Link>
          <div className={styles.callToActionBg}></div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
