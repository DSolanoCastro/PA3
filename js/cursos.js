// Clase Curso
class Curso {
  constructor(id, nombre, precio, imagen, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }

  mostrarEnHTML() {
    const div = document.createElement('div');
    div.classList.add('curso');
    div.innerHTML = `
      <img src="${this.imagen}" alt="${this.nombre}" class="curso-img">
      <h3>${this.nombre}</h3>
      <p>${this.descripcion}</p>
      <p><strong>Precio:</strong> S/ ${this.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${this.id})">Agregar al carrito</button>
    `;
    return div;
  }
}

// Array de cursos instanciando la clase
const cursos = [
  new Curso(1, "Seguridad en Redes", 150, "img/redes.jpg", "Aprende a proteger redes informáticas contra accesos no autorizados y amenazas comunes."),
  new Curso(2, "Criptografía", 120, "img/criptografia.jpg", "Conoce los fundamentos del cifrado de datos y técnicas para proteger la información."),
  new Curso(3, "Hacking Ético", 180, "img/hacking.jpg", "Conviértete en un hacker ético y aprende a detectar vulnerabilidades en sistemas."),
  new Curso(4, "Gestión de Incidentes", 130, "img/incidentes.jpg", "Aprende a responder ante ciberataques de forma organizada y profesional."),
  new Curso(5, "Análisis de Vulnerabilidades", 140, "img/vulnerabilidades.jpg", "Detecta y evalúa riesgos de seguridad en aplicaciones y sistemas."),
  new Curso(6, "Seguridad en Aplicaciones Web", 160, "img/aplicaciones.jpg", "Protege tus aplicaciones web contra ataques como XSS, CSRF y SQLi.")
];

const cursosContainer = document.getElementById('cursos-container');
const carritoLista = document.getElementById('carrito-lista');
const totalSpan = document.getElementById('total');
let carrito = [];

// Mostrar los cursos en pantalla
cursos.forEach(curso => {
  cursosContainer.appendChild(curso.mostrarEnHTML());
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
