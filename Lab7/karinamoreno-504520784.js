let artistsList = ["RedVelvet", "aespa", "IU", "aespa", "Sabrina Carpenter", "RedVelvet", "aespa", "IU", "Bibi", "Billie"];
let duplicates = findDups(artistsList);

function findDups(artistsList){
    let mapa = new Map();
    for (let i = 0; i < artistsList.length; i++) {
        if (mapa.has(artistsList[i])) {
            mapa.set(artistsList[i],mapa.get(artistsList[i])+1);
        }
        else{
            mapa.set(artistsList[i], 1)
        }
    }

    let dups = new Map();
    for (let [artist, count] of mapa) {
        if(count > 1){
            dups.set(artist,count);
        }
    }

    return dups;
}

function deleteDups(artistsList){
    let mapa = new Map();
    for (let i = 0; i < artistsList.length; i++) {
        if (mapa.has(artistsList[i])) {
            mapa.set(artistsList[i], artistsList[i] + 1)
        } else{
            mapa.set(artistsList[i], 1)
        }
    }

    let sinDuplicar = [];

    for(let [artist,count] of mapa){
        if (count <= 2){
            sinDuplicar.push(artist);
        }
    }

    return sinDuplicar;
}


console.log("\t-------------------------");
console.log("\tLista a analizar: ");
console.log(artistsList);

console.log("\n\t-------------------------");
console.log("\tArtistas duplicados: ");
for (let [artist, count] of duplicates) {
    console.log(`Artista: ${artist}, Apariciones: ${count}`)
}

let nonDupArtists = deleteDups(artistsList);

console.log("\n\t-------------------------");
console.log("\tArtistas no duplicados: ");
console.log(nonDupArtists);
