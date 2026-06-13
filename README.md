# ⚡ DevPulse

DevPulse is a modern, real-time developer analytics and engineering dashboard. It connects seamlessly with GitHub to track commit patterns, pull requests, active development days, and leverages AI (Gemini 2.5 Flash) to generate weekly productivity summaries.

🚀 **Live Site:** [https://devpulse-gamma-six.vercel.app](https://devpulse-gamma-six.vercel.app)

---

## ✨ Features

- **📊 Real-time Dashboard:** Displays engineering stats including commits, PRs, active days, and weekly trends.
- **📈 Repository Analytics:** Inspect detailed metadata for each tracked repository (stars, forks, open issues, languages).
- **🤖 AI Weekly Summaries:** Automatically generates engineering summaries and productivity insights powered by Gemini.
- **🔄 GitHub Webhook Syncing:** Synchronizes pushes and pull request events to keep dashboard data updated in real-time.
- **🔐 Secure OAuth:** Sign in securely using your GitHub account.

---

## 🛠️ Tech Stack

### Frontend
- **React** (Vite-based app)
- **Tailwind CSS / Vanilla CSS**
- **Recharts** (Interactive data visualization)
- **Lucide Icons**

### Backend
- **Node.js** & **Express**
- **TiDB Cloud** (Serverless MySQL Database)
- **Gemini 2.5 Flash API** (AI Insights)
- **GitHub REST API & Webhooks**

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MySQL or TiDB Cloud Instance
- GitHub OAuth App Client ID & Secret
- Gemini API Key

### Backend Setup (`/server`)
1. Create a `.env` file in the `server` directory:
   ```env
   DB_HOST=your-tidb-host
   DB_PORT=4000
   DB_USER=your-tidb-user
   DB_PASSWORD=your-tidb-password
   DB_NAME=devpulse
   DB_SSL=true
   JWT_SECRET=your-jwt-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   GEMINI_API_KEY=your-gemini-key
   GEMINI_MODEL=gemini-2.5-flash
   ```
2. Initialize database schema:
   ```bash
   mysql -u root -p < database/schema.sql
   ```
3. Install dependencies and start:
   ```bash
   cd server
   npm install
   npm start
   ```

### Frontend Setup (`/client`)
1. Create a `.env` file in the `client` directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```
2. Install dependencies and start:
   ```bash
   cd client
   npm install
   npm run dev
   ```

---

## 👥 Contributors

This repository is maintained by the **DevPulse** team.

### How to Change Contributors

To add or manage repository contributors on GitHub:
1. Go to the main repository page on GitHub: `https://github.com/Deeapk883/devpulse_1`
2. Click on the ⚙️ **Settings** tab in the top navigation bar.
3. Under the **Access** section in the left sidebar, click on **Collaborators**.
4. Click the green **Add people** button.
5. Search for the user by their GitHub username, full name, or email, and invite them.
6. Once they accept the invitation, they will be listed as contributors with commit access!

---

## 📄 License
This project is licensed under the MIT License.
