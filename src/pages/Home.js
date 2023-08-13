import React from "react";
import SearchAppBar from "../components/SeachAppBar";
import { Container, CssBaseline } from "@mui/material";

import PaginationControlled from "../components/PaginationControlled";

import { useAuth } from "../context/AuthContext";
import JobCards from "../components/JobCards";

function Home() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const beginning = 12 * (page - 1);
  const end = 12 * page;

  const { jobs, searchParams } = useAuth();

  return (
    <div>
      <SearchAppBar />
      <Container
        sx={{
          p: { md: 5, sm: 2 },
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {jobs
          .filter((job) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let title = job.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());
          })
          .slice(beginning, end)

          .map((job) => (
            <JobCards key={job.id} job={job} />
          ))}
      </Container>
      <PaginationControlled page={page} handleChange={handleChange} />
      <CssBaseline />
    </div>
  );
}

export default Home;
