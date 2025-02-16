"use client";
import axios from "axios";

export const BASE_URL = "https://aljamia-api-ztjhx.ondigitalocean.app/api/v1";

export const getAboutUs = async () => {
  const response = await axios.get(`${BASE_URL}/about-us`);
  return response.data;
};

export const getAcademics = async () => {
  const response = await axios.get(`${BASE_URL}/Academics`);
  return response.data;
};

export const getAdmission = async () => {
  const response = await axios.get(`${BASE_URL}/Admission`);
  return response.data;
};

export const getStudentsLife = async () => {
  const response = await axios.get(`${BASE_URL}/StudentsLife`);
  return response.data;
};

export const getAlumni = async () => {
  const response = await axios.get(`${BASE_URL}/Alumni`);
  return response.data;
};

export const getResearch = async () => {
  const response = await axios.get(`${BASE_URL}/Research`);
  return response.data;
};

export const getAboutUsGallery = async () => {
  const response = await axios.get(`${BASE_URL}/gallery`);
  return response.data;
};

export const getFaculties = async () => {
  const response = await axios.get(`${BASE_URL}/faculties`);
  return response.data;
};

export const getBoardOfDirector = async () => {
  const response = await axios.get(`${BASE_URL}/boardof-director`);
  return response.data;
};

export const getManagementCommitee = async () => {
  const response = await axios.get(`${BASE_URL}/administrative-council`);
  return response.data;
};

export const getNewArrivals = async () => {
  const response = await axios.get(`${BASE_URL}/new-arrivals`);
  return response.data;
};

export const getSupreamCouncil = async () => {
  const response = await axios.get(`${BASE_URL}/supream-council`);
  return response.data;
};

export const getAdministrativeCouncil = async () => {
  const response = await axios.get(`${BASE_URL}/administrative-council`);
  return response.data;
};

export const getFacultie = async () => {
  const response = await axios.get(`${BASE_URL}/faculties`);
  return response.data;
};

export const getSuccessionlist = async () => {
  const response = await axios.get(`${BASE_URL}/Succession-List`);
  return response.data;
};

export const certificate = async () => {
  const response = await axios.get(`${BASE_URL}/administrative-council`);
  return response.data;
};
export const getfaculties = async () => {
  const response = await axios.get(`${BASE_URL}/faculty-member`);
  return response.data;
};

export const getCourse = async () => {
  const response = await axios.get(`${BASE_URL}/course`);
  console.log(response.data, "coursepage api");
  return response.data;
};

export const getventures = async () => {
  const response = await axios.get(`${BASE_URL}/ventures`);
  return response.data;
};

export const getNews = async () => {
  const response = await axios.get(`${BASE_URL}/news`);
  return response.data;
};
export const getNotification = async () => {
  const response = await axios.get(`${BASE_URL}/notification`);
  return response.data;
};
export const getpublication = async () => {
  const response = await axios.get(`${BASE_URL}/publication`);
  return response.data;
};

export const getAward = async () => {
  const response = await axios.get(`${BASE_URL}/award`);
  return response.data;
};

export const postCareer = async () => {
  const response = await axios.post(`${BASE_URL}/career`);
  return response.data;
};

export const getEvents = async () => {
  const response = await axios.get(`${BASE_URL}/events`);
  return response.data;
};
