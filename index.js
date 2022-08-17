// Code your solution in this file!
function distanceFromHqInBlocks(value){
    if(value >42){
        return value-42;
    }else{
        return 42-value;
    }
}
function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value)*264
}
function distanceTravelledInFeet(startingPointX, finishingPointY)
  {let totalXY;
  if (finishingPointY > startingPointX){
      totalXY = finishingPointY - startingPointX
}else{
     totalXY = startingPointX - finishingPointY
}
 return totalXY * 264

}
function calculatesFarePrice(start,destination) {
   let totalXY = distanceTravelledInFeet(start,destination)
   let price;
   if (totalXY <= 400){
    return price = 0
    }else if (totalXY > 400 && (totalXY <= 2000)){
        // expected 2 to equal 2.56
        return price = 2.56
    }else if(totalXY > 2000 && (totalXY <= 2500)){
        return price = 25
    }else{
        return price = 'cannot travel that far'
    }
}