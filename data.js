
function game (title, genre, yearReleased, studio, platform) {
    return {
        title,
        genre,
        yearReleased,
        studio,
    };
}
let simCity = new game("SimCity", "Simulation", "1989", "Maxis");
let gta = new game("Grand Theft Auto", "Action-Adventure", "1997", "Rockstar North");
let halfLife = new game("Half-Life", "Shooter", "1998", "Valve Corporation");
let deusEx = new game("Deus Ex", "Role Playing Game", "2001", "Ion Storm");
let superMarioWorld = new game("Super Mario World", " 2D Platformer", "1990", "Nintendo");

const games = [simCity, halfLife, gta, deusEx, superMarioWorld];

const getAll = () => {
    return games;
}

const getItem = (title) => {
    return games.find(game => game.title === title)
}

export { getAll, getItem }