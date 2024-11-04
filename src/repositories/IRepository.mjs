class IRepository{
    obtenerPorId(id){
        throw new Error ("Metodo 'ObtenerPorId()' no implementado");

    } 
    obtenerTodos(){
        throw new Error ("Metodo 'ObtenerTodos()' no implementado ");
    }

    buscarPorAtibuto (atributo, valor){
        throw new Error ("Metodo 'BuscarPorAtributo' no implementado");
    }
    ObtenerMayoresDe30 (){
        throw new Error ("Metodo 'ObtenerMayoresDe30' no implementado");
    }
}
export default IRepository;