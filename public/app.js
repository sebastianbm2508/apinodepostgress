const API_URL = 'http://localhost:3000/estudiantes';

document.addEventListener('DOMContentLoaded', cargarEstudiantes);

// GET
async function cargarEstudiantes() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const tabla = document.getElementById('tabla-estudiantes');
  tabla.innerHTML = "";

  data.forEach(est => {
    tabla.innerHTML += `
      <tr>
        <td>${est.id}</td>
        <td>${est.nombre}</td>
        <td>${est.edad}</td>
        <td>
          <button onclick="editar(${est.id}, '${est.nombre}', ${est.edad})">Editar</button>
          <button style="background:red" onclick="eliminar(${est.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

// POST / PUT
document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;

  const estudiante = { nombre, edad };

  if (id) {
    // PUT
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(estudiante)
    });
  } else {
    // POST
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(estudiante)
    });
  }

  document.getElementById('formulario').reset();
  cargarEstudiantes();
});

// Llenar formulario para PUT
function editar(id, nombre, edad) {
  document.getElementById('id').value = id;
  document.getElementById('nombre').value = nombre;
  document.getElementById('edad').value = edad;
}

// DELETE
async function eliminar(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  cargarEstudiantes();
}
