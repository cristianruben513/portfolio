#!/bin/bash

# Obtiene la ruta del directorio actual donde se encuentra el script
input_folder="$(dirname "$(readlink -f "$0")")"

# Comprueba si la carpeta de salida existe, si no, la crea
output_folder="${input_folder}"

# Itera sobre todas las imágenes en la carpeta de entrada
for image_file in "${input_folder}"/*.{jpg,jpeg,png,JPG,JPEG,webp}; do
    # Nombre del archivo sin extensión
    filename=$(basename -- "$image_file")
    filename_no_ext="${filename%.*}"

    # Convierte la imagen a WebP
    cwebp -q 60 "$image_file" -o "${output_folder}/${filename_no_ext}.webp"
    
    # Imprime un mensaje indicando el progreso
    echo "Convertido: ${filename} -> ${filename_no_ext}.webp"
    
    # Elimina el archivo original
    rm "$image_file"
    echo "Eliminado: ${filename}"
done

echo "¡Proceso completo!"