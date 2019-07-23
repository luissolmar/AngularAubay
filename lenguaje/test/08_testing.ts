export function factorial(n: number) :number 
{
    //if(n <= 1){
        //return 1
    //}
    //return n * factorial (n-1)
    if (n < 0)
    {
        throw new Error('Numero negativo')
    }
    else if(parseInt(String(n)) !== parseFloat(String(n)))
    {
        throw new Error('Numero no encontrado')
    }
    if(n <= 1)
    {
        return 1
    }
}