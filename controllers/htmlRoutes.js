router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
});

router.get("/artist", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/html/landing.html"));
});

route.get("artist/:artistName", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/landing.html"))
})

module.exports = router;
