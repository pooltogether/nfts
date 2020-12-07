import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  const {
    query: { id },
  } = req

  await runMiddleware(req, res, cors)

  res.statusCode = 200
  res.json({
    name: 'PoolTogether LootBox',
    description: 'PoolTogether players can win boxes full of loot to plunder. A LootBox can store ERC20s, ERC721s and ERC1155s',
    image: 'https://nfts.pooltogether.com/icon-lootbox@2x.png',
    external_url: `https://nfts.pooltogether.com/api/nfts/${id}`, 
  })
}

export default handler