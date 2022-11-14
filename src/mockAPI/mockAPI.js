const data = [
    {
        id: 1,
        img: "https://img.seadn.io/files/5bb615bd7c999e66d1f6752d140b11ed.png?fit=max&w=1000",
        title: "#21536",
        offer: false,
        price: 0.75,
        category: "mutantApe",
        detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae non quia soluta praesentium reiciendis, veniam, temporibus ad facilis ipsam delectus voluptatum eos maxime repudiandae cupiditate. Voluptatibus qui adipisci cum natus."
    },
    {
        id: 2,
        img: "https://img.seadn.io/files/470117ab678c77cad1a6715614b5374d.png?fit=max&w=1000",
        title: "#21536",
        offer: false,
        price: 0.75,
        category: "boredApe",
    },
];

export function getNftData () {
    return new Promise ((resolve) => {
        setTimeout (() => resolve(data), 1500)})
}