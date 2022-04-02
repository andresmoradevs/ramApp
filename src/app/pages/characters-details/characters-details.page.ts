import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CharacterService } from 'src/app/services/character.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.page.html',
  styleUrls: ['./characters-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {

  // Declared Variables
  character = null;
  characterId = 0;
  episode = [];
  episodes = [];

  constructor(
        private nav: NavController,
        private route: ActivatedRoute,
        private characterService: CharacterService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.characterService.getCharacterDetails(id).subscribe((res) => {
      this.character = res;
      this.characterId = res.id;
      this.episodes = res.episode;
    });
  }
  viewEpisodeDetails(episodes) {
    sessionStorage.setItem('episodeSelected', episodes);
    this.nav.navigateForward('/episodes');
  }
}
