import gspread
from oauth2client.service_account import ServiceAccountCredentials

# Define scope and authorize with your credentials JSON
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("ss.json", scope)  # replace with your credentials file
client = gspread.authorize(creds)

# Access the sheet
spreadsheet_name = "Accident Detection Log"  # replace with your Google Sheet name
sheet = client.open(spreadsheet_name).sheet1

# Now you can update the sheet directly
sheet.append_row(["Timestamp", "Accident Detected", "Confidence"])
