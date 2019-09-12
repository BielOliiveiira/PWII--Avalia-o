export class piscina
{
   constructor(public diam:number, public custoConst:number){}
   raio()
   {
    return this.diam / 2;
   }
   area()
   {
       return 3.14 * (this.raio() * this.raio());
   }
   custoTotal()
   {
       return this.area() * this.custoConst
   }
   
    
}