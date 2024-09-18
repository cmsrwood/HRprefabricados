import os
import glob

def renombrar_imagenes(directorio, nuevo_nombre_base):
    imagenes = glob.glob(os.path.join(directorio, "*.jpg"))
    
    for idx, imagen in enumerate(imagenes, start=1):
        extension = os.path.splitext(imagen)[1]
        nuevo_nombre = f"{nuevo_nombre_base}_{idx}{extension}"
        nuevo_path = os.path.join(directorio, nuevo_nombre)
        os.rename(imagen, nuevo_path)
        print(f"{imagen} renombrado a {nuevo_path}")

directorio_imagenes = "./public/proyectos/1" 
nuevo_nombre_base = "imagen"
renombrar_imagenes(directorio_imagenes, nuevo_nombre_base)
