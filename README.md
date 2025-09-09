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
   Return to step 3 and 4
   
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

## 🖼️ Screenshots
<img width="1822" height="877" alt="image" src="https://github.com/user-attachments/assets/eda1b844-121d-4670-ab5e-35221460a6da" />
<br>

---

<img width="1812" height="863" alt="image" src="https://github.com/user-attachments/assets/a95c296b-a364-4658-b2bf-c44a5e0ea683" />
<br>

---

<img width="1812" height="863" alt="image" src="https://github.com/user-attachments/assets/5d893075-fe17-469a-8371-f5637c70a7bf" />
<br>

---

<img width="1793" height="855" alt="image" src="https://github.com/user-attachments/assets/26b697bc-98f6-4ff3-9ab4-135a10e64075" />
<br>

---



 

