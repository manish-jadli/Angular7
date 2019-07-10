import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from './translate';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'GIC Kotdwara';
  public isLoginActive=true;
  public activatedLogin:boolean;

  constructor(private _router:Router, private _title:Title, private _translate: TranslateService) {
    setTheme('bs3'); // or 'bs4'
   }

  loginActive(){
    this.isLoginActive=false;
  }

  logout(){
    this._router.navigate(['/login']);
    this.isLoginActive=true;
  }


  //main translate code start
  public translatedText: string;
  public supportedLanguages: any[];
  supportedLangs: { display: string; value: string; }[];

  ngOnInit() {

        //title code here
        this._title.setTitle(this.title);

    // standing data
    this.supportedLangs = [
      { display: 'English', value: 'en' },
      { display: 'Hindi', value: 'hi' },
      { display: 'Chinease', value: 'ch' },
      { display: 'Punjabi', value: 'pj' },
      { display: 'Telgu', value: 'tu' },
      { display: 'Orissa', value: 'ori' },
      { display: 'Kannad', value: 'kan' },
      { display: 'Marathi', value: 'mrt' },
      { display: 'Sindh', value: 'sin' },
      { display: 'Bhojpuri', value: 'boj' },
      { display: 'Malayalam', value: 'mal' }
    ];

    this.subscribeToLangChanged();

    // set language
    this._translate.setDefaultLang('en');
    this._translate.enableFallback(true);
    this.selectLang('en');

  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set default;
    this._translate.use(lang);
    // this.refreshText(); // remove
  }

  refreshText() {
    this.translatedText = this._translate.instant('hello world');
  }

  subscribeToLangChanged() {
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }

  //end


}
