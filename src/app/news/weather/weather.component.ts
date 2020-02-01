import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  constructor(private as: AppService) {}

  ngOnInit() {
    if (this.as.resultRec4 == undefined) {
      this.as.resultRec4 = this.as.resultPass4.subscribe((name: string) => {
        this.cityWeaRec();
      });
    }
  }
  city;
  flag = 0;
  weather;
  temperature;
  latitude;
  longitude;
  cityWeaPass() {
    var as = this.as;
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
      var crd = pos.coords;
      as.weather(crd.longitude, crd.latitude);
    }
  }
  cityWeaRec() {
    this.weather = this.as.woutput;
    // console.log(this.weather);
    try {
      this.flag = 1;
      this.city = this.weather.name;
      this.temperature = "Temperature: " + this.weather.main.temp + "° C";
    } catch (error) {
      this.flag = 0;
      console.log(error);
    }
  }
}
