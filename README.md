## Building

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Style

It's using [Styled-Component](https://styled-components.com/) to create UIX components.

## Getting Started

```bash
# First install the dependencies
npm install
# Set the template and the environment
npm prepare:env -f template-one -e dev
# Launch the application in development mode
npm dev
# Then check the code prettier pattern
npm format:fix
# Then make your commits run the build to check issues
npm build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commit Message Convention

- Type: This describes the purpose or nature of the commit. Common types include:

```bash
  feat: A new feature or enhancement.
  fix: A bug fix.
  docs: Documentation changes.
  chore: Routine tasks, maintenance, or tooling changes.
  style: Code style and formatting improvements (no code change).
  refactor: Code refactoring without changing functionality.
  test: Adding or modifying tests.
  perf: Performance improvements.
  build: Changes related to the build process or dependencies.
```

- Scope (Optional): This indicates the part of the codebase that the commit affects. It's often project-specific and can be omitted if not applicable. Ex. (properties), (auth), (filter), etc...

  - Use imperative mood for the subject (e.g., "Fix bug" instead of "Fixed bug").

- Subject: A concise and descriptive summary of the change. It should be written in the imperative mood (e.g., "Add feature" instead of "Added feature").

- Example

  - fix(auth): check life time token

## CI/CD on GitHub Actions

- https://github.com/Aldrei/seagull/actions

## Deploy

- Via GitHub Actions to Digital Ocean App
