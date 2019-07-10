import { Injectable } from '@angular/core';
import { IResult } from './result';

@Injectable({
  providedIn: 'root'
})  
export class ResultService {

  resultDataAll():IResult[]{
    return [
      {id:1, class:'1st Class', active:true, 
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
        ]
    },
    {
      id:2, class:'2nd Class', active:false,
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:3, class:'3rd Class', active:false,
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:4, class:'4th Class', active:false,
      resultData:[
      {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
      {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
      {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
      {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
      {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
      {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:5, class:'5th Class', active:false,
      resultData:[
      {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
      {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
      {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
      {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
      {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
      {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:6, class:'6th Class', active:false,
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:7, class:'7th Class', active:false,
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:8, class:'8th Class', active:false,
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
     {
      id:9, class:'9th Class', active:false,
      resultData:[
      {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
      {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
      {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
      {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
      {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
      {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
      {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:10, class:'10th Class', active:false,
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:11, class:'11th Class', active:false,
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    },
    {
      id:12, class:'12th Class', active:false,
      resultData:[
        {id:1,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:2,username:'Ramesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:3,username:'Ram Negi',class:'1st',result:'Passed',total:0,active:true},
        {id:4,username:'Surendra Tyagi',class:'1st',result:'Passed',total:0,active:true},
        {id:5,username:'Yogesh Kumar',class:'1st',result:'Passed',total:0,active:true},
        {id:6,username:'Pradeep Saini',class:'1st',result:'Failed',total:0,active:true},
        {id:7,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:8,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:9,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:10,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:11,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:12,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:13,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:14,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:15,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:16,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:17,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:18,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:19,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true},
        {id:20,username:'Yesh Jadli',class:'1st',result:'Passed',total:0,active:true}
      ]
    }
    ]
  }


  constructor() { }
}
