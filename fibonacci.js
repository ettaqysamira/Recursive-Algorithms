function serieFabonacci(n){
    if(n<=1){
        return n 
    }
    else{
        return serieFabonacci(n-1)+serieFabonacci(n-2)
    }
}
console.log(serieFabonacci(5))