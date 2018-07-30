import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activity';	
@Injectable({ 
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[]{
  	return SAVED_ACTIVITIES.slice(0);
  }

  getTotalActivities(allactivities: IActivity[]){
  	return allactivities.length;

  }
  getTotalDistance(allactivities: IActivity[]){
  	var totalDistance = 0;
  	 for(var i = 0;i< allactivities.length; i++){
  	 	totalDistance += allactivities[i].distance;

  	 }
  	return totalDistance;

  }
  getFirstDate(allactivities: IActivity[]){
  	var earliestDate = new Date('01/01/1999');
  	 for(var i = 0;i< allactivities.length; i++){
  	 	var currentDate =allactivities[i].date;
  	 	if(currentDate < earliestDate){
  	 		earliestDate = currentDate;

  	 	}
        return earliestDate;
        
  	 }
  }
}
