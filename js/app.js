const app = new Vue({
    el:'section',
    data:{
        tasks:[
            {nombre:'compras', descripcion:'ir al super',estado:'a realizar'},
            {nombre:'aprobar', descripcion:'estudiar',estado:'a realizar'}
            ],
        newTask:{
            nombre:'',
            descripcion:'',
            estado:'',
            },
        },        
    methods:{
        agregarTarea(){
            this.tasks.unshift(this.newTask),
            console.log(this.newTask)        
        }
    }
})
