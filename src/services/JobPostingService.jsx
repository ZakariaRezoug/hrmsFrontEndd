import axios from 'axios'
import React from 'react'

export default class JobPostingService {
   getJobPosting(){
        return axios.get("http://localhost:8080/api/jobPostingController/getAllByIsActive")}

  add(jobPosting){
          return axios.post("http://localhost:8080/api/jobPostingController/add",jobPosting)
  }
}
