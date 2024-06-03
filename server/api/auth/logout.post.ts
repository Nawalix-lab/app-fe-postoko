import type { ApiResponse } from '~/server/types/apiresponse.interface';

export default defineEventHandler(async (event) => {
  return {
    data: [],
    message: 'logout berhasil',
  } as ApiResponse<{}, string>;
});
