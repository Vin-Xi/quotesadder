const newQuoteSubscribe=(parents,args,context,info)=>{
    return context.prisma.$subscribe.quote({mutation_in:['CREATED']}).node()    
}
const newQuote={
    subscribe:newQuoteSubscribe,
    resolve:payload=>{return payload},
}
module.exports={newQuote}