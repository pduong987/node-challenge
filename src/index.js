function isCapitalised(string){

  if(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"].includes(string[0])){
    return true
  }else{
    return false
  }
}

function isString(val){

  return (typeof val === "string")

}

module.exports = {
  isCapitalised,
  isString
}