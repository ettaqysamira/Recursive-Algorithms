function palindrome(str){
    if(str.length<=1){
        return true
    }
    else{
        if(str[0]==str[str.length-1]){
            return palindrome(str.slice(1,str.length-1))
        }
    }
}

console.log(palindrome("samimas"))