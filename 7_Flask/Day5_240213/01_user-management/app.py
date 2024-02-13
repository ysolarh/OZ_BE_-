from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# 임시 사용자 데이터
users = [
    {"username": "traveler", "name": "Alex"},
    {"username": "photographer", "name": "Sam"},
    {"username": "gourmet", "name": "Chris"}
]

@app.route('/')
def index():
    return render_template('index.html', users=users)

# 사용자 추가, 수정, 삭제 라우트 및 함수 작성...
@app.route('/add', methods=['GET', 'POST'])
def add_user():
    if request.method == 'GET':
        return render_template('add_user.html')
    req_form = request.form
    username = req_form['username']
    name = req_form['name']
    users.append({'username': username, 'name': name})
    return redirect(url_for('index'))

@app.route('/edit/<name>', methods=['GET', 'POST'])
def edit_user(name):
    for u in users:
        if u['name'] == name:
            user = u
            break
    else:
        return redirect(url_for('index'))
    if request.method == 'GET':
        return render_template('edit_user.html', user = user)
    user['username'] = request.form['username']
    return redirect(url_for('index'))

@app.route('/delete/<name>')
def delete_user(name):
    global users
    users = list(filter(lambda u: u['name'] != name, users))
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)