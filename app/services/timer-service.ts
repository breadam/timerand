import {Injectable} from "angular2/core";

import {MediaPlugin} from 'ionic-native';

@Injectable() 
export class TimerService {

	private duration = 20;
	private min = 0;
	private max = 30;
	private timeoutId = null;
	private bell;
	
	constructor() { 
		 this.bell = new MediaPlugin("build/sounds/bell.mp3");
	} 
	
	update(duration,min,max){
		this.duration = duration;
		this.min = min;
		this.max = max;
	}
	
	start(){
		this.run();
	}
	
	private run(){
		var interval = this.getInterval();
		this.timeoutId = setTimeout(()=>{
		  this.bell.play();
			this.run();
			
		},interval);
	}
	
	private getInterval() { 
  	var min = this.min;
  	var max = this.max;
  	
  	return Math.random() * (max - min) + min; 
  } 
}