import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));
class Tmovie {
    constructor(title, rating){
        this.title = title;
        this.rating = rating; 
    }
}
const movies =[]

function printMovies() {
for (let index = 0; movies.length; index++) {
    const movie = movies[index]
    printOut(movie.title + " " + movie.rating)
    printOut("");
}
 }
movies.push(new Tmovie("The Shawshank Redemption", 9.8));
movies.push(new Tmovie("The God Father", 8.8));
printMovies();



