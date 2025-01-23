function testRecursivity(n){
    if(n<=0){
        console.log("Done")
        return 
    }
    console.log(n)
    testRecursivity(n-1)
}
console.log(testRecursivity(8))