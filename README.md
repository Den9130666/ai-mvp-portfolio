# AI MVP Portfolio

Five interactive business workflow demos deployed at **https://portfolio.omniq.space**.

## Live demos

| Demo | Purpose | URL |
| --- | --- | --- |
| DocFlow | Validate and export document records (manual entry) | https://portfolio.omniq.space/docflow |
| CargoDesk | Track logistics requests and statuses | https://portfolio.omniq.space/cargodesk |
| AutoImport | Estimate import budget from user-provided inputs | https://portfolio.omniq.space/autoimport |
| ServiceDesk | Rule-based inquiry triage and human-approved draft | https://portfolio.omniq.space/ai-servicedesk |
| ReportPilot | CSV totals and category breakdown | https://portfolio.omniq.space/reportpilot |

## Run locally

Open `index.html` in a browser, or serve this folder with `python3 -m http.server 8080` and visit http://localhost:8080.

## Scope and limitations

These are portfolio prototypes, not production systems. They use browser-local storage or in-browser computation; no backend database, LLM, OCR, authentication, or live integrations are included. ServiceDesk uses transparent keyword rules, **not AI**. AutoImport is not an official customs calculation. Do not input sensitive data.

## Engineering

Vanilla HTML, CSS and JavaScript. No dependencies or secrets. Shared development instructions: `AGENTS.md` and `.agents/skills/mvp-quality/SKILL.md`.

## Roadmap

Split demos into isolated modules, add unit/E2E tests, real backend persistence, role-based access, optional AI/OCR adapters and CI.