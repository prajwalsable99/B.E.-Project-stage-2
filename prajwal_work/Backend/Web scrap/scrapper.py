import requests
from bs4 import BeautifulSoup

# Make HTTP request to the crop market prices page
response = requests.get("https://farmer.gov.in/mspstatements.aspx")

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")
print(soup)