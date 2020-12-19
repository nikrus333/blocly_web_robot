from flask import Flask, request, send_from_directory, url_for
from flask import render_template

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

menu = ["Настройка", "Видео", "blockly"]

@app.route("/")
def index():
    print( url_for('index') )
    return render_template('index.html', menu = menu)

@app.route("/about")
def about():
    print( url_for('about') )
    return render_template('about.html', title = "О сайте", menu = menu)
    
@app.route('/templates/<path:path>')
def send_js(path):
    return send_from_directory('templates', path)

    
if __name__ == "__main__":
    app.run()