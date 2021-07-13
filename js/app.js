const app = new Vue({
    el:'section',
    data:{
        tasks:[
            {nombre:'compras', descripcion:'ir al super',estado:'a realizar'},
            {nombre:'aprobar', descripcion:'estudiar',estado:'a realizar'}
            ],
        nombre:'',
        descripcion:''
        },        
    methods:{
        agregarTarea(){
            if(this.nombre.length==0 || this.descripcion.length==0) return;
            this.tasks.push({
                nombre: this.nombre,
                descripcion: this.descripcion,
                estado:'a realizar'
            }),
            console.log(this.newTask),
            this.nombre='',
            this.descripcion=''       
        }
    }
});

