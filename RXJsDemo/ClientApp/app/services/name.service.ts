import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class NameService {
	private baseUrl: string = '/api/name';

	private namesCache: Observable<string[]>;

	constructor(private http: Http) { }

	get names(): Observable<string[]> {
		return this.getAllNamesNoCache();
	}

	updateNames(names:string[]): void {

	}

	getAllNamesNoCache(): Observable<string[]> {
		return this.http.get(`${this.baseUrl}/LongNameListRetrieve`)
			.map((resp: Response) => resp.json());
	}

	serverNameSearch(search: string): Observable<string[]> {
		return this.http.get(`${this.baseUrl}/NameSearch?search=${search}`)
			.map((resp: Response) => resp.json());
	}

}






// get names(): Observable<string[]> {
// 		if (!this.namesCache) {
// 			this.namesCache = this.buildNameCache();
// 		}
// 		return this.namesCache;
// 	}


	// private BuildNameCache(): Observable<string[]> {
	// 	return this.getAllNamesNoCache().publishReplay(1).refCount();
	// }