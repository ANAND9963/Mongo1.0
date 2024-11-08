
const { helloBear , createBear , getAllBears, getBearById, deleteById, updateById } =  require("./BearController");
const bearRoutes = (server) => {
    server.get("/", helloBear);
    server.post('/api/bear',  createBear);
    server.get('/api/bear',getAllBears);
    server.get('/api/bear/:id',getBearById);
    server.delete('/api/bear/:id',deleteById);
    server.put('/api/bear/:id',updateById);

}

module.exports = bearRoutes;