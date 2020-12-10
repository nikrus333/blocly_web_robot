from flask import Flask, request, send_from_directory
from flask import render_template

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')



@app.route('/templates/<path:path>')
def send_js(path):
    return send_from_directory('templates', path)
'''
@app.route('/turtlebro_blockly')
def send_js(name=None):
    return send_from_directory('turtlebro_blockly', 'templates/hello.html')

@app.route('/templates/<name>')
def hello(name):
    return render_template('hello.html', name=name)
'''
    
if __name__ == "__main__":
    app.run()