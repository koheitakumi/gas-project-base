function main() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  const today = new Date()
  const lastRow = sheet.getLastRow()

  sheet.appendRow([lastRow, today])
}
