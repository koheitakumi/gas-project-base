# Base project for a Google Apps Script development

This project is just for starting a development with Google Apps Script with Typescript.

## Quick start

1. Install Clasp and login with your account.

   ```bash
   npm install -g @google/clasp
   clasp login
   # After this command, open it with your browser and approve.
   ```

1. Clone this project in your local.
1. Delete `./src/appsscript.json` and `./clasp.json`.
1. Create resources on this project. Then you can find the new spreadsheet on your Drive.

   ```bash
   clasp create --title "sample-project" --type sheets --rootDir ./src
   ```

1. Install dependencies.

   ```bash
   yarn install
   ```

1. Push your script and check the project.

   ```bash
   clasp push
   clasp open
   ```

## Version management

- Add version

  ```bash
  clasp version 'comment'
  ```

- Check versions

  ```bash
  clasp versions
  ```
