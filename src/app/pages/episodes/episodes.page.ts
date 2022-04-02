import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  // Declared variables
  episode = [];
  episodeSelected: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Method to get selected episode
    this.episodeSelected = sessionStorage.getItem('episodeSelected');
    this.getDetailsEpisodeSelected();
  }
  // Method to encapsulate data of the selected episode
  getDetailsEpisodeSelected() {
    return this.http.get(this.episodeSelected).subscribe((res) => {
      this.episode.push(res);
    });
  }

}
