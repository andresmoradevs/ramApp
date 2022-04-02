import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  // Declared variables
  characters = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(
    private loadingCtrl: LoadingController,
    private characterService: CharacterService) { }

  ngOnInit() {
    this.loadCharacters();
  }
  // Message is launched through the received event
  async loadCharacters(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      spinner: 'bubbles',
    });
    await loading.present();
    // Event for current page
    this.characterService.getTopRatedCharacters(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.characters.push(...res.results);

        event?.target.complete();
        if (event) {
          event.target.disabled = res.totalPages === this.currentPage;
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
  // Event to load more data
  loadMore(event) {
    this.currentPage++;
    this.loadCharacters(event);
  }

}
