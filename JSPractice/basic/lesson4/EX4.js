checkSpeed(73)



function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsperkm = 5;

  if(speed < speedLimit + pointsperkm)
    console.log('Ok');
  else{
    const points = Math.floor((speed - speedLimit) / pointsperkm);
    
    if(points >=12)
      console.log('License Suspended');
    else
      console.log('Points:', points);
  }
}