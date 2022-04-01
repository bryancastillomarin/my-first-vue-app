const vue = new Vue({
	el: '#main'
	, data: {
		id: 0
		, allTodos: []
		, createdTodos:[]
		, inProgreesTodos: []
		, errorTodos: []
		, finishedTodos: []
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