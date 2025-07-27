const express = require("express");
const path = require("path");
const app = express();
const PORT = 5500;

// Middleware to serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// ✅ Backend Test API (move this early!)
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend is working!" });
});

// 🔹 HTML Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});
app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "cart.html"));
});
app.get("/dairy", (req, res) => {
  res.sendFile(path.join(__dirname, "dairy.html"));
});
app.get("/fastgas", (req, res) => {
  res.sendFile(path.join(__dirname, "fastgas.html"));
});
app.get("/freshfarm", (req, res) => {
  res.sendFile(path.join(__dirname, "freshfarm.html"));
});
app.get("/masalaking", (req, res) => {
  res.sendFile(path.join(__dirname, "masalaking.html"));
});
app.get("/order", (req, res) => {
  res.sendFile(path.join(__dirname, "order.html"));
});
app.get("/orderhistory", (req, res) => {
  res.sendFile(path.join(__dirname, "orderhistory.html"));
});
app.get("/receipt", (req, res) => {
  res.sendFile(path.join(__dirname, "receipt.html"));
});
app.get("/track", (req, res) => {
  res.sendFile(path.join(__dirname, "track.html"));
});
app.get("/admin-login", (req, res) => {
  res.sendFile(path.join(__dirname, "admin-login.html"));
});

// ❌ 404 handler should come last
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// ✅ Start server
app.listen(PORT,()=>{
  console.log("✅  Server is running at http://localhost:${PORT}")
});