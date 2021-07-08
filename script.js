// ARRAYS PACIENTES

// PACIENTES RADIOLOGÍA

let radiology = [
  {
    hora: "11:00",
    especialista: "Ignacio Schulz",
    paciente: "Francisca Rojas",
    rut: "9878782-1",
    prevision: "Fonasa",
  },
  {
    hora: "11:30",
    especialista: "Federico Subercaseaux",
    paciente: "Pamela Estrada",
    rut: "15345241-3",
    prevision: "Isapre",
  },
  {
    hora: "15:00",
    especialista: "Fernando Wurthz",
    paciente: "Armando Luna",
    rut: "16445345-9",
    prevision: "Isapre",
  },
  {
    hora: "15:30",
    especialista: "Ana María Godoy",
    paciente: "Manuel Godoy",
    rut: "17666419-0",
    prevision: "Fonasa",
  },
  {
    hora: "16:00",
    especialista: "Patricia Suazo",
    paciente: "Ramón Ulloa",
    rut: "149893",
    prevision: "Fonasa",
  },
];

// PACIENTES TRAUMATOLOGÍA

let traumatology = [
  {
    hora: "8:00",
    especialista: "María Paz Altuzarra",
    paciente: "Paula Sanchez",
    rut: "15554774-5",
    prevision: "Fonasa",
  },
  {
    hora: "10:00",
    especialista: "Raul Araya",
    paciente: "Angélica Navas",
    rut: "15444147-9",
    prevision: "Isapre",
  },
  {
    hora: "10:30",
    especialista: "María Arriagada",
    paciente: "Ana Klapp",
    rut: "17879423-9",
    prevision: "Isapre",
  },
  {
    hora: "11:00",
    especialista: "Alejandro Badilla",
    paciente: "Felipe Mardones",
    rut: "1547423-6",
    prevision: "Isapre",
  },
  {
    hora: "11:30",
    especialista: "Cecilia Budnik",
    paciente: "Diego Marre",
    rut: "16554741-k",
    prevision: "Fonasa",
  },
  {
    hora: "12:00",
    especialista: "Arturo Cavagnaro",
    paciente: "Cecilia Mendez",
    rut: "9747535-8",
    prevision: "Isapre",
  },
  {
    hora: "12:30",
    especialista: "Andrés Kanacri",
    paciente: "Marcial Suazo",
    rut: "11254785-5",
    prevision: "Isapre",
  },
];

// PACIENTES DENTAL

let dental = [
    {
      hora: "8:30",
      especialista: "Andrea Zúñiga",
      paciente: "Marcela Retamal",
      rut: "111234285-6",
      prevision: "Isapre",
    },
    {
      hora: "11:00",
      especialista: "María Pía Zañartu",
      paciente: "Ángel Muñoz",
      rut: "9878789-2",
      prevision: "Isapre",
    },
    {
      hora: "11:30",
      especialista: "Scarlett Witting",
      paciente: "Mario Kast",
      rut: "7998789-5",
      prevision: "Fonasa",
    },
    {
      hora: "13:00",
      especialista: "Francisco Von Teuber",
      paciente: "Karin Fernandez",
      rut: "18887662-k",
      prevision: "Fonasa",
    },
    {
      hora: "13:30",
      especialista: "Eduardo Viñuela",
      paciente: "Hugo Sánchez",
      rut: "17665461-4",
      prevision: "Fonasa",
    },
    {
      hora: "14:00",
      especialista: "Raquel Villaseca",
      paciente: "Ana Sepúlveda",
      rut: "14441281-0",
      prevision: "Isapre",
    }
  ];

// OBTENCIÓN DE VALORES DE ARREGLOS Y SU RESPECTIVO PRINT

document.write("<h1>Estadísticas centro médico ñuñoa</h1>");

// VALORES Y PRINT DE RADIOLOGÍA

let lastElementRadio = radiology.length - 1;
let firstElementRadio = 0;

document.write(
  "<h2>Primera Hora Radiología</h2>" +
    '<p class="radiology radiology--firstElement">'
);
for (key in radiology[firstElementRadio]) {
  document.write(key + ": " + radiology[firstElementRadio][key] + "<br>");
}
document.write(
  "<h2>Última Hora Radiología</h2>" +
    '</p><p class="radiology radiology--lastElement">'
);
for (key in radiology[lastElementRadio]) {
  document.write(key + ": " + radiology[lastElementRadio][key] + "<br>");
}
document.write("</p>");

// VALORES Y PRINT DE TRAUMATOLOGÍA

let lastElementTrauma = traumatology.length - 1;
let firstElementTrauma = 0;

document.write(
  "<h2>Primera Hora Traumatología</h2>" +
    '<p class="traumatology traumatology--firstElement">'
);
for (key in traumatology[firstElementTrauma]) {
  document.write(key + ": " + traumatology[firstElementTrauma][key] + "<br>");
}
document.write(
  "<h2>Última Hora Traumatología</h2>" +
    '</p><p class="traumatology traumatology--lastElement">'
);
for (key in traumatology[lastElementTrauma]) {
  document.write(key + ": " + traumatology[lastElementTrauma][key] + "<br>");
}
document.write("</p>");

// VALORES Y PRINT DE DENTAL

let lastElementDental = dental.length - 1;
let firstElementDental = 0;

document.write(
  "<h2>Primera Hora Dental</h2>" +
    '<p class="Dental Dental--firstElement">'
);
for (key in dental[firstElementDental]) {
  document.write(key + ": " + dental[firstElementDental][key] + "<br>");
}
document.write(
  "<h2>Última Hora Dental</h2>" +
    '</p><p class="Dental Dental--lastElement">'
);
for (key in dental[lastElementDental]) {
  document.write(key + ": " + dental[lastElementDental][key] + "<br>");
}
document.write("</p>");
