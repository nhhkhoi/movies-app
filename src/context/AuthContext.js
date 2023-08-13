import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiServices from "../app/apiServices";

const AuthContext = createContext(null);
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({});
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const response = await apiServices.get(
          "http://localhost:4000/companies"
        );

        const data = response.data;
        setCompanies(data);
      } catch (error) {
        console.log("companies error", error);
      }
    };
    fetchCompaniesData();
  }, []);

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const response = await apiServices.get("http://localhost:4000/jobs");

        const data = response.data;
        setJobs(data);
      } catch (error) {
        console.log("job error", error);
      }
    };
    fetchJobsData();
  }, []);

  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event) => {
    let filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    setToken({ username: "BetaTester", password: "normieNoPass" });
  };

  const handleLogout = () => {
    setToken({});
  };

  const value = {
    companies,
    jobs,
    token,

    setToken,

    onLogout: handleLogout,
    onSubmit: handleSubmit,
    searchParams,
    onSearch: handleSearch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthProvider };
