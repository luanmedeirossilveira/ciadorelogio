import dbConnect from "../../db/dbConnect"
import Produtos from '../../models/Produtos'

dbConnect();

export default async(req, res) => {

  const data = JSON.parse(req.body);

  const produtos = await Produtos.create({
    image: data.image,
    name: data.name,
    value: data.value,
    description: data.description,
    type: data.type,
    marca: data.marca
  })

  res.statusCode = 200
  res.json({ success: true, data: produtos })
}
