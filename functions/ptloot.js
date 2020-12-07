const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async function (event, context) {
  const id = event.path.match(/\d+$/)

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      name: 'PoolTogether LootBox',
      description: 'PoolTogether players can win boxes full of loot to plunder. A LootBox can store ERC20s, ERC721s and ERC1155s',
      image: 'https://nfts.pooltogether.com/icon-lootbox@2x.png',
      external_url: `https://nfts.pooltogether.com/ptloot/${id}`,
    })
  }
}