# Command Lab Migration Plan

## Current-State Inventory

### Current Routes

- `/command-lab-login`: previous client-rendered login entry for the experimental lab.
- `/command-lab`: previous client-rendered lab experience behind a browser-side gate.

Both routes have been removed from the public SparkCommands.com router for the production website. They now fall through to the branded noindex not-found experience until the standalone migration is complete.

### Components

Current source files preserved for migration:

- `src/components/command-lab/CommandLabLogin.jsx`
- `src/components/command-lab/CommandLabGate.jsx`
- `src/components/command-lab/CommandLabPage.jsx`
- `src/components/command-lab/CommandInputDemo.jsx`
- `src/components/command-lab/CommandReactionPanel.jsx`
- `src/components/command-lab/CommandVideoStage.jsx`
- `src/components/command-lab/InteractiveMapExpansion.jsx`
- `src/components/command-lab/SignalBackground.jsx`
- `src/components/command-lab/SystemModeToggle.jsx`
- `src/components/command-lab/commandLabAccess.js`

### Assets

Current lab-related public media:

- `public/videos/vendor-network.mp4`
- `public/videos/risk-detection.mp4`
- `public/videos/chaos-to-command.mp4`
- `public/assets/spark-intro-loop.mp4`

Shared Spark brand assets are also used by the main website and should be copied intentionally into a standalone lab project if needed.

### Data Sources

The current lab uses local JavaScript constants only. It does not read a database, API, or external service.

### Browser Storage Keys

- `scs_command_lab_access`

This is a convenience flag only. It is not secure authentication.

### Dependencies

The lab currently relies on:

- React
- React Router
- Lucide React
- Vite/Tailwind site styling
- Browser `sessionStorage`

No environment variables were found in the current Command Lab implementation.

### Existing Login or Gate Behavior

The existing gate performs a browser-visible username/password comparison in client code, then stores an unlocked flag in `sessionStorage`. This is not real authentication and should not protect private data.

No actual credential values should be copied into documentation, logs, issues, or migration notes.

### External Services

None found in the current lab code.

### Sensitive Assumptions

- Hidden routes are not security.
- Browser-visible credentials are not security.
- `sessionStorage` is not authorization.
- Publicly hosted assets can be requested directly if someone knows the path.
- A private-looking subdomain does not protect the lab by itself.

### Reusable Design Elements

- Dark Spark visual shell
- Signal grid background
- Command response panels
- Video-backed response stage
- Map expansion interaction
- Chaos/command comparison module

### Known Limitations

- No real authentication
- No server-side authorization
- No user/account model
- No protected backend
- No indexing protection in a standalone context yet
- Shared assumptions with the marketing site
- Hardcoded demo content
- Public asset paths

## Recommended Standalone Architecture

For the current implementation, React/Vite is the most cost-conscious fit because Command Lab is a client-heavy experimental interface with no current server-rendered content requirement. Next.js becomes a better fit only if the lab needs server-side authorization, protected API routes, database-backed modules, or private server-rendered data.

Recommended starting stack:

- GitHub repository
- Vercel deployment
- React + Vite
- TypeScript during migration if time allows
- Firebase Authentication or another real identity provider
- Server-side authorization if protected data is introduced
- Environment variables stored in Vercel and local `.env` files excluded from Git

If Command Lab later stores private prompts, business data, client data, or owner-only records, migrate to Next.js or add a separate protected API/backend so authorization is enforced server-side.

## Recommended Repository Structure

```text
command-lab/
  docs/
    architecture.md
    security.md
  public/
    assets/
    videos/
  src/
    app/
      routes/
      Shell.tsx
    auth/
      AuthProvider.tsx
      requireOwner.ts
      firebase.ts
    components/
      common/
      lab/
    data/
      demoResponses.ts
      demoSites.ts
    modules/
      command-input/
      map-expansion/
      video-response/
      system-mode-toggle/
    styles/
      index.css
    tests/
      auth.test.ts
      routing.test.ts
  .env.example
  package.json
  vite.config.ts
  README.md
```

## Authentication Plan

Replace the browser-side gate with:

- Firebase Authentication, Auth0, Clerk, or another real identity provider.
- Owner allowlist or owner role stored outside client code.
- Server-side authorization before returning protected data if any sensitive data exists.
- Session handling through the provider SDK.
- Clear logout control.
- Unauthorized state that does not reveal private content.
- Secure account recovery through the identity provider.
- Separate local and production environment configuration.
- Removal of all hardcoded credentials.
- `noindex, nofollow`, no public sitemap entry, and deployment-level indexing protection.

Authentication should be validated in production with a direct URL visit, logged-out visit, expired session, and unauthorized account.

## Migration Sequence

1. Create the new repository.
2. Copy isolated Command Lab code from `src/components/command-lab`.
3. Copy only required assets into the new project.
4. Remove Spark marketing-site dependencies and assumptions.
5. Establish a standalone design shell.
6. Add real authentication.
7. Replace browser-side gate behavior.
8. Move state and demo data into typed module files.
9. Add environment configuration and `.env.example`.
10. Add tests for auth, routing, and major interactions.
11. Deploy to a private or owner-controlled subdomain.
12. Validate logged-in, logged-out, unauthorized, mobile, and noindex behavior.
13. Remove any remaining legacy references from SparkCommands.com.

## Suggested Domain Strategy

Recommended:

- `lab.sparkcommands.com`
- Another owner-controlled subdomain

A subdomain is only an address. It does not provide authentication. The lab must still require real login and server-side authorization where private data exists.

## Migration Risks

- Lost browser storage during migration
- Hardcoded route assumptions
- Shared component dependencies
- Accidentally exposed credentials
- Broken video or asset paths
- Public indexing
- Missing authorization
- Bundle duplication
- CORS issues
- Environment mismatch
- Vercel configuration differences
- Treating demo-only code as secure production code

## Acceptance Criteria

Migration is complete when:

- Command Lab has its own repository.
- No hardcoded credentials remain.
- Real authentication protects all lab routes.
- Unauthorized users cannot view lab content.
- Protected data, if any, is authorized server-side.
- The standalone deployment has no public sitemap entry.
- `noindex, nofollow` is present for lab pages.
- Assets load from the standalone project.
- Mobile and desktop lab interactions work.
- SparkCommands.com no longer contains or ships Command Lab source or assets.
- The legacy `/command-lab*` paths can be permanently deleted or left as a generic not-found response.
