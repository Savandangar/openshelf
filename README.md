# OpenShelf 📚

OpenShelf is a simple and elegant React app to discover books using the [Open Library API](https://openlibrary.org/developers/api). Just type a book title, and it will show results with covers, authors, and direct links to OpenLibrary.

## 🚀 Live Demo
[OpenShelf on StackBlitz]()

## 🛠️ Tech Stack
Built with **React (Vite)** for fast development, styled using **Bootstrap** for a clean responsive layout, and **React Toastify** for toastr-style notifications. It fetches book data from the **Open Library API** with plain **JavaScript (ES6+)**, **HTML5**, and **CSS3**.

## ✨ Features
- Search books by title with instant results  
- Book cards displaying cover image, title, author(s), and first publish year  
- Direct link to each book’s OpenLibrary page  
- Responsive grid layout using Bootstrap  
- Loading spinner while results are fetched  
- Toast notifications for empty searches, no results, and network/API errors  
- Clean and minimal UI with navbar and search bar  

## 🖥️ How to Run
Clone the repository with  
```bash
git clone https://github.com/YOUR-USERNAME/openshelf.git
cd openshelf
```
Install dependencies with
```bash
npm install
```
and start the app locally with
```bash
npm run dev
```
then open http://localhost:5173 in your browser.


📦 Deployment and License

The project is deployed on StackBlitz for instant live preview.
It uses data from the free and public Open Library API. No authentication or API key is required.
