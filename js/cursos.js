// Array de cursos disponibles
const cursos = [
  {
    id: 1,
    nombre: "Seguridad en Redes",
    precio: 150,
    imagen: "img/redes.jpg",
    descripcion: "Aprende a proteger redes informáticas contra accesos no autorizados y amenazas comunes."
  },
  {
    id: 2,
    nombre: "Criptografía",
    precio: 120,
    imagen: "img/criptografia.jpg",
    descripcion: "Conoce los fundamentos del cifrado de datos y técnicas para proteger la información."
  },
  {
    id: 3,
    nombre: "Hacking Ético",
    precio: 180,
    imagen: "img/hacking.jpg",
    descripcion: "Conviértete en un hacker ético y aprende a detectar vulnerabilidades en sistemas."
  },
  {
    id: 4,
    nombre: "Gestión de Incidentes",
    precio: 130,
    imagen: "img/incidentes.jpg",
    descripcion: "Aprende a responder ante ciberataques de forma organizada y profesional."
  },
  {
    id: 5,
    nombre: "Análisis de Vulnerabilidades",
    precio: 140,
    imagen: "img/vulnerabilidades.jpg",
    descripcion: "Detecta y evalúa riesgos de seguridad en aplicaciones y sistemas."
  },
  {
    id: 6,
    nombre: "Seguridad en Aplicaciones Web",
    precio: 160,
    imagen: "img/aplicaciones.jpg",
    descripcion: "Protege tus aplicaciones web contra ataques como XSS, CSRF y SQLi."
  }
];

const cursosContainer = document.getElementById('cursos-container');
const carritoLista = document.getElementById('carrito-lista');
const totalSpan = document.getElementById('total');

let carrito = [];

// Mostrar los cursos en pantalla
cursos.forEach(curso => {
  const div = document.createElement('div');
  div.classList.add('curso');
  div.innerHTML = `
    <img src="${curso.imagen}" alt="${curso.nombre}" class="curso-img">
    <h3>${curso.nombre}</h3>
    <p>${curso.descripcion}</p>
    <p><strong>Precio:</strong> S/ ${curso.precio.toFixed(2)}</p>
    <button onclick="agregarAlCarrito(${curso.id})">Agregar al carrito</button>
  `;
  cursosContainer.appendChild(div);
});

// Función para agregar curso al carrito
function agregarAlCarrito(id) {
  const cursoSeleccionado = cursos.find(curso => curso.id === id);
  carrito.push(cursoSeleccionado);
  actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;

  carrito.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.nombre} - S/ ${c.precio.toFixed(2)}`;
    carritoLista.appendChild(li);
    total += c.precio;
  });

  totalSpan.textContent = total.toFixed(2);
}
