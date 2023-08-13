import * as React from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAuth } from "../context/AuthContext";

export default function PaginationControlled({ page, handleChange }) {
  const { jobs } = useAuth();
  const pageCount = Math.floor(jobs.length / 12 + 1);

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      }}
      spacing={2}
    >
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </Stack>
  );
}
