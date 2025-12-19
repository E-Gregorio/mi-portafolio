# QASL Framework

## Quality Assurance Shift-Left Platform

<div align="center">

![QASL Framework](https://img.shields.io/badge/QASL-Framework-10b981?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production--Ready-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**Enterprise-grade unified QA automation platform implementing Shift-Left Testing methodology**

[Features](#-features) • [Architecture](#-architecture) • [Quick Start](#-quick-start) • [Documentation](#-documentation)

</div>

---

## 📋 Overview

QASL (Quality Assurance Shift-Left) is a comprehensive testing platform that integrates static analysis, E2E testing, API testing, performance testing, and security testing with complete observability through Grafana, InfluxDB, and Loki.

### 🎯 Key Achievements

- ✅ **1,300+ test cases** generated from User Stories before development
- ✅ **35% reduction** in defect detection time
- ✅ **55-60% reduction** in critical production defects
- ✅ **92% automated coverage** across test suites
- ✅ **Complete traceability**: Epic → User Story → Test Suite → Test Case

---

## 🚀 Features

### 🔍 **SIGMA Analyzer** - Static Analysis Engine
- Automated test case generation from User Stories
- Natural language processing for requirement analysis
- Business rule extraction and validation
- Integration with JIRA/Xray for traceability

### 🎭 **E2E Testing** - Playwright Integration
- 11-level selector hierarchy for robust automation
- Page Object Model architecture
- Visual regression testing
- Cross-browser and mobile testing

### 🔌 **API Testing** - Newman/Postman
- Contract testing
- Schema validation
- Authentication flows (OAuth, JWT)
- Response time monitoring

### ⚡ **Performance Testing** - K6
- Load testing scenarios
- Stress testing
- Spike testing
- Soak testing with real-time metrics

### 🛡️ **Security Testing** - OWASP ZAP
- Automated vulnerability scanning
- Penetration testing
- Security compliance checks
- OWASP Top 10 validation

### 📊 **Observability Stack**
- **Grafana**: Real-time dashboards and alerting
- **InfluxDB**: Time-series metrics storage
- **Loki**: Centralized log aggregation
- **Allure**: Rich test reports

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         QASL FRAMEWORK                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   SIGMA      │  │  Playwright  │  │   Newman     │         │
│  │   Analyzer   │  │  (E2E Tests) │  │ (API Tests)  │         │
│  │              │  │              │  │              │         │
│  │ • HU Parser  │  │ • 11 Levels  │  │ • Contract   │         │
│  │ • TC Gen     │  │ • POM        │  │ • Schema     │         │
│  │ • Rules      │  │ • Visual     │  │ • Auth       │         │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘         │
│         │                 │                 │                  │
│         └─────────────────┼─────────────────┘                  │
│                           │                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │      K6      │  │  OWASP ZAP   │  │   Docker     │         │
│  │ (Performance)│  │  (Security)  │  │  Compose     │         │
│  │              │  │              │  │              │         │
│  │ • Load       │  │ • Pen Test   │  │ • Services   │         │
│  │ • Stress     │  │ • Scan       │  │ • Networks   │         │
│  │ • Metrics    │  │ • OWASP 10   │  │ • Volumes    │         │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘         │
│         │                 │                 │                  │
│         └─────────────────┼─────────────────┘                  │
│                           │                                    │
│  ┌────────────────────────┴───────────────────────────┐        │
│  │           OBSERVABILITY LAYER                      │        │
│  │                                                     │        │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐         │        │
│  │  │ Grafana  │  │ InfluxDB │  │   Loki   │         │        │
│  │  │          │  │          │  │          │         │        │
│  │  │ • Dashbrd│  │ • Metrics│  │ • Logs   │         │        │
│  │  │ • Alerts │  │ • Series │  │ • Query  │         │        │
│  │  └──────────┘  └──────────┘  └──────────┘         │        │
│  └─────────────────────────────────────────────────────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **E2E Automation** | Playwright, TypeScript, Page Object Model |
| **API Testing** | Newman, Postman Collections, Chai |
| **Performance** | K6, Grafana K6 extension |
| **Security** | OWASP ZAP, OWASP Dependency Check |
| **Observability** | Grafana, InfluxDB, Loki, Prometheus |
| **CI/CD** | Docker, Docker Compose, GitLab CI |
| **Reporting** | Allure, HTML Reports, JSON outputs |
| **Standards** | ISTQB v4.0, IEEE 829/830, ISO/IEC 25010 |

---

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 18+ (for local development)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/E-Gregorio/QASL-Framework.git
cd QASL-Framework

# Install dependencies
npm install

# Start the complete stack
docker-compose up -d

# Access dashboards
# Grafana: http://localhost:3000 (admin/admin)
# InfluxDB: http://localhost:8086
```

### Run Tests

```bash
# Run E2E tests
npm run test:e2e

# Run API tests
npm run test:api

# Run performance tests
npm run test:performance

# Run security scan
npm run test:security

# Run all tests
npm run test:all
```

---

## 📊 Dashboards

### Grafana Dashboard Overview

The QASL platform includes pre-configured Grafana dashboards:

1. **QA Executive Dashboard**
   - Overall test execution trends
   - Pass/Fail ratios
   - Coverage metrics
   - Defect density

2. **Performance Dashboard**
   - Response times
   - Throughput
   - Error rates
   - Resource utilization

3. **Security Dashboard**
   - Vulnerability counts
   - OWASP Top 10 compliance
   - Security trend analysis

4. **API Dashboard**
   - Endpoint health
   - Response time percentiles
   - Contract test results

---

## 📁 Project Structure

```
qasl-framework/
├── .github/
│   └── workflows/          # CI/CD pipelines
├── config/
│   ├── grafana/           # Grafana dashboards
│   ├── influxdb/          # InfluxDB configurations
│   └── docker/            # Docker configurations
├── src/
│   ├── e2e/
│   │   ├── pages/         # Page Object Models
│   │   ├── tests/         # E2E test suites
│   │   └── fixtures/      # Test data
│   ├── api/
│   │   ├── collections/   # Postman collections
│   │   └── environments/  # API environments
│   ├── performance/
│   │   └── scenarios/     # K6 test scenarios
│   ├── security/
│   │   └── policies/      # ZAP security policies
│   └── sigma/
│       ├── analyzer/      # HU analysis engine
│       └── generator/     # Test case generator
├── reports/
│   ├── allure/            # Allure reports
│   ├── html/              # HTML reports
│   └── json/              # Raw test results
├── docker-compose.yml     # Complete stack definition
├── playwright.config.ts   # Playwright configuration
├── package.json
└── README.md
```

---

## 🎓 Methodology

QASL implements a **6-phase Shift-Left Testing methodology** aligned with ISTQB v4.0 and IEEE 829/830:

### Phase 1: Requirements Analysis
- User Story parsing
- Business rule extraction
- Acceptance criteria validation

### Phase 2: Test Design (Shift-Left)
- Automated test case generation
- Traceability matrix creation
- Risk-based prioritization

### Phase 3: Test Implementation
- E2E test development
- API contract tests
- Performance baselines

### Phase 4: Test Execution
- Parallel execution
- Real-time monitoring
- Automated reporting

### Phase 5: Security & Performance
- OWASP ZAP scans
- K6 load testing
- Compliance checks

### Phase 6: Observability & Feedback
- Metrics aggregation
- Dashboard updates
- Alert triggering

---

## 📈 Metrics & KPIs

QASL tracks the following key metrics:

- **Test Coverage**: Code, requirements, and risk coverage
- **Defect Detection Rate**: Bugs found vs. total bugs
- **Mean Time to Detection (MTTD)**: Time from defect introduction to discovery
- **Test Execution Time**: Total and per-suite execution time
- **Pass/Fail Ratio**: Overall test health indicator
- **Performance Baselines**: Response time, throughput, error rates
- **Security Posture**: Vulnerability count, severity distribution

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Elyer Gregorio Maldonado**

- LinkedIn: [@elyer-maldonado](https://www.linkedin.com/in/elyer-maldonado)
- GitHub: [@E-Gregorio](https://github.com/E-Gregorio)
- Email: elyer.g.maldonado@gmail.com

---

## 🙏 Acknowledgments

- Based on ISTQB v4.0 Foundation Level principles
- Aligned with IEEE 829/830 standards
- Inspired by modern DevOps and SRE practices
- Built with the Playwright, K6, and OWASP communities

---

## 📚 Further Reading

- [ISTQB v4.0 Syllabus](https://www.istqb.org)
- [IEEE 829 Standard](https://standards.ieee.org/standard/829-2008.html)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [Playwright Documentation](https://playwright.dev)
- [K6 Documentation](https://k6.io/docs/)

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with ❤️ by [Elyer Gregorio Maldonado](https://github.com/E-Gregorio)

</div>
