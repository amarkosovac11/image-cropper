# 📸 Image Cropper

A full-stack web application that allows users to upload, crop and download images.  
Frontend is built with **React (Vite)**, backend with **Node + Mutter + Express + Sharp** and both can run locally or in Docker.  

---

## ⚡ Features
- Upload images from your computer  
- Select crop area interactively  
- Preview cropped result  
- Generate and download final cropped image  
- Run locally or with Docker  

---

## 📂 Project Structure
├── backend/  <br>
│ ├── server.js <br>
│ └── Dockerfile <br>
├── image-cropper/ (frontend)<br>
│ ├── src/ <br>
│ └── Dockerfile <br>
├── docker-compose.yml <br>
└── README.md <br>

---

## ⚡ Installation

1. Git clone https://github.com/amarkosovac11/image-cropper <br>

2. cd image-cropper <br>

3. cd backend <br>
   npm install <br>
   node server.js <br>
   
4. (cd ..) <br>
   cd image-cropper <br>
   npm install <br>
   npm run dev <br>
   

5. OPTION 1 (Docker):  <br>
  (Docker Desktop must be running) <br>
  docker-compose up --build <br>
   
6. OPTION 2 <br>
   (Must have express multer sharp cors) <br>
   npm install express multer sharp cors <br>
   
7. http://localhost:3000 <br>

---

## 📖 Usage

1) Open http://localhost:3000 in your browser.

2) Click Choose Image to upload a picture.

3) Adjust the crop area.

4) Click Preview to see a scaled-down version.

5) Click Generate Final to create the final cropped image.

6) Click Download Final to save it.


 

---

 

