export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    img: string;
    synopsis: string;

  
    constructor(id:number, name: string, channel: string, seasons: number, img: string, synopsis: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.img = img;
        this.synopsis = synopsis;
    }
  }