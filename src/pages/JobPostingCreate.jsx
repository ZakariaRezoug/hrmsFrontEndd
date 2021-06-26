import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import JobPostingService from "../services/JobPostingService"
import JobWorkingTypeService from "../services/JobWorkingTypeService";
import JobTypeService from "../services/JobTypeService";
import JobService from "../services/JobService";
import CityService from "../services/CityService";



export default function JobPostingCreate() {
    let jobPostingService = new JobPostingService();
    const JobPostingAddSchema = Yup.object().shape({
        lastApplyDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
        jobDetails: Yup.string().required("Bu alanın doldurulması zorunludur"),
        jobTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        jobWorkingTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        jobId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        numberOfOpenPositions: Yup.string().required("Posizyon sayısı zorunludur").min(1, "Posizyon sayısı 1 den küçük olamaz"),
        cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        minWage: Yup.number().min(0, "0 Dan az olamaz").required("Bu alan zorunludur"),
        maxWage: Yup.number().min(0, "0 Dan az olamaz").required("Bu alan zorunludur"),
    });
    const History = useHistory();

    const formik = useFormik({
        initialValues: {
        lastApplyDate: "",
        jobDetails: "",
        jobTypeId: "",
        jobWorkingTypeId: "",
        jobId: "",
        numberOfOpenPositions: "",
        cityId: "",
        minWage: "",
        maxWage: "",
        
    },
    validationSchema: JobPostingAddSchema,
    onSubmit: (values) => {
            
            let jobPosting= { 
            company: {id: 14},    
            lastApplyDate: values.lastApplyDate,
            jobDetails:values.jobDetails,
            jobType: {jobTypeId: values.jobTypeId},
            jobWorkingType: {jobWorkingTypeId: values.jobWorkingTypeId},
            job:  {jobId: values.jobId},
            numberOfOpenPositions: values.numberOfOpenPositions,
            city:{id: values.cityId},
            minWage: values.minWage,
            maxWage: values.maxWage,}
            jobPostingService.add(jobPosting).then((result) => console.log(result.data.data));
            alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
            // history.push("/jobPosting");
            console.log(values) 
        },
    });
    const [jobWorkingType, setJobWorkingTypes] = useState([]);
    const [jobType, setJobTypes] = useState([]);
    const [city, setCities] = useState([]);
    const [job, setJobs] = useState([]);

    useEffect(() => {
        let jobWorkingTypeService = new JobWorkingTypeService();
        let jobTypeService = new JobTypeService();
        let cityService = new CityService();
        let jobService = new JobService();
    
        jobWorkingTypeService.getJobWorkingType().then((result) => setJobWorkingTypes(result.data.data));
        jobTypeService.getJobType().then((result) => setJobTypes(result.data.data));
        cityService.getCity().then((result) => setCities(result.data.data));
        jobService.getJob().then((result) => setJobs(result.data.data));
      }, []);

      const jobWorkingTypeOption = jobWorkingType.map((jobWorkingType, index) => ({
        key: index,
        text: jobWorkingType.jobWorkingType,
        value: jobWorkingType.jobWorkingTypeId,
      }));
      const jobTypeOption = jobType.map((jobType, index) => ({
        key: index,
        text: jobType.jobType,
        value: jobType.jobTypeId,
      }));
      const cityOption = city.map((city, index) => ({
        key: index,
        text: city.city,
        value: city.id,
      }));
      const jobOption = job.map((job, index) => ({
        key: index,
        text: job.jobTitle,
        value: job.jobId,
      }));

      const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
      }
    
   
return (
    <div>
      <Card fluid>
      <Card.Content header='İş ilanı Ekle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
          <label>İş Posizyonu</label>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobId")
          }
          onBlur={formik.onBlur}
          id="Id"
          value={formik.values.Id}
          options={jobOption}
          />
          {formik.errors.jobId && formik.touched.jobId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
          <label>Şehir</label>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma yeri</label>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "jobTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="jobTypeId"
                  value={formik.values.jobTypeId}
                  options={jobTypeOption}
                />
                {formik.errors.jobTypeId && formik.touched.jobTypeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobTypeId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "jobWorkingTypeId")
                  }
                  onBlur={formik.onBlur}
                  id="jobWorkingTypeId"
                  value={formik.values.jobWorkingTypeId}
                  options={jobWorkingTypeOption}
                />
                {formik.errors.jobWorkingTypeId && formik.touched.jobWorkingTypeId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.jobWorkingTypeId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minWage}
                  name="minWage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minWage && formik.touched.minWage && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minWage}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxSalary}
                  name="maxWage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxWage && formik.touched.maxWage && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxWage}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Açık Posisyon sayısı</label>
                <Input
                  style={{ width: "100%" }}
                  id="numberOfOpenPositions"
                  name="numberOfOpenPositions"
                  error={Boolean(formik.errors.numberOfOpenPositions)}
                  onChange={formik.handleChange}
                  value={formik.values.numberOfOpenPositions}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Posisyon sayısı"
                />
                {formik.errors.numberOfOpenPositions && formik.touched.numberOfOpenPositions && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.numberOfOpenPositions}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.lastDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "lastApplyDate")
                  }
                  value={formik.values.lastApplyDate}
                  onBlur={formik.handleBlur}
                  name="lastApplyDate"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.lastApplyDate && formik.touched.lastApplyDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.lastApplyDate}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.jobDetails).toString()}
                  value={formik.values.jobDetails}
                  name="jobDetails"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.jobDetails && formik.touched.jobDetails && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobDetails}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
    </div>
)
}

