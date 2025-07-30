<h1 align="center">
  <br>
  <a href="https://p-goetz.de/"><img src="https://p-goetz.de/wp-content/uploads/2025/04/20250404_P-Goetz_DEV_logo.png" alt="P-Goetz" width="200"></a>
</h1>

<h4 align="center">📦 P-Goetz React Timeline</h4>

<p align="center">
  <a href="https://p-goetz.de/"><img src="https://img.shields.io/badge/Version-1.0.0-blue"></a>
  <a href="https://p-goetz.de/"><img src="https://img.shields.io/badge/Author-Philipp_Goetz-yellow"></a>
  <a href="https://p-goetz.de/"><img src="https://img.shields.io/badge/uptime-100%25-brightgreen"></a>

</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#hints-to-not-cry-everytime">Hints</a>
</p>

<!-- Screenshot is optional -->
<!-- ![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif) -->

---

This is a animated Timeline developed with React to be integrated on the p-goetz.de Website as a scrollable CV.

---

# 🏗️ Architecture

## Frontend => React
- **Technology**: React.js
- **Styling**: simple CSS

### Technical Flow
1. React App is build via GitHub Workflows
2. Moved via GitHub Workflows then via FTP to Strato Server
3. Within that Package is also a Wordpres Plugin Included


## 🚀 Key Features

Playground Application with:
1. 
- ✅ REACT Timeline as animated CV

### Roadmap
- 🔜 Coming Soon: for now nothing on the Roadmap

## 🔧 How To Use

### Production

1. Application is dockerized => Start Docker (Desktop)
2. There is a STAGE and PROD env

Start the STAGE Containers
docker-compose -f docker-compose-stage.yml up

Start the PROD Containers
docker-compose -f docker-compose-prod.yml up

### Development




## 🤬 Hints to not cry everytime

- ...


TODO README
- Extended the django backend structure with a "settings" folder with base, development and production settings


Nginx Handles:
/ → React frontend

/admin/ → Django backend (via proxy)

/staticfiles/ → Django static assets


- django checks for commands that are within installed apps (for example createsu.py file for creating superuser on the fly)

- access django backend on stage only directly via port because the staticfiles are not collected and this would lead to problem with react development mode


## Version History

<details>
<summary><strong>v1.0.0</strong> – 01.08.2025</summary>

- ✨ Updated Readme file  
- 🛠 Cleaned up folders and removed old files

</details>

<details>
<summary><strong>v0.0.1</strong> – 30.07.2025</summary>

- 🔧 Inital Deployment

</details>