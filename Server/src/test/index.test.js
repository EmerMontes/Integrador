const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de Rutas',()=>{

  describe('GET /rickandmorty/character/:id',()=>{

       it('Responde con status: 200',async()=>{
          await agent.get('/rickandmorty/character/1').expect(200);  
       })
       it('Responde con un objeto con las propiedades: "id", "name", "species", "gender", "origin", "status" e "image"', async () => {
          const {body} = await agent.get("/rickandmorty/character/1");
          const propiedades = [
          "id",
          "name",
          "species",
          "gender",
          "origin",
          "status",
          "image",
          ]; 
          propiedades.forEach((prop) => {
              expect(body).toHaveProperty(prop);
           });
        })
        it("Si hay un error responde con el status 500", async () => {
            await agent.get("/rickandmorty/character/3312").expect(500);
        });
    })
    describe("GET / rickandmorty/login", () => {
    
        it("Login correcto", async () => {
          const {body} = await agent.get(
            "/rickandmorty/login?email=example@gmail.com&password=Emerson15."
          );
          expect(body.access).toEqual(true);
        });
    
        it("Login incorrecto'", async () => {
          const {body} = await agent.get(
            "/rickandmorty/login?email=example@gmail.com&password=Emerson5."
          );
          expect(body.access).toEqual(false);
        });
    });
    describe('POST /rickandmorty/fav',()=>{
        const testCharA = {id: 1, name: "TEST A"};
        const testCharB = {id: 2, name: "TEST B"};
    
        it("Debes devolver un array con el personaje enviado", async () => {
          const {body} = await agent.post("/rickandmorty/fav").send(testCharA);
          expect(body).toContainEqual(testCharA);
        });
    
        it("Devuelve un array con el personaje enviado, no debes pisarlo", async () => {
          const {body} = await agent.post("/rickandmorty/fav").send(testCharB);
    
          expect(body.length).toBe(2);
         // expect(body).toContainEqual(testCharB);
        });      
    })
    describe("DELETE /rickandmorty/fav/:id", () => {
        const testCharA = {id: 1, name: "TEST A"};
        const testCharB = {id: 2, name: "TEST B"};
    
        it("Si no se elimina ningun personaje devuelve el mismo array", async () => {
          const {body} = await agent.delete("/rickandmorty/fav/12");
          expect(body.length).toBe(2);
        });
    
        it("Elimina al personaje con el recibido ID", async () => {
          const {body} = await agent.delete("/rickandmorty/fav/1");
          expect(body).not.toContainEqual(testCharA);
        });
      });
})