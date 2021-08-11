const { google } = require("googleapis");

async function getSheets() {
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const authClient = await auth.getClient();
  const project = await auth.getProjectId();

  console.log(project);

  return google.sheets({ version: "v4", auth: authClient });
}

async function demo() {
  await getSheets();
}

module.exports = {
  demo,
};
