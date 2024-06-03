export default defineEventHandler((event) => {
  // Will only execute for /auth route
  // if (getRequestURL(event).pathname.startsWith('/api/auth')) {
  //   event.context.user = { name: 'Nitro' }
  // }
});
