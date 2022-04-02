import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  episode = [];
  episodeSelected: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.episodeSelected = sessionStorage.getItem('episodeSelected');
    this.getDetailsEpisodeSelected();
  }
  getDetailsEpisodeSelected() {
    return this.http.get(this.episodeSelected).subscribe((res) => {
      this.episode.push(res);
    });
  }

}
