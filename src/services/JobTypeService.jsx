import React from 'react'
import axios from 'axios'

export default class JobTypeService {
    getJobType(){
        return axios.get("http://localhost:8080/api/JobType/getAll")}
}

