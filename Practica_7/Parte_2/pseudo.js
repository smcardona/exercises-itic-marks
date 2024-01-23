// Ejemplo
function getMovimentPrimerPokemon(pokemonsList) {
    primerPokemon = pokemonsList[0]
    primerMoviment = primerPokemonf["moviments"][0]
    return primerMoviment["nom"]
}

function getUnitatMesuraAltura(pokemon) {
    mesura = pokemon["altura"]
    if (mesura == 0.8) return "m"
    else return ""
}

function isSegonMovimentDeContacte(pokemon) {
    if (pokemon["moviments"].length < 2) return false
    else return pokemon["moviments"][1]["contacte"]
}

function getSumaEstadistiques(pokemon) {
    velocidad = pokemon["estadistiques"]["velocidad"]
    fortaleza = pokemon["estadistiques"]["fortaleza"]
    precision = pokemon["estadistiques"]["precision"]
    resistencia = pokemon["estadistiques"]["resistencia"]

    return velocidad + fortaleza + precision + resistencia
}

function getMitjanaEstadistiques(pokemon) {
    suma = getSumaEstadistiques(pokemon)

    return suma / 4
}

function getPes(llista3pokemon) {
    suma = 0
    for (i = 0; i < 3; i++) {
        suma += llista3pokemon[i]["pes"]
    }
    return suma
}

function isEvolucioPossible(pokemon, nivel) {
    return pokemon["evolucions"][0]["nivel"] <= nivel
}

function getPotencia(pokemon) {
    suma = 0
    for (i = 0; i < pokemon["moviments"].length; i++) {
        suma += pokemon["moviments"][i]["potencia"]
    }
    return suma
}

function getPotenciaMesAlta(pokemonsList) {
    mas_potente = null
    mayor_potencia = 0
    for (i = 0; i < pokemonsList; i++) {
        pokemon = pokemonsList[i]
        potencia = getPotencia(pokemon)

        if (potencia > mayor_potencia) {
            mas_potente = pokemon
            mayor_potencia = potencia
        }
    }
    return mas_potente
}