const vue = new Vue({
	el: '#main'
	, data: {
		id: 0
		, allTodos:[]
		, newTodo: null
	}
	, methods: {
		addTodo() {
			if(this.newTodo.trim())
				this.allTodos.push({id: this.id++, title: this.newTodo.trim(), completed: false});
			this.newTodo = null;
		}
		, completeTodo(id) {
			const todo = this.getTodo(id)[0];
			todo.completed = true;
		}
		, uncompleteTodo(id) {
			const todo = this.getTodo(id)[0];
			todo.completed = false;
		}
		, getTodo(id) {
			return this.allTodos.filter(item => item.id === id);
		}
	}
	, computed: {
		showCompleted(){
			return this.allTodos.filter(item => item.completed);
		}
	}

});