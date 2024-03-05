function formatPokemon(poke) {
    // console.log('formatedPoke')
    // console.log(poke)
    let typesLength = poke.types.length;
    let abilityA = poke.abilities[0].ability.name;
    let abilityB = poke.abilities[1].ability.name;
    let exp = poke.base_experience;
    let name = poke.name;
    let sprite = poke.sprites.front_default;
    let hp = poke.stats[0].base_stat;
    let attack = poke.stats[1].base_stat;
    let defense = poke.stats[2].base_stat;
    let specialAttack = poke.stats[3].base_stat;
    let specialDefense = poke.stats[4].base_stat;
    let speed = poke.stats[5].base_stat;
    let typeA = poke.types[0].type.name;
    let typeB = false;
    if (typesLength == 2) {
        typeB = poke.types[1].type.name
    }

    let formatedPoke = {
        'abilityA': abilityA,
        'abilityB': abilityB,
        'exp': exp,
        'name': name,
        'sprite': sprite,
        'hp': hp,
        'attack': attack,
        'defense': defense,
        'specialAttack': specialAttack,
        'specialDefense': specialDefense,
        'speed': speed,
        'typeA': typeA,
        'typeB': typeB
    }
    // console.log('formatedPoke', formatedPoke)
    return formatedPoke

}

export default formatPokemon