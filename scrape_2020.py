import requests
from bs4 import BeautifulSoup
import lxml
from time import sleep
import csv
from string import ascii_uppercase
import codecs

base_url = "https://www.naxos.com/musicinmoviescomplist.asp?letter="
year = 2020
month = 3
out_folder = "-".join([str(year), str(month), "pages"])


pages = []

for letter in ascii_uppercase:
    out_file = out_folder + "/" + letter + ".html"

    complete_url = base_url + letter
    response = requests.get(complete_url)
    page = response.text

    pages.append(out_file)
    open(out_file, "w+").write(page)

case1_file = codecs.open(pages[15], 'r', 'utf-8')
case1 = case1_file.read()

case1 = case1.replace("\n", "").replace("\t", "").replace("\r", "")

soup = BeautifulSoup(case1, "lxml")


table = soup.find("td", class_="style5").find("table")

composers = table.find_all("b")
composers
