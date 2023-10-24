function generatePass(longitud = 16, incluirEspeciales = true) {
  const caracteresEspeciales = '!@#$%^&*';
  const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';

  let caracteresDisponibles = caracteresMinusculas + caracteresMayusculas + numeros;

  if (incluirEspeciales) {
    caracteresDisponibles += caracteresEspeciales;
  }

  let contrasena = '';

  if (longitud < 4 || longitud > 16) {
    return 'La longitud de la contraseña debe estar entre 4 y 16 caracteres';
  }

  // Aseguramos al menos un carácter de cada tipo
  contrasena += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
  contrasena += caracteresMinusculas[Math.floor(Math.random() * caracteresMinusculas.length)];
  contrasena += caracteresMayusculas[Math.floor(Math.random() * caracteresMayusculas.length)];
  contrasena += numeros[Math.floor(Math.random() * numeros.length)];

  // Completamos el resto de la contraseña
  // eslint-disable-next-line no-plusplus
  for (let i = 4; i < longitud; i++) {
    contrasena += caracteresDisponibles[Math.floor(Math.random() * caracteresDisponibles.length)];
  }

  // Mezclamos los caracteres de la contraseña
  contrasena = contrasena.split('').sort(() => Math.random() - 0.5).join('');

  return contrasena;
}

module.exports = {
  generatePass,
};
