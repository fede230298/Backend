const {promises:fs} = require('fs')

class Contenedor{
    constructor(ruta){
        this.ruta = ruta;
    }

    async getAll(){
        try {
            let datos = await fs.readFile(this.ruta, 'utf-8')
            return datos
        } catch (error) {
            return []
        }
    }

    async getRandom(){
        try {
            let datos = await this.getAll()
            let dataJson = JSON.parse(datos)
            let numRandom = Math.floor(Math.random() * dataJson.length)
            return dataJson[numRandom]
        } catch (error) {
            return []
        }
    }
}

module.exports=Contenedor