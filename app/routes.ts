import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  index("routes/slider.tsx"),

  // Leistungen (public URLs use /autoglas/... so we map them)
  route("/autoglas/austausch", "routes/leistungen/austausch/index.tsx"),
  route("/autoglas/kalibrierung", "routes/leistungen/kalibrierung/index.tsx"),
  route("/autoglas/reparatur", "routes/leistungen/reparatur/index.tsx"),
  route(
    "/versicherungsabwicklung",
    "routes/leistungen/versicherungsabwicklung/index.tsx"
  ),
  route("/impressum", "routes/rechtliches/impressum/index.tsx"),
  route("/datenschutz", "routes/rechtliches/datenschutz/index.tsx"),

  // Standorte
  route("/standorte", "routes/standorte/index.tsx"),
  route(
    "/standorte/bietigheim-bissingen",
    "routes/standorte/bietigheim/index.tsx"
  ),
  route("/standorte/herrenberg", "routes/standorte/herrenberg/index.tsx"),
  // Über WinGlass (map friendly public paths)
  route("/10-grunde", "routes/ueberwinglass/gruende/index.tsx"),
  route("/kontakt", "routes/ueberwinglass/kontakt/index.tsx"),
  route("/referenzen", "routes/ueberwinglass/referenzen/index.tsx"),
  route("/uber-uns", "routes/ueberwinglass/ueber_uns/index.tsx"),
  route("/wissenswert", "routes/ueberwinglass/wissenswert/index.tsx"),
  route("/schaden-prüfen", "routes/schaden/index.tsx"),
] satisfies RouteConfig;
