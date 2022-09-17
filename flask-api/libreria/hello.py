
import random

def say_hello():
    return {
        "message": "Hello Worlds"
    }

def sumar_numeros(a, b):
    return int(a) + int(b)

def generar_numeros():
    result = []
    for _ in range(5):
        generar_numeros_unicos(result)
    return result

def generar_numeros_unicos(listado: list):
    new_number = random.randrange(0, 100)
    if new_number in listado:
        generar_numeros_unicos(listado)
    else:
        listado.append(new_number)
