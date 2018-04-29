import {Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';

@Injectable()

export class RegionService{
    constructor(private http:Http){

    }
    
    async getRegion(){
        const res = await fetch('http://ip-api.com/json/');
        const js= await res.json();
        return js.region;
    }
}