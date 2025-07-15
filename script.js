const malla = {
  "1º Año - 1º Cuatrimestre": [
    "Biología Celular",
    "Matemáticas y Estadística",
    "Física",
    "Química Inorgánica y General"
  ],
  "1º Año - 2º Cuatrimestre": [
    "Anatomía Humana",
    "Fisicoquímica",
    "Bioquímica",
    "Química Orgánica",
    "Biología Vegetal"
  ],
  "2º Año - 1º Cuatrimestre": [
    "Química Analítica",
    "Biología Molecular",
    "Fisiología Humana",
    "Ampliación de Química Orgánica"
  ],
  "2º Año - 2º Cuatrimestre": [
    "Fisiopatología",
    "Microbiología y Parasitología General",
    "Inmunología",
    "Bioquímica Clínica",
    "Técnicas Instrumentales"
  ],
  "3º Año - 1º Cuatrimestre": [
    "Química Farmacéutica 1",
    "Farmacología 1",
    "Microbiología y Parasitología Descriptiva",
    "Nutrición y Bromatología"
  ],
  "3º Año - 2º Cuatrimestre": [
    "Química Farmacéutica 2",
    "Farmacología 2",
    "Farmacia Galénica",
    "Medicina Tropical"
  ],
  "4º Año - 1º Cuatrimestre": [
    "Tecnología Farmacéutica 1",
    "Farmacognosia",
    "Biofarmacia y Farmacocinética",
    "Optativa 1"
  ],
  "4º Año - 2º Cuatrimestre": [
    "Tecnología Farmacéutica 2",
    "Optativa 2",
    "Legislación",
    "Farmacia Clínica y Farmacoterapia"
  ],
  "5º Año - 1º Cuatrimestre": [
    "Salud Pública",
    "Toxicología",
    "Optativa 3",
    "Microbiología y Parasitología Clínica"
  ],
  "5º Año - 2º Cuatrimestre": [
    "Trabajo Final de Grado",
    "Prácticas Tuteladas"
  ]
};

const container = document.getElementById("malla-container");

for (const [cuatrimestre, materias] of Object.entries(malla)) {
  const column = document.createElement("div");
  column.className = "column";

  const title = document.createElement("h2");
  title.textContent = cuatrimestre;
  column.appendChild(title);

  materias.forEach((materia) => {
    const div = document.createElement("div");
    div.className = "subject";
    div.textContent = materia;

    div.addEventListener("click", () => {
      div.classList.toggle("approved");
    });

    column.appendChild(div);
  });

  container.appendChild(column);
}
