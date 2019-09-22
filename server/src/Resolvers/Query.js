async function fetchQuotes(parent,args,context,info){
    const where=args.filter?{
        OR:[
            {book_contains:args.filter},
              {author_contains:args.filter},
            {id_contains:args.filter}
        ],
    }:{}
    const quotes=await context.prisma.quotes({
        where,
        skip:args.skip,
        first:args.first
    })
    const count= await context.prisma.quotesConnection({where})
    .aggregate().count()
    return {count,quotes}
}
module.exports={fetchQuotes}