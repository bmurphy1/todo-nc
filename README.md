# todo-nc

Project to meet the following requirements:

- App built entirely in front end
- Interact with given API
- Users must be able to:
	- Sign up
	- Log in
	- See a list of all their todos
	- Create new todos
	- Edit a todo
	- Mark todos as complete
	- Reorder their todos (this is just client-side)
	- Additional feature of my choice: bulk mark completed

#### Requirements
- Node.js

#### How to run
- Clone repo:
```
git clone https://github.com/bmurphy1/todo-nc.git
```
- Setup environment:
```
make clean
make env
```
- Start Node server:
```
make run
```
- View in browser:
```
http://localhost:9000
```
- Run tests (ensure node server is running first):
```
make tests
```