//feettoMile function start form here

function feetToMile(feet)
{
    let result;

    result = feet*0.000189394;

    return result;
}

let mile = feetToMile(1000000);

console.log("The  mile  is :",mile);

//woodCalculator function start form here

function woodCalculator (chair, table, bed)
{ 
   let needWoodForChair = chair * 1; //1 chair need 1 cubic wood 

   let needWoodForTable = table *3;  //1 tabel need 3 cubic wood 

   let needWoodForBed   = bed *5;    //1 bed need 5 cubic wood 
   
   let result = needWoodForBed + needWoodForChair + needWoodForTable;

   return result;
}

let totalWood = woodCalculator(6,2,2);

console.log("The totolWood is : ", totalWood);

//brickCalculator function start form here

function brickCalculator (floor)
{
    if(floor<=10)
    {
        let perFloorHightFirstTenFloor = 15;

        let BrickNeedForOneFeet = 1000;
        
        let perFloorBrickNeed = perFloorHightFirstTenFloor*BrickNeedForOneFeet;

        let totalBrick = perFloorBrickNeed * floor;

        return totalBrick;
       
    }

  else  if (floor > 10 && floor <= 20)

    {
        //one to ten floor brick calculation

        let perFloorHightFirstTenFloor = 15;

        let BrickNeedForOneFeet = 1000;
        
        let perFloorBrickNeed = perFloorHightFirstTenFloor*BrickNeedForOneFeet;
        
        let totalBrickNeedForFirstTenFloor = perFloorBrickNeed * 10;
        
        //eleven to twenty floor calculation

        floor = floor - 10; //we did this because we all ready find first 10th floor total brick;
        
        let perFloorHightElevenToTwenty = 12;

        BrickNeedForOneFeet = 1000;

        perFloorBrickNeed = perFloorHightElevenToTwenty * BrickNeedForOneFeet;

        let totalBrickNeedForElevenToTwenty = perFloorBrickNeed *floor;

        let totalBrick = totalBrickNeedForFirstTenFloor +  totalBrickNeedForElevenToTwenty;
 
        return totalBrick;
    }
     
    else 
    {
         //one to ten floor brick calculation

        let perFloorHightFirstTenFloor = 15;

        let BrickNeedForOneFeet = 1000;
        
        let perFloorBrickNeed = perFloorHightFirstTenFloor*BrickNeedForOneFeet;
        
        let totalBrickNeedForFirstTenFloor = perFloorBrickNeed * 10; //Here 10 is first 10 floor ;
          
        //eleven to twenty floor brick calculation

        let perFloorHightElevenToTwenty = 12;

        BrickNeedForOneFeet = 1000;

        perFloorBrickNeed = perFloorHightElevenToTwenty * BrickNeedForOneFeet;

        let totalBrickNeedForElevenToTwenty = perFloorBrickNeed *10;

        //Brick calculation form twenty-one 

        floor = floor - 20; // because we all ready  find the one-ten floor & elven-twenty floor Brick calculation.so we dividied it from input floor;

        let perFloorHightFormTwenty = 10;

        BrickNeedForOneFeet = 1000;

        perFloorBrickNeed = perFloorHightFormTwenty * BrickNeedForOneFeet;

        let totalBrickNeedFromTwentyFloor = perFloorBrickNeed * floor;

        let totalBrick = totalBrickNeedFromTwentyFloor + totalBrickNeedForElevenToTwenty + totalBrickNeedForFirstTenFloor;

        return totalBrick;

    }
    
}


let totalBrickCalculation = brickCalculator(22);

console.log("The total Brick need is :", totalBrickCalculation);

//tinyFriend function start form here

function tinyFriend (friendContainer)
{

        let min= friendContainer[0];

    for(let i=0; i<friendContainer.length;i++)
    {
        if (min>friendContainer[i])
        {
            min = friendContainer[i];
            
        }
    }

    return min;

}


let friendContainer = ["mehedi","saif","Saifur","Alision"];

let smallestFriend = tinyFriend(friendContainer);

console.log("The smallest friend our group is :",smallestFriend);
