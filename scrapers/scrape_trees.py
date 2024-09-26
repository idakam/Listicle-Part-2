from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup, Comment
import time
import json
from selenium.common.exceptions import StaleElementReferenceException, NoSuchElementException, TimeoutException

import re

# Set up the Selenium WebDriver (assuming Chrome)
driver = webdriver.Chrome()

# Base URL to start scraping
base_url = "https://www.nycgovparks.org/facilities/great-trees"
driver.get(base_url)

# Wait for the page to fully load
time.sleep(3)

# List to store tree data
trees_data = []

# Find all tab links (assuming they use data-target or href to activate each tab-pane)
tab_links = driver.find_elements(By.CSS_SELECTOR, 'ul.nav-tabs li a')

# Loop through each tab to activate it
for i in range(len(tab_links)):
        tab_links = driver.find_elements(By.CSS_SELECTOR, 'ul.nav-tabs li a')
    # try:
        # Click each tab link to activate the respective tab-pane
        WebDriverWait(driver, 10).until(EC.element_to_be_clickable(tab_links[i]))
        tab_links[i].click()

        # Wait for the tab-pane to load
        time.sleep(2)

        # Re-locate the active tab after clicking (to avoid stale element references)
        active_tab = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'div.tab-pane.active'))
        )

        # Re-locate the table inside the active tab and the <tbody>
        tbody = active_tab.find_element(By.TAG_NAME, 'tbody')

        # Find all rows <tr> in the table
        rows = tbody.find_elements(By.TAG_NAME, 'tr')

        for i in range(len(rows)):
                active_tab = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, 'div.tab-pane.active')) )

                # Re-locate the table inside the active tab and the <tbody>
                tbody = active_tab.find_element(By.TAG_NAME, 'tbody')

                # Find all rows <tr> in the table
                rows = tbody.find_elements(By.TAG_NAME, 'tr')
                link = rows[i].find_element(By.CLASS_NAME, 'more-left')

                # Click on the link to open the tree's detail page
                WebDriverWait(driver, 10).until(EC.element_to_be_clickable(link))
                driver.execute_script("arguments[0].scrollIntoView(true);", link)
                link.click()

                # Wait for the new page to load
                time.sleep(3)

                # Parse the new page's HTML with BeautifulSoup
                soup = BeautifulSoup(driver.page_source, 'html.parser')

                # Scrape the <h1> tag as the "name" of the tree
                name = soup.find("h1").get_text(strip=True)

                imageLink = soup.find("a", {"class": "featured_link fancybox"})

                try:
                    imageLink = soup.find("a", {"class": "featured_link fancybox"})
                    image = "https://www.nycgovparks.org" + imageLink['href']
                except(TypeError, KeyError) as e:
                    # Token not found. Replace 'pass' with additional logic.
                    image = ""
                    pass


                comments = soup.findAll(text=lambda text:isinstance(text, Comment))

                dd_elements = []
                for c in comments:
                    comment_soup = BeautifulSoup(c, 'html.parser')

                    # Find specific tags within the comment
                    divs = comment_soup.find_all('dd')
                    for div in divs:
                        dd_elements.append(div.text)

                location = dd_elements[1]
                latinName = dd_elements[2]
                treeCode = dd_elements[3]
                height = dd_elements[4]
                trunkDiameter = dd_elements[5]
                canopySpread = dd_elements[6]
                AFAPoints = dd_elements[7]
                description = dd_elements[8]

                tree_info = {
                      "id": 1 + i,
                      "name": name,
                      "location": location,
                      "latinName": latinName,
                      "image": image,
                      "treeCode": treeCode,
                      "height": height,
                      "trunkDiameter": trunkDiameter,
                      "canopySpread": canopySpread,
                      "AFAPoints": AFAPoints,
                      "description": description
                }

                trees_data.append(tree_info)

                driver.back()

                # Wait for the page to reload before proceeding to the next link
                time.sleep(3)

# After collecting the data, save it as a JSON file
with open('tree_data.json', 'w') as outfile:
    json.dump(trees_data, outfile, indent=4)

# Close the browser
driver.quit()

print("Scraping completed and data saved to tree_data.json")
