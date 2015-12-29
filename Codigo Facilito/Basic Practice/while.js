var contador = 0;

/*
Keywords:
break
continue
*/

while(true){
    contador++;
    if(contador > 10)break;
    if(contador&1){
       continue;
    }
    console.log(contador);
}

do{
    contador++;
    if(contador > 20)break;
    if(contador & 1)continue;
    console.log(contador);
}while(true);

