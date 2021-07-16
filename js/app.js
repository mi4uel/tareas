const app = new Vue({
    el:'#container',
    data:{
        buscar:null,
        tasks:[
            {nombre:'compras', descripcion:'ir al super',estado:'a realizar'},
            {nombre:'aprobar', descripcion:'estudiar',estado:'en proceso'}
            ],
        nombre:'',
        descripcion:'',
        editado:null,
        estadosDisponoble:['a realizar','en proceso','finalizado']
        },
                
    methods:{
        agregarTarea(){
            if(this.nombre.length==0 || this.descripcion.length==0) return;
            if(this.editado===null){
                this.tasks.push({
                    nombre: this.nombre,
                    descripcion: this.descripcion,
                    estado:'a realizar'
                })
                this.nombre='',
                this.descripcion=''
            }else{
                this.tasks[this.editado].nombre = this.nombre,
                this.tasks[this.editado].descripcion = this.descripcion,
                this.editado = null,
                this.nombre='',
                this.descripcion=''
            }
        },
        borrar(index){
            this.tasks.splice(index, 1)
        },
        editar(index){
            this.nombre = this.tasks[index].nombre,
            this.descripcion = this.tasks[index].descripcion,
            this.editado= index
        },
        estado(index){
            let newIndex = this.estadosDisponoble.indexOf(this.tasks[index].estado);
            if(++newIndex > 2) newIndex=0;
            this.tasks[index].estado = this.estadosDisponoble[newIndex]

        }
    },
    computed:{
        busqueda(){
            if(this.buscar===null){
                return this.tasks
            }
            else{           
             return this.tasks.filter((task)=> 
             task.nombre.includes(this.buscar) || task.descripcion.includes(this.buscar));
            }
        }
    }
});


