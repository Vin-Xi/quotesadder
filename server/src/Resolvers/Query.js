const fetchQuotes=(parent,args,context,info)=>{
    return context.prisma.quotes();
}


module.exports={fetchQuotes,}