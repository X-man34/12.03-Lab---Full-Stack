# Task Tracker

A simple full-stack todo app built with Express, Pug, and MySQL.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed or not completed
- Delete tasks
- Prevent blank task submissions

## Setup

1. Install dependencies with `npm install`
2. Create the database using `setup_scripts/create_demo_table.sql`
3. Update the MySQL connection in `bin/db.js` if your local username or password is different

## Run

Start the app with:

```powershell
npm start
```

Then open `http://localhost:3000` in your browser.
