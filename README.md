# Installation Instructions

Download this repository as a zip folder (can be found by clicking the green **Code** dropdown button).
Unzip the folder.
Go to your browser's extension settings page.
Turn on developer mode.
Select **Load Unpacked**.
Select the unzipped folder fo this repository.

#### Boom you have installed the browser extension

# Running the extension

Simply head the NCEA Summary page with this browser extension activated. By pressing the S key, you will
reveal your grades one by one from top to bottom.

# Somethings to note

Because each school has a different NCEA Summary URL, you will have to open the manifest.json file and change the URL under
the property `matches`. It is defaultly set to Nayland.

> For example if your school is Waimea College, then you would probably change the URL to something like `https://student.waimea.school.nz/ncea_summary`
