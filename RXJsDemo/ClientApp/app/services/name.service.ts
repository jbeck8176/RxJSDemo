import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()

export class NameService {
	private baseUrl: string = '/api/name';

	private namesCache: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
	private hasCache: false;

	constructor(private http: Http) { }

	// get names(): Observable<string[]> {

	// 	return this.getAllNamesNoCache();
	// }

	get names(): Observable<string[]> {
		if (!this.hasCache) {
			this.BuildNameCache();
		}
		return this.namesCache;
	}

	private BuildNameCache(): void {
		this.getAllNamesNoCache().subscribe((data)=>this.namesCache.next(data));
	}

	updateNames(names: string[]): void {
		console.log('update triggered', names);
		this.namesCache.next(names);
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
	// 	return this.getAllNamesNoCache().publishBehavior([]).refCount();
	// }