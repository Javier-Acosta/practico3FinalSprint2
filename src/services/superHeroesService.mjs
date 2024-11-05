import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {

    return await SuperHeroRepository.obtenerPorId(id);


}
export async function obtenerTodosLosHeroes() {
    return await SuperHeroRepository.obtenerTodos();

}

export async function BuscarSuperheroesPorAtributo(atributo, valor) {

    return await SuperHeroRepository.BuscarSuperheroesPorAtributo(atributo, valor);

}

export async function obtenerSuperheroesMayorDe30(params) {

    return await SuperHeroRepository.obtenerSuperheroesMayorDe30();

}