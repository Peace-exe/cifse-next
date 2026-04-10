// instrumentation.ts  (root of project, next to app/)
import connectDB from '@/config/db';

export async function register() {
    const green = (text:string) => `\x1b[32m${text}\x1b[0m`;
    const red = (text:string) => `\x1b[31m${text}\x1b[0m`;
    await connectDB()
        .then(() => console.log(`${green('✓')} DB connection established`))
        .catch((err) => console.log(red('✗') + " DB connection failed\n" + err.message));
}