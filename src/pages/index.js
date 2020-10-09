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
      <header className={styles.heroBanner}>
        <img className={styles.heroBannerLeft} src="/img/docs-left.svg"></img>
        <img className={styles.heroBannerRight} src="/img/docs-right.svg"></img>
        <div className={styles.heroBannerText}>
          <h1>{siteConfig.title}</h1>
          <span>{siteConfig.tagline}</span>
        </div>
      </header>
      <main>
        <section className={styles.infoCardSection}>
          <div className={styles.infoCardsIntro}>
            <Link
              to={useBaseUrl("getting-started/introduction")}
              className={classnames(
                styles.infoCardSmall,
                styles.link,
                styles.linkNoHoverEffect
              )}
            >
              <div>
                <img className={styles.icon} src="/img/playlist-plus.svg"></img>
                <h3>Introduction</h3>
                <p className={styles.subText}>Why should you use KintoHub?</p>
              </div>
            </Link>
            <Link
              to={useBaseUrl("getting-started/fullstack-example")}
              className={classnames(
                styles.infoCardSmall,
                styles.link,
                styles.linkNoHoverEffect
              )}
            >
              <div>
                <img className={styles.icon} src="/img/code-tags.svg"></img>
                <h3>Try a Full Stack Example</h3>
                <p className={styles.subText}>
                  Deploy PostgreSQL + Hasura + React.
                </p>
              </div>
            </Link>
            <Link
              to={useBaseUrl("https://discord.com/invite/E2CMjKP")}
              className={classnames(
                styles.infoCardSmall,
                styles.link,
                styles.linkNoHoverEffect
              )}
            >
              <div>
                <img className={styles.icon} src="/img/forum.svg"></img>
                <h3>Join Our Discord</h3>
                <p className={styles.subText}>
                  Get straight answers from our developers.
                </p>
              </div>
            </Link>
          </div>
          <div className={styles.infoCardsIntro}>
            <div className={styles.infoCardLarge}>
              <h3>Examples by Language</h3>
              <p className={styles.subText}>
                Deploy code examples in your language.
              </p>
              <div className={classnames(styles.pill, styles.purple)}></div>
              <ul className={styles.cardContentList}>
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
              <h3>Explore Catalog</h3>
              <p className={styles.subText}>
                Deploy instant databases, storage, etc.
              </p>
              <div className={classnames(styles.pill, styles.blue)}></div>
              <ul className={styles.cardContentList}>
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
              <h3>Learn Service Types</h3>
              <p className={styles.subText}>How to choose a service type.</p>
              <div className={classnames(styles.pill, styles.yellow)}></div>
              <ul className={styles.cardContentList}>
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
        </section>
        <section className={styles.infoCardSection}>
          <div className={styles.suggestionBody}>
            <div className={styles.suggestionText}>
              <h3>Deploy an Existing Project with Git</h3>
              <p className={styles.subText}>
                Use our Git integrations with
                <Link to={useBaseUrl("repository/github-apps")}>
                  <span className={styles.introLink}> GitHub </span>
                </Link>
                or use an
                <Link to={useBaseUrl("repository/import url")}>
                  <span className={styles.introLink}> import url.</span>
                </Link>
              </p>
              <Link to={useBaseUrl("repository/github-apps")}>
                <img
                  className={styles.integrationIcon}
                  src="/img/github.svg"
                ></img>
              </Link>

              <Link to={useBaseUrl("repository/import url")}>
                <img
                  className={styles.integrationIcon}
                  src="/img/link.svg"
                ></img>
              </Link>
            </div>
            <div className={styles.suggestionText}>
              <h3>Connect Your Custom Domains</h3>
              <p className={styles.subText}>
                Once deployed, your projects can be assigned to a custom domain.
              </p>

              <Link to={useBaseUrl("anatomy/domains")}>
                <span className={styles.introLink}>
                  Learn more
                  <img src="/img/arrow-right.svg"></img>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.startDeploying}>
          <h1>Created by fullstack developers like you.</h1>
          <p className={styles.subText}>
            Play around for free. No CC required.{" "}
          </p>
          <Link to={useBaseUrl("https://app.kintohub.com/auth/sign-up")}>
            <button className={styles.button}>
              <img src="/img/power.svg"></img>
              Start Deploying
            </button>
          </Link>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
