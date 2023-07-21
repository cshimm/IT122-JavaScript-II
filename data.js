
const games = [
    {title:"SimCity", genre:"Simulation",yearReleased: "1989", studio: "Maxis"},
    {title:"Grand Theft Auto", genre:"Action-Adventure",yearReleased: "1997", studio: "Rockstar North"},
    {title:"Half-Life", genre:"Shooter",yearReleased: "1998", studio: "Valve Corporation"},
    {title:"Deus Ex", genre:"Role Playing Game",yearReleased: "2001", studio: "Ion Storm"},
    {title:"Super Mario World", genre:"2D Platformer",yearReleased: "1990", studio: "Nintendo"},
]
const getAll = () => {
    return games;
}

const getItem = (title) => {
    return games.find(game => game.title === title)
}

export { getAll, getItem }