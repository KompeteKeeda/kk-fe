import { CommonService } from "./commonService";

export class EventsService {
    private commonService = new CommonService();

  // method to get all events
  getAllEvents = async () => {
    let eventsList: [] = [];
    eventsList = await this.commonService.getAgent().readAllEvents(0, 10);
    return eventsList;
  };
}