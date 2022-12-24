var num1=100;
for(var num=1;num<=num1;num++)
var flag=0;
for( i=2;i<=num;i++)
{
    if(num%i===0)
    {
        flag=1
        break;
    }
}
if(flag===0)
{
    console.log(num);
}