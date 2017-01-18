import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class NameService {
	private baseUrl: string = '/api/name';
	private nameCache: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
	private nameCacheLoaded: boolean = false;

	constructor(private http: Http) { }

	get names(): BehaviorSubject<string[]> {
		if (!this.nameCacheLoaded) {
			this.getAllNamesNoCache().subscribe((names) => {
				this.nameCache.next(names);
				this.nameCacheLoaded = true;
			}
			);
		}

		return this.nameCache;
	}

	getAllNamesNoCache(): Observable<string[]> {
		return this.http.get(`${this.baseUrl}/LongNameListRetrieve`)
			.map((resp: Response) => resp.json());
	}

	refreshNameCache(): void {
		this.getAllNamesNoCache().subscribe((names) => {
			this.nameCache.next(names);
		});
	}

	serverNameSearch(search: string): Observable<string[]> {
		return this.http.get(`${this.baseUrl}/NameSearch?search=${search}`)
			.map((resp: Response) => resp.json());
	}

}