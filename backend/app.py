from flask import Flask, jsonify
 
app = Flask(__name__)
 
@app.route('/')
def index():
    return jsonify({'message': 'Welcome to the backend!'})
 
if __name__ == '__main__':
    app.run(debug=True)