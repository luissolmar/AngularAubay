export interface ITarea
{
    nombre: string, responsable: string, isSeleccionado: boolean
}
export class TareaModel implements ITarea{
    
    //nombre: string;
    constructor
    (public nombre: string = '', public responsable: string = '', public isSeleccionado: boolean= false)
    {
        //this.nombre = nombre
    }
}
