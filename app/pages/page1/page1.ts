import {Page} from 'ionic-angular';
import {TimerService} from '../../services/timer-service';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers:[TimerService]
})
export class Page1 {
	private data = {
		duration:300,
		min:0,
		max:20
	};
  constructor(private timer:TimerService) {
		
  }
  
  start(){
  var data = this.data;	this.timer.update(data.duration*100,data.min*1000,data.max*1000);
  	this.timer.start();
  }
  
  

}
