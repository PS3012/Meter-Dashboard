# ⚡ Meter Data Visualization Dashboard

Frontend Technical Assignment – React Developer

---

## 📌 Overview

This project is a **React-based data visualization dashboard** built to analyze and visualize electricity metering data.

The application reads meter data from a CSV file hosted on the server and provides:

* Interactive data visualization (Line & Stacked Bar charts)
* Custom time window filtering
* Multi-meter selection
* Intelligent alert detection
* Configurable dashboard settings
* Clean and modern UI using Tailwind CSS

The application is accessible via:

```
http://localhost:5173/visualize
```

---

## 🚀 Features Implemented

### 1️⃣ Data Visualization

* 📈 Line Chart and 📊 Stacked Bar Chart options
* Multiple meter selection (M1, M2, M3, M4)
* Time range filtering (custom start & end)
* Interactive tooltip on hover
* Distinct professional colors for each meter
* Graph highlighting when alert is clicked

---

### 2️⃣ Alert Widget

Two types of alerts are generated:

#### 🔴 Total Overload Alert

Triggered when:

```
M1 + M2 + M3 + M4 > 1000 Watts
```

Each timestamp exceeding the threshold creates a unique alert.

---

#### ⚠ Leakage Detection Alert

Triggered when:

```
| Cluster Meter Power - (M1+M2+M3+M4) | > 300 Watts
```

Each timestamp exceeding leakage threshold creates a unique alert.

---

#### 📍 Alert Interaction

* Clicking an alert highlights the respective timestamp on the graph.
* Alert widget can be enabled/disabled via configuration screen.

---

### 3️⃣ Configuration Screen

* Switch between Line and Stacked Bar chart
* Toggle Alert Widget on/off

---

### 4️⃣ Calendar Validation

* Date selection restricted to CSV data range
* Prevents selection outside available dataset
* Handles invalid time ranges (start > end)
* Fully dynamic based on dataset min/max timestamp

---

## 🛠 Tech Stack

* **React (Functional Components + Hooks)**
* **React Router**
* **Recharts** (Data Visualization)
* **Tailwind CSS** (Styling)
* **PapaParse** (CSV Parsing)
* **Day.js** (Date Parsing & Formatting)

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── ChartView.jsx
 │    ├── AlertPanel.jsx
 │    ├── FilterPanel.jsx
 │
 ├── context/
 │    └── ConfigContext.jsx
 │
 ├── hooks/
 │    ├── useMeterData.js
 │    └── useAlerts.js
 │
 ├── pages/
 │    ├── Dashboard.jsx
 │    └── Config.jsx
 │
 ├── App.jsx
 ├── main.jsx
```

CSV file is placed inside:

```
public/metering_power_data.csv
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```
git clone <your-repo-url>
cd polaris-dashboard
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run Development Server

```
npm run dev
```

Open:

```
http://localhost:5173/visualize
```

---

## 🧠 Design Decisions

* Used **Recharts** for clean declarative charting.
* Used **Day.js with customParseFormat plugin** for strict CSV timestamp parsing.
* Context API used for global configuration state.
* Separated logic using custom hooks for better scalability.
* Tailwind CSS chosen for rapid, consistent, and clean UI styling.
* Defensive coding used for:

  * Invalid timestamps
  * Empty CSV rows
  * Invalid date ranges
  * Optional alert toggling

---

## 🎨 UI/UX Highlights

* Professional navbar with active link highlighting
* Clean dashboard layout using grid system
* Soft shadows and rounded containers
* Color-coded meter lines
* Interactive alert highlighting
* Responsive layout

---

## 📊 Assumptions

* CSV contains valid data in the format:

  ```
  DD-MM-YYYY HH:mm
  ```
* Dataset is chronologically ordered.
* Threshold values:

  * Overload: 1000W
  * Leakage: 300W

---

## 🔮 Possible Enhancements

* Group continuous alert durations instead of individual timestamps
* Add summary KPI cards (Max / Avg / Total)
* Add dark mode toggle
* Add export to CSV / PDF
* Add backend API integration
* Add real-time streaming capability

---

## 📎 Notes

This project was implemented strictly using:

* React functional components
* Hooks
* Clean architecture
* Modular code structure
* Version control best practices

---

## 👨‍💻 Author

Piyush Sahu
Frontend Developer Candidate

---

**Thank you for reviewing this assignment.**
