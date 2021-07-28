function concat(arrays) {
  // suma de las longitudes de array individuales
  let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);

  if (!arrays.length) return null;

  let result = new Uint8Array(totalLength);

  // para cada array: copiarlo sobre "result"
  // el siguiente array es copiado justo después del anterior 
  let length = 0;
  for(let array of arrays) {
    result.set(array, length);
    length += array.length;
  }

  return result;
}
