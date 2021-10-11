import { Showtime } from './../interface/showtime';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import mockData from './mock-data.json';
import { Database } from '../interface/database';
import { ShowtimeDate } from '../interface/showtime-date';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const data: Database = this.getMockData();

    // setup demo showtimes data
    const randomDate = [
      [1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0],
      [1, 1, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 1]
    ];

    for (const i in data.showtimes) {
      if (data.showtimes[i]) {
        const today = new Date();
        const showtime = data.showtimes[i].showtimes[0];
        data.showtimes[i].showtimes = [];

        for (let c = 0; c < 7; c++) {
          if (randomDate[i][c]) {
            const newShowtime: ShowtimeDate = {
              date: this.dateToString(today),
              times: showtime.times
            };

            data.showtimes[i].showtimes.push(newShowtime);
          }

          today.setDate(today.getDate() + 1);
        }
      }
    }

    return data;
  }

  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  private getMockData(): Database {
    return {
      movies: [
        {
          id: 1,
          imdbId: 'tt9376612',
          imdbRating: 7.9,
          title: 'Shang-Chi y la leyenda de los diez anillos',
          poster: 'https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
          backdrop: 'https://locosxlosjuegos.com/wp-content/uploads/2021/08/thumb-1920-1167021.jpg',
          trailer: 'https://www.youtube.com/watch?v=0LH5q_YO_vw',
          overview: 'Shang-Chi, el maestro del kung-fu sin armas, se ve obligado a enfrentarse a su pasado tras verse arrastrado a la organización de los Diez Anillos.',
          director: 'Destin Daniel Cretton',
          cast: [
            'Tim Roth', 'Michelle Yeoh', 'Tony Chiu-Wai Leung', 'Menger Zhang', 'Simu Liu', 'Awkwafina', 'Florian Munteanu'
          ],
          release_date: '10/01/2021',
          start_date: '10/01/2021',
          end_date: '12/01/2021',
          runtime: 132,
          mpaa: 'PG'
        },
        {
          id: 2,
          imdbId: 'tt2382320',
          imdbRating: 7.6,
          title: 'Sin tiempo para morir',
          poster: 'https://m.media-amazon.com/images/M/MV5BY2FiY2ExMGItMTliYy00YTJmLThlYzAtYzI1MjFhYTM5ZjEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
          backdrop: 'https://w0.peakpx.com/wallpaper/607/153/HD-wallpaper-no-time-to-die-2020-no-time-to-die-movies-2021-movies.jpg',
          trailer: 'https://www.youtube.com/watch?v=Yq4KfMa4_9s',
          overview:
            'Bond ha dejado el servicio. Su recién encontrada paz es interrumpida por una visita de su amigo de la CIA Felix Leiter. Bond y Leiter le siguen la pista a un misterioso villano en posesión de peligrosas nuevas tecnologías.',
          director: 'Cary Joji Fukunaga',
          cast: ['Daniel Craig', 'Ana de Armas', 'Rami Malek'],
          release_date: '10/05/2021',
          start_date: '10/05/2021',
          end_date: '12/05/2021',
          runtime: 163,
          mpaa: 'PG-13'
        },
        {
          id: 3,
          imdbId: 'tt6264654',
          imdbRating: 7.3,
          title: 'Free guy',
          poster: 'https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
          backdrop: 'https://www.themoviedb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
          trailer: 'https://www.youtube.com/watch?v=tZbNDmRGx_M',
          overview: 'Un empleado de banco descubre que en realidad es un personaje dentro de un videojuego.',
          director: 'Shawn Levy',
          cast: ['Ryan Reynolds', 'Jodie Comer', 'Taika Waititi'],
          release_date: '10/18/2021',
          start_date: '10/18/2021',
          end_date: '12/18/2021',
          runtime: 163,
          mpaa: 'PG-13'
        },
        {
          id: 4,
          imdbId: 'tt1160419',
          imdbRating: 8.4,
          title: 'Dune',
          poster: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
          backdrop: 'https://www.themoviedb.org/t/p/original/aknvFyJUQQoZFtmFnYzKi4vGv4J.jpg',
          trailer: 'https://www.youtube.com/watch?v=8g18jFHCLXk',
          overview:
            'Adaptación de la novela de ciencia ficción de Frank Herbert sobre el hijo de una familia noble que trata de vengarse de la muerte de su padre y al mismo tiempo salvar un planeta que se le ha encomendado proteger.',
          director: 'Denis Villeneuve',
          cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Zendaya'],
          release_date: '10/21/2021',
          start_date: '10/21/2021',
          end_date: '12/12/2021',
          runtime: 155,
          mpaa: 'PG-13'
        },
        {
          id: 5,
          imdbId: 'tt11389748',
          imdbRating: 8.1,
          title: 'Mass',
          poster: 'https://m.media-amazon.com/images/M/MV5BZGM3MDg1YzYtMzM0MS00ZGY2LWE4ZjctZDZhYmZlYjVlZGE5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BNTE3M2QzNzQtMWNkNi00Mzg3LTg1ZGEtZDU2NGZlMTU3ZmU4XkEyXkFqcGdeQXVyMTg1MDc3NjY@._V1_.jpg',
          trailer: 'https://www.youtube.com/watch?v=oU56Ns1nXsE',
          overview: 'El retrato de las consecuencias de una tragedia violenta, que afecta la vida de dos parejas y lo hace de diferentes formas.',
          director: '    Fran Kranz',
          cast: ['Jason Isaacs', 'Martha Plimpton', 'Ann Dowd'],
          release_date: '10/21/2021',
          start_date: '10/21/2021',
          end_date: '12/12/2021',
          runtime: 110,
          mpaa: 'PG'
        },
        {
          id: 6,
          imdbId: 'tt12861508',
          imdbRating: 3.7,
          title: 'Survive the Game',
          poster: 'https://m.media-amazon.com/images/M/MV5BYjBjZjdhOGEtNDFjNi00MzU5LWE1Y2EtYjgzZjM3MWE2YWUzXkEyXkFqcGdeQXVyMjUxOTAxNzI@._V1_.jpg',
          backdrop: 'https://45secondes.fr/wp-content/uploads/2021/09/Survive-a-la-bande-annonce-du-jeu-jette-Bruce-Willis-dans.jpg',
          trailer: 'https://www.youtube.com/watch?v=xT8uydi9bDQ',
          overview:
            'La vida de un hombre en su granja se ve interrumpida cuando aparecen un policía y un par de peligrosos criminales.',
          director: 'James Cullen Bressack',
          cast: ['Bruce Willis', 'Chad Michael Murray', 'Sarah Roemer'],
          release_date: '11/16/2021',
          start_date: '11/16/2021',
          end_date: '12/16/2021',
          runtime: 97,
          mpaa: 'PG-13'
        },
        {
          id: 7,
          imdbId: 'tt11284502',
          imdbRating: 6.1,
          title: 'South of Heaven',
          poster: 'https://m.media-amazon.com/images/M/MV5BYmE3MGQ1ZjYtODUzZC00OWE2LTgxY2ItMDM4MTIzODY5MDk0XkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_.jpg',
          backdrop: 'https://variety.com/wp-content/uploads/2021/10/south-of-heaven.jpg?w=681&h=383&crop=1',
          trailer: 'https://www.youtube.com/watch?v=8F1FBZvBPNg',
          overview: 'El criminal convicto Jimmy obtiene libertad condicional anticipada después de cumplir doce años por robo a mano armada. Tras su liberación, promete darle a Annie, su amor de infancia, que ahora muere de cáncer, el mejor último año de su vida; desafortunadamente, no es tan simple.',
          director: 'Aharon Keshales',
          cast: ['Jason Sudeikis', 'Evangeline Lilly', 'Shea Whigham'],
          release_date: '10/21/2021',
          start_date: '10/21/2021',
          end_date: '12/21/2021',
          runtime: 120,
          mpaa: 'PG'
        },
        {
          id: 8,
          imdbId: 'tt3228774',
          imdbRating: 7.4,
          title: 'Cruella',
          poster: 'https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
          backdrop: 'https://www.the-sun.com/wp-content/uploads/sites/6/2021/02/NINTCHDBPICT000515846553.jpg',
          trailer: 'https://www.youtube.com/watch?v=oK13SZYZqmA',
          overview:
            'Antes de convertirse en Cruella de Vil, Estella sueña con ser diseñadora de moda, ya que está dotada de talento, innovación y ambición a partes iguales. Pero la vida parece querer asegurarse de que sus sueños nunca se hagan realidad.',
          director: 'Craig Gillespie',
          cast: ['Emma Stone', 'Emma Thompson', 'Joel Fry'],
          release_date: '10/04/2021',
          start_date: '10/04/2021',
          end_date: '12/01/2021',
          runtime: 134,
          mpaa: 'PG-13'
        }
      ],
      showtimes: [
        {
          movieId: 1,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        },
        {
          movieId: 2,
          showtimes: [
            {
              date: '02/07/2019',
              times: ['12:45 PM', '4:20 PM', '6:30 PM', '8:00 PM', '10:00 PM']
            }
          ]
        },
        {
          movieId: 3,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 4,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        },
        {
          movieId: 5,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 6,
          showtimes: [
            {
              date: '02/07/2019',
              times: ['12:45 PM', '4:20 PM', '6:30 PM', '8:00 PM', '10:00 PM']
            }
          ]
        },
        {
          movieId: 7,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 8,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        }
      ]
    };
  }
}
