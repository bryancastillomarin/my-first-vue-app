const vue = new Vue({
	el: '#main'
	, data: {
		id: 0
		, allTodos: []
		, newTodo: null
		, statuses: {
			CREATED: 1
			, IN_PROGRESS: 2
			, ERORR: 3
			, FINISHED: 4
		}
	}
	, methods: {
		addTodo() {
			if(this.newTodo)
				this.allTodos.push({
					id: this.id++
					, title: this.newTodo.trim()
					, progress: 0
					, status: this.statuses.CREATED
				});
			this.newTodo = null;
		}
		, moveToInProgress(id) {
			const todo = this.getTodo(id)[0];
			todo.status = this.statuses.IN_PROGRESS;
		}
		, moveToCompleted(id) {
			const todo = this.getTodo(id)[0];
			todo.status = this.statuses.FINISHED;
		}
		, moveToError(id) {
			const todo = this.getTodo(id)[0];
			todo.status = this.statuses.ERORR;
		}
		, getTodo(id) {
			return this.allTodos.filter(item => item.id === id);
		}
	}
	, computed: {
		showCreated(){
			return this.allTodos.filter(item => item.status === this.statuses.CREATED);
		}
		, showInProgress(){
			return this.allTodos.filter(item => item.status === this.statuses.IN_PROGRESS);
		}
		, showError(){
			return this.allTodos.filter(item => item.status === this.statuses.ERORR);
		}
		, showFinished(){
			return this.allTodos.filter(item => item.status === this.statuses.FINISHED);
		}
	}
});