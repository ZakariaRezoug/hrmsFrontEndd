import React from 'react'
import axios from 'axios'

export default class JobWorkingTypeService {
    getJobWorkingType(){
        return axios.get("http://localhost:8080/api/JobWorkingType/getAll")}
}

