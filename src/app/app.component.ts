import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title;
  currentLang = "es";

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang("es");
    let browserLang = this.translate.getBrowserLang();
    console.log(browserLang)
    //this.translate.use(browserLang);
  }

  changeLang(){
    this.translate.setDefaultLang(this.currentLang);
  }
}
