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
              className={classnames(styles.infoCardSmall, styles.link)}
            >
              <div>
                <img className={styles.icon} src="/img/playlist-plus.svg"></img>
                <h3>Introduction</h3>
                <p>Why should you use KintoHub?</p>
              </div>
            </Link>
            <Link
              to={useBaseUrl("getting-started/fullstack-example")}
              className={classnames(styles.infoCardSmall, styles.link)}
            >
              <div>
                <img className={styles.icon} src="/img/code-tags.svg"></img>
                <h3>Try a Full Stack Example</h3>
                <p>Deploy PostgreSQL + Hasura + React.</p>
              </div>
            </Link>
            <Link
              to={useBaseUrl("https://discord.com/invite/E2CMjKP")}
              className={classnames(styles.infoCardSmall, styles.link)}
            >
              <div>
                <img className={styles.icon} src="/img/forum.svg"></img>
                <h3>Join Our Discord</h3>
                <p>Get straight answers from our developers.</p>
              </div>
            </Link>
          </div>
          <div className={styles.infoCardsIntro}>
            <div className={styles.infoCardLarge}>
              <h3>Examples by Language</h3>
              <p>Deploy code examples in your language.</p>
              <div className={classnames(styles.pill, styles.purple)}></div>
              <ul className={styles.cardContentList}>
                <li>Node</li>
                <li>Golang</li>
                <li>Ruby</li>
                <li>Python</li>
              </ul>
            </div>
            <div className={styles.infoCardLarge}>
              <h3>Explore Catalog</h3>
              <p>Deploy instant databases, storage, etc.</p>
              <div className={classnames(styles.pill, styles.blue)}></div>
              <ul className={styles.cardContentList}>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Minio</li>
                <li>Redis</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className={styles.infoCardLarge}>
              <h3>Learn Service Types</h3>
              <p>How to choose a service type.</p>
              <div className={classnames(styles.pill, styles.yellow)}></div>
              <ul className={styles.cardContentList}>
                <li>Static Site</li>
                <li>Web App</li>
                <li>Backend API</li>
                <li>Backend Worker</li>
                <li>Job</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.infoCardSection}>
          <div className={styles.suggestionBody}>
            <div className={styles.suggestionText}>
              <h3>Deploy an Existing Project with Git</h3>
              <p>
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
                  src="/img/gitlab.svg"
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
              <p>
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
          <p>Play around for free. No CC required. </p>
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
