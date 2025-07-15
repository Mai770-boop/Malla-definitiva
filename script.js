const malla = {
  "1º Año": {
    "1º Cuatrimestre": [
      "Biología Celular",
      "Matemáticas y Estadística",
      "Física",
      "Química Inorgánica y General"
    ],
    "2º Cuatrimestre": [
      "Anatomía Humana",
      "Fisicoquímica",
      "Bioquímica",
      "Química Orgánica",
      "Biología Vegetal"
    ]
  },
  "2º Año": {
    "1º Cuatrimestre": [
      "Química Analítica",
      "Biología Molecular",
      "Fisiología Humana",
      "Ampliación de Química Orgánica"
    ],
    "2º Cuatrimestre": [
      "Fisiopatología",
      "Microbiología y Parasitología General",
      "Inmunología",
      "Bioquímica Clínica",
      "Técnicas Instrumentales"
    ]
  },
  "3º Año": {
    "1º Cuatrimestre": [
      "Química Farmacéutica 1",
      "Farmacología 1",
      "Microbiología y Parasitología Descriptiva",
      "Nutrición y Bromatología"
    ],
    "2º Cuatrimestre": [
      "Química Farmacéutica 2",
      "Farmacología 2",
      "Farmacia Galénica",
      "Medicina Tropical"
    ]
  },
  "4º Año": {
    "1º Cuatrimestre": [
      "Tecnología Farmacéutica 1",
      "Farmacognosia",
      "Biofarmacia y Farmacocinética",
      "Optativa 1"
    ],
    "2º Cuatrimestre": [
      "Tecnología Farmacéutica 2",
      "Optativa 2",
      "Legislación",
      "Farmacia Clínica y Farmacoterapia"
    ]
  },
  "5º Año": {
    "1º Cuatrimestre": [
      "Salud Pública",
      "Toxicología",
      "Optativa 3",
      "Microbiología y Parasitología Clínica"
    ],
    "2º Cuatrimestre": [
      "Trabajo Final de Grado",
      "Prácticas Tuteladas"
    ]
  }
};

const container = document.getElementById("malla-container");

for (const [año, cuatris] of Object.entries(malla)) {
  const yearDiv = document.createElement("div");
  yearDiv.classList.add("year");

  const yearTitle = document.createElement("h2");
  yearTitle.textContent = año;
  yearDiv.appendChild(yearTitle);

  for (const [cuatri, materias] of Object.entries(cuatris)) {
    const cuatriDiv = document.createElement("div");
    cuatriDiv.classList.add("quarter");

    const cuatriTitle = document.createElement("h3");
    cuatriTitle.textContent = cuatri;
    cuatriDiv.appendChild(cuatriTitle);

    const subjectsDiv = document.createElement("div");
    subjectsDiv.classList.add("subjects");

    materias.forEach((materia) => {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject");
      subjectDiv.textContent = materia;

      subjectDiv.addEventListener("click", () => {
        subjectDiv.classList.toggle("approved");
      });

      subjectsDiv.appendChild(subjectDiv);
    });

    cuatriDiv.appendChild(subjectsDiv);
    yearDiv.appendChild(cuatriDiv);
  }

  container.appendChild(yearDiv);
}
