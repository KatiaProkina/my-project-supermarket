import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack spacing={4}>
      <Pagination count={10} shape="rounded" size="middle" showFirstButton showLastButton />
    </Stack>
  );
}