const vue = new Vue({

    el: "#main"
    , data: {
        inputText: ''
        , tasks: ['task1','task2','task3']
        , show: true
        , ifDirective: true
        , task: null
        , todoList: []
        //comptuted properties
        , title: null
        , objects: [
            {title: 'title 1 (completed)', completed: true}
            ,{title: 'title 2 (not completed)', completed: false}
            ,{title: 'title 3 (completed)', completed: true}
            ,{title: 'title 4 (not completed)', completed: false}
            ,{title: 'title 5 (completed)', completed: true}
            ,{title: 'title 6 (not completed)', completed: false}
        ]
    }
    , methods: {
        addTask() {
            addTask(this.todoList, this.task);
            this.task = null
        }
        //computed properties
        , addObject() {
            if(this.title)
                this.objects.push({title: this.title, completed: false});
            this.title = null;
        }
    }
    , computed: {
        showCompleted() {
            return this.objects.filter(object => object.completed);
        }
    }
});

const addTask = (tasks, task) => {
    if(task) {
        tasks.push(task);
    }
};