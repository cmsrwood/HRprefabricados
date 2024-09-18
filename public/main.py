import os
import glob

def renombrar_imagenes(directorio, nuevo_nombre_base):
    # Busca todas las imágenes jpg en el directorio
    imagenes = glob.glob(os.path.join(directorio, "*.jpg"))
    
    # Itera sobre las imágenes encontradas y las renombra
    for idx, imagen in enumerate(imagenes, start=1):
        extension = os.path.splitext(imagen)[1]
        nuevo_nombre = f"{nuevo_nombre_base}_{idx}{extension}"
        nuevo_path = os.path.join(directorio, nuevo_nombre)
        os.rename(imagen, nuevo_path)
        print(f"{imagen} renombrado a {nuevo_path}")

# Usar la función
directorio_imagenes = "./public/proyectos/1"  # Cambia esta ruta a la carpeta deseada
nuevo_nombre_base = "imagen"  # Nombre base para las imágenes
renombrar_imagenes(directorio_imagenes, nuevo_nombre_base)
