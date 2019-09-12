//FUNÇÃO 4-5
export let parImpar = function(numero:number):boolean
{
    if(numero % 2 == 0)
    {
        return true;
    }
    else
    {
       return false;
    }
}
//FUNÇÃO 6
export let Area = function(comprimento:number, largura:number):number
{
    return(comprimento * largura)
}
//FUNÇÃO 7
export let cubo = (cuboN:number):number => (cuboN * cuboN * cuboN);