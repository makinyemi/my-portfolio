import './Work.css'

const Work = () => {
  return (
    <div className="Section">
      <section className="WorkSection">
        <h3>
          Booz Allen Hamilton{' '}
          <sub>
            <em>Current</em>
          </sub>
        </h3>
        <span>Full Stack Software Engineer</span>
        <p>
          <em>May 2025 - Present</em>
        </p>

        <ul>
          <li>
            • Developed and delivered full stack web applications with RESTful
            APIs using Python/FastAPI, Node.js/Express.js, and React/Next.js
            frontend in an Agile environment.
          </li>
          <li>
            • Delivered Palantir hosted React.js and Node.js with Palantir
            backend applications utilizing Palantir Foundry for data management
            and security.
          </li>
          <li>
            • Co-authored application migration for legacy government projects,
            modernizing UI components, and integrating third party web services
            to extend application lifecycle before planned sunset.
          </li>
          <li>
            • Reduced API response times by optimizing PostgreSQL queries and
            implementing caching layer with Redis.
          </li>
          <li>
            • Secured backend APIs with JWT authentication and token validation
            middleware.
          </li>
          <li>
            • Engineered complex React UI custom components for a classified
            document management system with multi- component architecture,
            integrating backend web APIs with FastAPI and PostgreSQL for
            persistence, and Claude 3.7 Sonnet for AI inference to boost analyst
            document processing workflow efficiency.
          </li>
          <li>
            • Architected Palantir Foundry Datasets, Ontologies, Actions and
            Functions (Node.js) to create an Ontology SDK for use as a backend
            solution React applications using and as a solution for robust data
            management and API connectivity to backend datasets.
          </li>
          <li>
            • Created custom context provider components using React Context API
            to dynamically handle state management.
          </li>
          <li>
            • Implemented RBAC security features on React frontend UI components
            and backend Express.js and FastAPI protected routes UI components.
          </li>
          <li>
            • Optimized React application initial bundle size and render times
            by lazy loading components and implementing memoization techniques.
          </li>
          <li>
            • Developed comprehensive testing suite using Jest and React Testing
            Library achieving 70% code coverage.
          </li>
        </ul>
      </section>
      <br />
      <section className="WorkSection">
        <div>
          <h3>Cloudera Inc. </h3>
          <span>Senior Software Engineer</span>
          <p>
            <em>January 2021 - May 2025</em>
          </p>
          <ul>
            <li>• Subject Matter Expert in Apache Hive</li>
            <li>• Opensource contributor to Apache community.</li>
            <li>
              • Team liaison for Apache Hive related issues, collaborating
              closely with engineering and product teams to identify root
              causes, implement fixes, and optimize large-scale data warehouse
              environments.
            </li>
            <li>
              • Owner of critical government account as Premier Support
              Engineer, integrating new big data use cases spanning data ingest,
              processing, storage and security, and tracking and resolving
              business issues across multiple tenants.
            </li>
            <li>
              • Participate in 24/7 on-call rotation for critical production
              down customer environments with strict SLA
            </li>
            <li>
              • Troubleshoot distributed system failures, performance
              degradation, and configuration conflicts through log analysis,
              metric inspection with Cloudera Manager, and collaboration with
              engineering teams. compliance.
            </li>
          </ul>
        </div>
        <div>
          <span>Software Engineer</span>
          <p>
            <em>January 2021 - May 2025</em>
          </p>
          <ul>
            <li>
              • Debugged and optimized long running or hanging Hive, Spark and
              PostgreSQL jobs/queries.
            </li>
            <li>
              • Resolved security and network communication issues related to
              TLS certificates, AD/LDAP and Kerberos in customer environments to
              protect data integrity.
            </li>
            <li>
              • Diagnose, resolved, and performed RCA on issues related to HDFS,
              YARN, Hive, Spark, Zookeeper, NiFi etc. in multi-node cluster
              environments.
            </li>
            <li>
              • Delivered enterprise level support for big data and analytics
              systems.
            </li>
            <li>
              • Collaborated with engineering teams to escalate and resolve
              complex product bugs
            </li>
            <li>
              • Wrote technical documentation and knowledge articles to track
              new bugs and provided solutions to product issues to reduce the
              number of new support tickets opened for related issues and reduce
              case lifetime.
            </li>
          </ul>
        </div>
      </section>
      <br />
      <section className="WorkSection">
        <div>
          <h3>Willetts Technology</h3>
          <span>Software Engineer Intern</span>
          <p>
            <em>September 2020 - January 2021</em>
          </p>
          <ul>
            <li>
              • Assisted in development, maintenance and delivery of WordPress
              websites.
            </li>
            <li>
              • Helped integrated SAML SSO authentication into a mobile React
              Native application to enhance security, increase the customers end
              users’ productivity and users experience navigating application
              services.
            </li>
            <li>
              • Added an auditing tool feature to a health care user management
              system to monitor audits to system data.
            </li>
            <li>
              • Redesigned a customer website promotion page to increase monthly
              subscriptions by 20%.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Work
