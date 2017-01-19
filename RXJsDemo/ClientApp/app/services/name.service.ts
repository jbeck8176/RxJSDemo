import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class NameService {
	private baseUrl: string = '/api/name';

	constructor(private http: Http) { }

	get names(): Observable<string[]> {
		return this.getAllNamesNoCache();
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






	// private nameCache: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
	// private nameCacheLoaded: boolean = false;

// refreshNameCache(): void {
// 		this.getAllNamesNoCache().subscribe((names) => {
// 			this.nameCache.next(names);
// 		});
// 	}

// get names(): BehaviorSubject<string[]> {
// 		if (!this.nameCacheLoaded) {
// 			this.getAllNamesNoCache().subscribe((names) => {
// 				this.nameCache.next(names);
// 				this.nameCacheLoaded = true;
// 			}
// 			);
// 		}

// 		return this.nameCache;
// 	}