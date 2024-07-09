const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "./views/layouts"),
    partialsDir: path.join(__dirname, "./views/Componentes"),
    helpers: {
      bienvenida: function () {
        return "Bienvenido al mercado WEB, seleccione sus productos";
      },
    },
  })
);

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
  "/BootstrapJs",
  express.static(__dirname + "/node_modules/bootstrap/dist/js/bootstrap.js")
);
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));

app.get("/", function (req, res) {
  res.render("Dashboard", {
    productos: ["banana", "cebollas", "pimentón", "papas", "lechuga", "tomate"],
  });
});

app.listen(process.env.PORT || 3000);
