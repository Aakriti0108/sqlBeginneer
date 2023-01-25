exports.skipCharacter = function(text)
{
    if(!text)
    {
        return  "";
    }
     let str = "";
    for(let i =0;i<text.length;i++)
    {
       if(text[i] == "'")
       {
        str+="'"+"'";
       }
       else{
        str+=text[i];
       }
    }
    return str;
}