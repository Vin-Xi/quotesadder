const quotes=(parent,args,context)=>
{
return context.prisma.user({id:parent.id}).quotes();

}
module.exports={
    quotes
}