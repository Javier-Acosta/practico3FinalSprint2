import { obtenerSuperheroePorId, obtenerTodosLosHeroes, obtenerSuperheroesMayorDe30, BuscarSuperheroesPorAtributo } from '../services/superHeroesService.mjs';

import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';


export async function obtenerSuperheroePorIdController(req, res) {
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorId(id);

    if (superheroe) {

        res.send(renderizarSuperheroe(superheroe));

    } else {
        res.status(404).send({ mensaje: "Superhéroe no encontrado" });

    }


    
   
}
export async function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = await obtenerTodosLosHeroes();
    res.send(renderizarListaSuperheroes(superheroes));

}




export async function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes));

    } else {
        res.status(400).send({ mensaje: 'No se encontraron supérheroes con ese atributo' });
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes = await obtenerSuperheroesMayorDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}