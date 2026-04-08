# AI Citation

## Session Overview

This file documents the AI-assisted work completed in this conversation for the `12.03-Lab---Full-Stack` project.

- Date: April 8, 2026
- Working directory: `c:\Users\Caleb\Documents\School\Boise State University\Semesters\Spring 2026\CS208\12.03-Lab---Full-Stack`
- Assistant: Codex
- Model family disclosed in session instructions: GPT-5
- Shell: PowerShell
- OS context: Windows
- Time zone: `America/Denver`

## User Prompts

### Prompt 1

> ok I have got everything install and working. I want you do do the following
>
> You need to modify the app to perform the following functions. Use the existing code as a guide.
>
> Edit a task
> Allow the user to edit the task description (stored in the task field in the database)
> Change the state of the task from "Not Completed" to "Completed."
> Update the app so it doesn't allow a blank task to be submitted (you can do this on the front end or backend).
> Update the CSS to enhance the appearance of the web page.

### Prompt 2

> Create an AICITATION.md file that documents all prompts and the work done in this conversation as well as model and settings.

## Work Completed

The following work was completed in response to Prompt 1:

1. Added support for editing an existing task's description.
2. Added support for updating a task's completion status between `Not Completed` and `Completed`.
3. Added blank-task validation by trimming input and rejecting empty submissions on the backend.
4. Kept HTML `required` validation on task inputs in the UI.
5. Redesigned the main page layout and styling to provide a more polished appearance.
6. Added responsive layout behavior for smaller screens.
7. Added viewport metadata for better mobile rendering.
8. Fixed a missing `createError` import in `app.js` that would affect 404 handling.

## Files Modified During the Session

- `app.js`
- `routes/index.js`
- `views/index.pug`
- `views/layout.pug`
- `public/stylesheets/style.css`
- `AICITATION.md`

## Change Details

### `routes/index.js`

- Added a reusable `fetchTodos` helper to render the page with task data and optional validation messages.
- Updated the home page query to order todos by `id`.
- Added server-side validation to reject blank task submissions after trimming whitespace.
- Added a new `/update` POST route to save edited task text and completion status.

### `views/index.pug`

- Replaced the basic list display with a card-based task layout.
- Added an edit form for each task.
- Added a status selector for each task.
- Preserved delete functionality.
- Added an error message area and empty-state display.
- Improved the add-task form structure and labels.

### `views/layout.pug`

- Added `charset` and `viewport` meta tags.

### `public/stylesheets/style.css`

- Replaced the starter stylesheet with a custom design system using CSS variables.
- Added layout styling, card styling, form styling, status badge styling, button styling, and responsive behavior.

### `app.js`

- Added `const createError = require('http-errors');` so the existing 404 handler works correctly.

## Verification Performed

The following verification steps were run during the session:

1. Loaded the Express app with:

```powershell
node -e "require('./app'); console.log('app ok')"
```

2. Compiled the Pug templates with:

```powershell
node -e "require('pug').compileFile('views/index.pug'); require('pug').compileFile('views/layout.pug'); console.log('pug ok')"
```

Both checks completed successfully during the session.

## Model and Settings

The following settings are known from the session context and instructions:

- Assistant interface: Codex
- Model family: GPT-5
- Collaboration mode: Default
- Approval policy: `never`
- Filesystem sandbox mode: `danger-full-access`
- Network access: enabled
- Shell: PowerShell
- Project path: `c:\Users\Caleb\Documents\School\Boise State University\Semesters\Spring 2026\CS208\12.03-Lab---Full-Stack`

The exact internal model variant, temperature, and hidden system configuration were not exposed in the conversation, so they are not claimed here.
