function passwordStrength(f,i,d){
  var k=1,h=2,b=3,a=4,c=5,g=0,j,e;
  if((f!=d)&&d.length>0){
    return c
  }
  if(f.length<8){
    return k
  }
  if(f.toLowerCase()==i.toLowerCase()){
    return h
  }
  if(f.match(/[0-9]/)){
    g+=10
  }
  if(f.match(/[a-z]/)){
    g+=26
  }
  if(f.match(/[A-Z]/)){
    g+=26
  }
  if(f.match(/[^a-zA-Z0-9]/)){
    g+=31
  }
  j=Math.log(Math.pow(g,f.length));
  e=j/Math.LN2;
  if(e<40){
    return h
  }
  if(e<56){
    return b
  }
  return a
};