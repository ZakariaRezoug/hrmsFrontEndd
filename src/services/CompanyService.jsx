import axios from "axios";

export default class CompanyService{
    getCompany(){return axios.get("http://localhost:8080/api/Company/getall")}
}