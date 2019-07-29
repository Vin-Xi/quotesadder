

function SubmittedBy(parent,args,context,info){
    return context.prisma.quote({id:parent.id}).SubmittedBy();
}
module.exports={SubmittedBy}