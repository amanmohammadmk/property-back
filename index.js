

const jsonserver=require('json-server')


const server=jsonserver.create()


const middleware=jsonserver.defaults()


const router=jsonserver.router("db.json")



const PORT=process.env.PORT || 4000



server.use(middleware)


server.use(router)


server.listen(PORT,()=>{
    console.log("property host started at port:"+PORT);
})

