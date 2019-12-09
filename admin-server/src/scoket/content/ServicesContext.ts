import { UserService, ChatServices } from './../../service/index';

export class ServicesContext {
	static instance: ServicesContext

	static getInstance(	): ServicesContext {
    if (!ServicesContext.instance) {
      ServicesContext.instance = new ServicesContext();
    }
    return ServicesContext.instance;
	}

  private _userService: UserService;
  public get userService() { return this._userService; }
  public setuserService(service: UserService): ServicesContext {
    this._userService = service;
    return this;
	}
	
	private _chatService: ChatServices
	public get chatService() { return this._chatService }
	public setchatService(service: ChatServices): ServicesContext {
		this._chatService = service;
		return this;
	}
}