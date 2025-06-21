// Array de cursos disponibles
const cursos = [
  {
    id: 1,
    nombre: "Seguridad en Redes",
    precio: 120,
    imagen: "img/redes.jpg",
    descripcion: "Aprende a proteger redes y sistemas de comunicación."
  },
  {
    id: 2,
    nombre: "Criptografía",
    precio: 100,
    imagen: "img/criptografia.jpg",
    descripcion: "Cifra y protege tus datos con algoritmos modernos."
  },
  {
    id: 3,
    nombre: "Hacking Ético",
    precio: 150,
    imagen: "img/hacking.jpg",
    descripcion: "Identifica vulnerabilidades de manera legal y segura."
  },
  {
    id: 4,
    nombre: "Gestión de Incidentes",
    precio: 110,
    imagen: "img/incidentes.jpg",
    descripcion: "Responde eficazmente ante ciberataques y fallos."
  },
  {
    id: 5,
    nombre: "Análisis de Vulnerabilidades",
    precio: 130,
    imagen: "img/vulnerabilidades.jpg",
    descripcion: "Evalúa y soluciona debilidades en los sistemas informáticos."
  },
  {
    id: 6,
    nombre: "Seguridad en Aplicaciones Web",
    precio: 140,
    imagen: "img/aplicaciones.jpg",
    descripcion: "Protege tus aplicaciones web contra amenazas comunes."
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
    <button class="boton" onclick="agregarAlCarrito(${curso.id})">Agregar al carrito</button>
  `;
  cursosContainer.appendChild(div);
});

function agregarAlCarrito(id) {
  // Verificar si el curso ya está en el carrito
  const yaAgregado = carrito.some(curso => curso.id === id);
  if (yaAgregado) {
    alert("Este curso ya ha sido agregado al carrito.");
    return;
  }

  const cursoSeleccionado = cursos.find(curso => curso.id === id);
  carrito.push(cursoSeleccionado);
  actualizarCarrito();
}


function actualizarCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;
  carrito.forEach((curso, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${curso.nombre} - S/ ${curso.precio.toFixed(2)} <span class='eliminar' onclick='eliminarCurso(${index})'>❌</span>`;
    carritoLista.appendChild(li);
    total += curso.precio;
  });
  totalSpan.textContent = total.toFixed(2);
}

function eliminarCurso(indice) {
  if (indice >= 0 && indice < carrito.length) {
    carrito.splice(indice, 1);
    actualizarCarrito();
  }
}

function contarCursos(index = 0) {
  return index >= carrito.length ? 0 : 1 + contarCursos(index + 1);
}

function mostrarCursosEnModal() {
  const contenedor = document.getElementById("cursosSeleccionados");
  if (carrito.length > 0) {
    const lista = carrito.map(curso => `- ${curso.nombre}`).join("<br>");
    contenedor.innerHTML = `<strong>Cursos seleccionados:</strong><br>${lista}`;
  } else {
    contenedor.innerHTML = "<strong>No has seleccionado ningún curso.</strong>";
  }
}

function validarFormularioCompra(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombreModal").value.trim();
  const correo = document.getElementById("correoModal").value.trim();
  const telefono = document.getElementById("telefonoModal").value.trim();
  const esTelefonoValido = /^\d{9}$/.test(telefono);

  if (!nombre || !correo || !esTelefonoValido) {
    alert("Por favor, completa todos los campos correctamente.");
    return false;
  }

  document.getElementById("form-compra").style.display = "none";
  document.getElementById("mensaje-confirmacion").style.display = "block";

  setTimeout(() => {
    document.getElementById("form-compra").reset();
    document.getElementById("form-compra").style.display = "block";
    document.getElementById("mensaje-confirmacion").style.display = "none";
    cerrarModal();
    carrito = [];
    actualizarCarrito();
  }, 3000);

  return false;
}
