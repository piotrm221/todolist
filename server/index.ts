import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createClient } from '@supabase/supabase-js'

dotenv.config();

const supabaseUrl = 'https://rywtysncvcqnypflosfd.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});  

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 