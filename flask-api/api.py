from flask import Flask, jsonify, request
from libreria.hello import say_hello, sumar_numeros, generar_numeros
from flask_cors import CORS, cross_origin
  
app = Flask(__name__)
CORS(app)
  
@app.route('/hello', methods=['GET'])
def helloworld():
    data = say_hello()
    return jsonify(data)

@app.route("/sumar", methods=["POST"])
def sumar():
    json = request.json
    resultado = sumar_numeros(json["numero_1"], json["numero_2"])
    data = {
        "suma": resultado
    }
    return jsonify(data);

@app.route('/generar_numeros', methods=['GET'])
def generar_numeros_endpoint():
    data = generar_numeros()
    return data
  
if __name__ == '__main__':    
    app.run(debug=True)