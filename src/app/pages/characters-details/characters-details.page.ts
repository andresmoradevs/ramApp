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
  episodes = [];

  constructor(
        private nav: NavController,
        private route: ActivatedRoute,
        private characterService: CharacterService) { }

  ngOnInit() {
    // Id of the pardon loaded
    const id = this.route.snapshot.paramMap.get('id');
    // Service to get character with received id
    this.characterService.getCharacterDetails(id).subscribe((res) => {
      this.character = res;
      this.characterId = res.id;
      this.episodes = res.episode;
    });
  }
  // Method to send character id to next view
  viewEpisodeDetails(episodes) {
    sessionStorage.setItem('episodeSelected', episodes);
    this.nav.navigateForward('/episodes');
  }
}
