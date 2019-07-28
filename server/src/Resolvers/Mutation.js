
const add=(root,args,context,info)=>{
    return context.prisma.createQuote({
        book:args.book,
        text:args.text,
        author:args.author
    })
}
module.exports={add}