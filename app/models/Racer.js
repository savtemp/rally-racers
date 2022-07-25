export class Racer{
    constructor(name, picture, number, distance){
        this.name = name
        this.picture = picture
        this.number = number
        this.distance = distance
    }

    get Template(){
        return `
        <div class="col-10 p-2">
            <div class="row bg-dark text-light p-2 m-3">
                <div class="col-12 fs-2"><span id="${this.number}%"></span>${this.picture}</div>
            </div>
        </div>
        `
    }

    // Write move method = will randomly increase racer distance up to but not above 95
    move(){
        let move = this.distance
        if(move <= Math.floor(Math.random() * 95)){
            console.log(move);
        }
        
    }
}