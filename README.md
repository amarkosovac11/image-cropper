# 📸 Image Cropper

A full-stack web application that allows users to upload, crop and download images.  
Frontend is built with **React (Vite)**, backend with **Express + Sharp**, and both can run locally or in Docker.  

---

## ⚡ Features
- Upload images from your computer  
- Select crop area interactively  
- Preview cropped result  
- Generate and download final cropped image  
- Run locally or with Docker  

---

## 📂 Project Structure
├── backend/ # Express + Sharp backend
│ ├── server.js
│ └── Dockerfile
├── image-cropper/ # React (Vite) frontend
│ ├── src/
│ └── Dockerfile
├── docker-compose.yml
└── README.md

---

## 📖 Usage

1. Open **http://localhost:3000** in your browser.  
2. Click **Choose Image** to upload a picture.  
3. Adjust the crop area.  
4. Click **Preview** to see a scaled-down version.  
5. Click **Generate Final** to create the final cropped image.  
6. Click **Download Final** to save it.  

---

## ⚡ Requirements

- Node.js **>=16** (if running without Docker)  
- NPM  
- Docker (optional, for containerized setup)  

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), CSS  
- **Backend**: Express, Sharp  
- **Containerization**: Docker, Docker Compose  

