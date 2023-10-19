function convertBase(str, baseFrom, baseTo){
    let k = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] >= baseFrom){
            return "El numero es mayor que la base reviselo de nuevo";
        }      
    }

    if(baseFrom != baseTo){
        for(let i = 1; i <= str.length; i++){
            k = k +(str[i-1] * (Math.pow (baseFrom,(str.length-i))));
        } 
    
        let i = "";
    
        while(k > 0){
            i = i + (k % baseTo);
            k = Math.trunc(k / baseTo);
        }
    
        for(let b = i.length-1; b >= 0; b--){
            k = k + i[b];
        }
        
        return Math.trunc(k);
    
    }else return str;  
}


 console.log(convertBase("30", 10, 2));
 