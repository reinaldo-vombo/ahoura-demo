export const runtime = 'edge';
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'Ahoura' })
}
