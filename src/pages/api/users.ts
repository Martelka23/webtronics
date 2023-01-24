import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { UserData } from "../../@types";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await axios.get<UserData[]>('https://martelka23.ru/feedback');
  const data: UserData[] = response.data;
  const newUser: UserData = req.body;
  
  data.push(newUser);

  await axios.post('https://martelka23.ru/feedback', newUser);

  res.status(201).json(req.body);
}