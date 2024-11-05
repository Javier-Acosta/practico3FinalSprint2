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


    export async function obtenerTodosLosSuperheroesController(req, res) {
        const superheroes = await obtenerTodosLosHeroes();
        res.send(renderizarListaSuperheroes(superheroes));

    }

}