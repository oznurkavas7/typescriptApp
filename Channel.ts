interface Kanal {
    isim: string,
    takipci: number | string
};

let kanal: Kanal = {
    isim: "react dersleri",
    takipci: 1500
}

type Topla = (x: number, y: number) => number;

const topla: Topla = (x, y) => x + y;

const kanallar: Kanal[] = [
    {isim: "react dersleri", takipci: 100},
    {isim: "diğer", takipci: 200}
]
